// src/middleware/security.ts
import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

// Rate limiting middleware
export const createRateLimit = () => {
    return rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests per windowMs
        message: {
            error: 'Too many requests',
            message: 'Too many requests from this IP, please try again later.',
            retryAfter: '15 minutes'
        },
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
        skip: (req) => {
            // Skip rate limiting for health checks
            return req.path === '/health';
        }
    });
};

// API-specific rate limiting (more restrictive for API endpoints)
export const createApiRateLimit = () => {
    return rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 50, // Limit each IP to 50 API requests per windowMs
        message: {
            error: 'API rate limit exceeded',
            message: 'Too many API requests from this IP, please try again later.',
            retryAfter: '15 minutes'
        },
        standardHeaders: true,
        legacyHeaders: false,
    });
};

// Request logging middleware
export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    
    // Log request details
    console.log(`📝 ${req.method} ${req.url}`, {
        origin: req.get('origin'),
        userAgent: req.get('user-agent'),
        ip: req.ip,
        timestamp: new Date().toISOString()
    });

    // Log response time when request completes
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`✅ ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
    });

    next();
};

// Security headers middleware
export const securityHeaders = (req: Request, res: Response, next: NextFunction) => {
    // Add custom security headers
    res.setHeader('X-API-Version', '1.0.0');
    res.setHeader('X-Powered-By', 'Nimantha Tours API');
    
    // Remove Express header for security
    res.removeHeader('X-Powered-By');
    
    next();
};

// Validate API key middleware (optional - for future use)
export const validateApiKey = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.get('X-API-Key');
    
    // Skip API key validation in development
    if (process.env.NODE_ENV === 'development') {
        return next();
    }
    
    // If API key is configured, validate it
    if (process.env.API_KEY && apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            error: 'Unauthorized',
            message: 'Invalid API key'
        });
    }
    
    next();
};