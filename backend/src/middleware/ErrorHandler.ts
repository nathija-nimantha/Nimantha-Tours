import { Request, Response, NextFunction } from 'express';

export class ErrorHandler {
    public handle(err: any, req: Request, res: Response, next: NextFunction): void {
        console.error(err.stack);
        res.status(500).json({ error: 'Something went wrong!' });
    }

    public handleNotFound(req: Request, res: Response): void {
        res.status(404).json({ error: 'Route not found' });
    }
}