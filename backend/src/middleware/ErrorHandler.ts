import { Request, Response, NextFunction } from 'express';

export class ErrorHandler {
    public handle(err: any, req: Request, res: Response, next: NextFunction): void {
        // Log the error
        console.error('Error occurred:', {
            message: err.message,
            stack: err.stack,
            url: req.url,
            method: req.method,
            origin: req.get('origin'),
            userAgent: req.get('user-agent'),
            timestamp: new Date().toISOString()
        });

        // Handle specific CORS errors
        if (err.message === 'Not allowed by CORS') {
            res.status(403).json({ 
                error: 'CORS policy violation',
                message: 'Origin not allowed by CORS policy',
                details: 'Please contact support if you believe this is an error'
            });
            return;
        }

        // Handle Prisma database errors
        if (err.code === 'P2002') {
            res.status(409).json({ 
                error: 'Conflict',
                message: 'A record with this information already exists'
            });
            return;
        }

        if (err.code === 'P2025') {
            res.status(404).json({ 
                error: 'Not Found',
                message: 'The requested record was not found'
            });
            return;
        }

        // Handle validation errors
        if (err.name === 'ValidationError') {
            res.status(400).json({ 
                error: 'Validation Error',
                message: err.message,
                details: err.details || null
            });
            return;
        }

        // Handle JSON parsing errors
        if (err instanceof SyntaxError && 'body' in err) {
            res.status(400).json({ 
                error: 'Invalid JSON',
                message: 'Request body contains invalid JSON'
            });
            return;
        }

        // Default error response
        const statusCode = err.statusCode || err.status || 500;
        const message = process.env.NODE_ENV === 'production' 
            ? 'Something went wrong!' 
            : err.message;

        res.status(statusCode).json({ 
            error: 'Internal Server Error',
            message,
            ...(process.env.NODE_ENV === 'development' && { 
                stack: err.stack,
                details: err
            })
        });
    }

    public handleNotFound(req: Request, res: Response): void {
        console.warn('Route not found:', {
            url: req.url,
            method: req.method,
            origin: req.get('origin'),
            timestamp: new Date().toISOString()
        });

        res.status(404).json({ 
            error: 'Route not found',
            message: `Cannot ${req.method} ${req.url}`,
            availableEndpoints: {
                tours: '/api/tours',
                bookings: '/api/bookings',
                reviews: '/api/reviews',
                contact: '/api/contact',
                categories: '/api/categories',
                stats: '/api/stats',
                health: '/health'
            }
        });
    }

    // Middleware to handle async errors
    public asyncHandler(fn: Function) {
        return (req: Request, res: Response, next: NextFunction) => {
            Promise.resolve(fn(req, res, next)).catch(next);
        };
    }
}