import { Request, Response } from 'express';
import { BaseController } from './BaseController';

export class CategoryController extends BaseController {
    protected initializeRoutes(): void {
        this.router.get('/', this.getCategories.bind(this));
        this.router.get('/', this.getDestinations.bind(this));
    }

    public async getCategories(req: Request, res: Response): Promise<void> {
        try {
            const categories = await this.prisma.category.findMany({
                orderBy: { name: 'asc' },
            });
            res.json(categories);
        } catch (error) {
            console.error('Categories fetch error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    public async getDestinations(req: Request, res: Response): Promise<void> {
        try {
            const { popular } = req.query;
            let whereClause: any = {};

            if (popular === 'true') {
                whereClause.popular = true;
            }

            const destinations = await this.prisma.destination.findMany({
                where: whereClause,
                orderBy: { name: 'asc' },
            });

            res.json(destinations);
        } catch (error) {
            console.error('Destinations fetch error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}