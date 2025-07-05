import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';
import { Routes } from './routes/Routes';
import { ErrorHandler } from './middleware/ErrorHandler';

dotenv.config();

class App {
  private app: express.Application;
  private prisma: PrismaClient;
  private port: number;

  constructor() {
    this.app = express();
    this.prisma = new PrismaClient();
    this.port = Number(process.env.PORT) || 5000;

    this.initializeMiddleware();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddleware(): void {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan('combined'));
  }

  private initializeRoutes(): void {
    // Initialize all routes
    new Routes(this.app, this.prisma);
  }

  private initializeErrorHandling(): void {
    const errorHandler = new ErrorHandler();
    this.app.use(errorHandler.handle);
    this.app.use('*', errorHandler.handleNotFound);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server is running on port ${this.port}`);
    });

    process.on('SIGINT', async () => {
      await this.prisma.$disconnect();
      process.exit();
    });
  }
}

// Start the application
const app = new App();
app.listen();