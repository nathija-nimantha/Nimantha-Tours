import { Request, Response } from 'express';
import { BaseController } from './BaseController';

export class ReviewController extends BaseController {
    protected initializeRoutes(): void {
        this.router.post('/', this.createReview.bind(this));
        this.router.get('/tour/:tourId', this.getReviewsByTour.bind(this));
    }

    public async createReview(req: Request, res: Response): Promise<void> {
        try {
            const { tourId, name, email, rating, title, comment } = req.body;

            // Validate required fields
            if (!tourId || !name || !email || !rating || !comment) {
                res.status(400).json({ error: 'Missing required fields' });
                return;
            }

            // Check if email has already reviewed this tour
            const existingReview = await this.prisma.review.findFirst({
                where: {
                    email,
                    tourId: parseInt(tourId),
                },
            });

            if (existingReview) {
                res.status(400).json({ error: 'You have already reviewed this tour' });
                return;
            }

            // Check if reviewer has booked this tour (for verification)
            const booking = await this.prisma.booking.findFirst({
                where: {
                    email,
                    tourId: parseInt(tourId),
                    status: 'COMPLETED',
                },
            });

            const review = await this.prisma.review.create({
                data: {
                    tourId: parseInt(tourId),
                    name,
                    email,
                    rating: parseInt(rating),
                    title,
                    comment,
                    verified: !!booking, // Mark as verified if reviewer has completed booking
                },
            });

            res.status(201).json({
                message: 'Review submitted successfully',
                review,
            });
        } catch (error) {
            console.error('Review creation error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    public async getReviewsByTour(req: Request, res: Response): Promise<void> {
        try {
            const { tourId } = req.params;
            const { page = 1, limit = 10 } = req.query;
            const skip = (Number(page) - 1) * Number(limit);

            const [reviews, total] = await Promise.all([
                this.prisma.review.findMany({
                    where: { tourId: Number(tourId) },
                    skip,
                    take: Number(limit),
                    orderBy: { createdAt: 'desc' },
                }),
                this.prisma.review.count({ where: { tourId: Number(tourId) } }),
            ]);

            res.json({
                reviews,
                pagination: {
                    page: Number(page),
                    limit: Number(limit),
                    total,
                    pages: Math.ceil(total / Number(limit)),
                },
            });
        } catch (error) {
            console.error('Reviews fetch error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}