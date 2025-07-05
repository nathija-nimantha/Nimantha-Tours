import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

export abstract class BaseController {
    protected router: Router;
    protected prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.router = Router();
        this.prisma = prisma;
        this.initializeRoutes();
    }

    protected abstract initializeRoutes(): void;

    public getRouter(): Router {
        return this.router;
    }
}