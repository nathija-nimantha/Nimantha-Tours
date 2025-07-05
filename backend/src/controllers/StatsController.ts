import { Request, Response } from 'express';
import { BaseController } from './BaseController';

export class StatsController extends BaseController {
    protected initializeRoutes(): void {
        this.router.get('/', this.getStats.bind(this));
    }

    public async getStats(req: Request, res: Response): Promise<void> {
        try {
            const [toursCount, bookingsCount, reviewsCount] = await Promise.all([
                this.prisma.tour.count(),
                this.prisma.booking.count(),
                this.prisma.review.count(),
            ]);

            const featuredTours = await this.prisma.tour.findMany({
                where: { featured: true },
                take: 3,
                include: {
                    reviews: {
                        select: { rating: true },
                    },
                },
            });

            const toursWithRating = featuredTours.map(tour => ({
                ...tour,
                averageRating: this.calculateAverageRating(tour.reviews),
                reviews: undefined,
            }));

            res.json({
                stats: {
                    tours: toursCount,
                    bookings: bookingsCount,
                    reviews: reviewsCount,
                },
                featuredTours: toursWithRating,
            });
        } catch (error) {
            console.error('Stats fetch error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    private calculateAverageRating(reviews: { rating: number }[]): number {
        if (reviews.length === 0) return 0;
        return reviews.reduce((sum: number, review: { rating: number }) => sum + review.rating, 0) / reviews.length;
    }
}