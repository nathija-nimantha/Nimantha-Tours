import { Application } from 'express';
import { PrismaClient } from '@prisma/client';
import { TourRoutes } from './TourRoutes';
import { BookingRoutes } from './BookingRoutes';
import { ReviewRoutes } from './ReviewRoutes';
import { ContactRoutes } from './ContactRoutes';
import { CategoryRoutes } from './CategoryRoutes';
import { StatsRoutes } from './StatsRoutes';

export class Routes {
    private app: Application;
    private prisma: PrismaClient;

    constructor(app: Application, prisma: PrismaClient) {
        this.app = app;
        this.prisma = prisma;
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        // Basic health check route
        this.app.get('/', (req, res) => {
            res.json({ message: 'Nimantha Tours API is running!' });
        });

        // Initialize and register all route modules
        new TourRoutes(this.app, this.prisma);
        new BookingRoutes(this.app, this.prisma);
        new ReviewRoutes(this.app, this.prisma);
        new ContactRoutes(this.app, this.prisma);
        new CategoryRoutes(this.app, this.prisma);
        new StatsRoutes(this.app, this.prisma);
    }
}