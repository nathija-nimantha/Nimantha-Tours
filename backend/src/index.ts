import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';
import { Routes } from './routes/Routes';
import { ErrorHandler } from './middleware/ErrorHandler';
import { corsOptions } from './config/cors';

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
    // Security middleware
    this.app.use(helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" },
      crossOriginEmbedderPolicy: false,
    }));
    
    // CORS middleware with specific configuration
    this.app.use(cors(corsOptions));
    
    // Handle preflight requests for all routes
    this.app.options('*', cors(corsOptions));
    
    // Body parsing middleware
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));
    
    // Logging middleware
    this.app.use(morgan('combined'));
    
    // Trust proxy (important if behind a reverse proxy like Nginx)
    this.app.set('trust proxy', 1);
  }

  private initializeRoutes(): void {
    // Add a health check endpoint before other routes
    this.app.get('/health', (req, res) => {
      res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
      });
    });

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
      console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🌐 CORS enabled for: https://nimanthatours.com`);
      console.log(`🔒 Security headers enabled`);
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
      console.log('\n🛑 Shutting down gracefully...');
      await this.prisma.$disconnect();
      console.log('✅ Database connection closed');
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
      await this.prisma.$disconnect();
      console.log('✅ Database connection closed');
      process.exit(0);
    });
  }
}

// Start the application
const app = new App();
app.listen();