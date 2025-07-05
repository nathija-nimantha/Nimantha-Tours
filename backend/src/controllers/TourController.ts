import { Request, Response } from 'express';
import { BaseController } from './BaseController';

export class TourController extends BaseController {
    protected initializeRoutes(): void {
        this.router.get('/', this.getTours.bind(this));
        this.router.get('/:id', this.getTourById.bind(this));
        this.router.get('/slug/:slug', this.getTourBySlug.bind(this));
    }

    public async getTours(req: Request, res: Response): Promise<void> {
        try {
            const { page = 1, limit = 10, category, difficulty, featured, search } = req.query;
            const skip = (Number(page) - 1) * Number(limit);

            let whereClause: any = {};

            if (category) whereClause.category = category;
            if (difficulty) whereClause.difficulty = difficulty;
            if (featured === 'true') whereClause.featured = true;
            if (search) {
                whereClause.OR = [
                    { title: { contains: search as string, mode: 'insensitive' } },
                    { description: { contains: search as string, mode: 'insensitive' } },
                    { location: { contains: search as string, mode: 'insensitive' } },
                ];
            }

            const [tours, total] = await Promise.all([
                this.prisma.tour.findMany({
                    where: whereClause,
                    include: {
                        reviews: {
                            select: {
                                rating: true,
                            },
                        },
                        _count: {
                            select: {
                                reviews: true,
                            },
                        },
                    },
                    skip,
                    take: Number(limit),
                    orderBy: { createdAt: 'desc' },
                }),
                this.prisma.tour.count({ where: whereClause }),
            ]);

            const toursWithRating = tours.map(tour => ({
                ...tour,
                averageRating: this.calculateAverageRating(tour.reviews),
                reviews: undefined,
            }));

            res.json({
                tours: toursWithRating,
                pagination: {
                    page: Number(page),
                    limit: Number(limit),
                    total,
                    pages: Math.ceil(total / Number(limit)),
                },
            });
        } catch (error) {
            console.error('Tours fetch error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    public async getTourById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const tour = await this.prisma.tour.findUnique({
                where: { id: Number(id) },
                include: {
                    itinerary: {
                        orderBy: { day: 'asc' },
                    },
                    reviews: {
                        orderBy: { createdAt: 'desc' },
                    },
                    inclusions: true,
                    exclusions: true,
                    _count: {
                        select: {
                            reviews: true,
                        },
                    },
                },
            });

            if (!tour) {
                res.status(404).json({ error: 'Tour not found' });
                return;
            }

            const averageRating = this.calculateAverageRating(tour.reviews);

            res.json({
                ...tour,
                averageRating,
            });
        } catch (error) {
            console.error('Tour fetch error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    public async getTourBySlug(req: Request, res: Response): Promise<void> {
        try {
            const { slug } = req.params;

            const tour = await this.prisma.tour.findUnique({
                where: { slug },
                include: {
                    itinerary: {
                        orderBy: { day: 'asc' },
                    },
                    reviews: {
                        orderBy: { createdAt: 'desc' },
                    },
                    inclusions: true,
                    exclusions: true,
                },
            });

            if (!tour) {
                res.status(404).json({ error: 'Tour not found' });
                return;
            }

            const averageRating = this.calculateAverageRating(tour.reviews);

            res.json({
                ...tour,
                averageRating,
            });
        } catch (error) {
            console.error('Tour fetch error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    private calculateAverageRating(reviews: { rating: number }[]): number {
        if (reviews.length === 0) return 0;
        return reviews.reduce((sum: number, review: { rating: number }) => sum + review.rating, 0) / reviews.length;
    }
}