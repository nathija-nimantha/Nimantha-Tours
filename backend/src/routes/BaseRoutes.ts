import { Application } from 'express';
import { PrismaClient } from '@prisma/client';

export abstract class BaseRoutes {
    protected app: Application;
    protected prisma: PrismaClient;

    constructor(app: Application, prisma: PrismaClient) {
        this.app = app;
        this.prisma = prisma;
        this.configureRoutes();
    }

    protected abstract configureRoutes(): void;
}