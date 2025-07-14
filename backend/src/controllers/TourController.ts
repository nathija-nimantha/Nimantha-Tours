import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export class TourController {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    public async getTours(req: Request, res: Response): Promise<void> {
        try {
            const { 
                page = 1, 
                limit = 10, 
                category, 
                difficulty, 
                featured, 
                search,
                minPrice,
                maxPrice,
                location
            } = req.query;
            
            const skip = (Number(page) - 1) * Number(limit);

            let whereClause: any = {};

            // Filter by category
            if (category) {
                whereClause.category = {
                    contains: category as string,
                    mode: 'insensitive'
                };
            }

            // Filter by difficulty
            if (difficulty) {
                whereClause.difficulty = {
                    contains: difficulty as string,
                    mode: 'insensitive'
                };
            }

            // Filter by featured status
            if (featured === 'true') {
                whereClause.featured = true;
            }

            // Filter by location
            if (location) {
                whereClause.location = {
                    contains: location as string,
                    mode: 'insensitive'
                };
            }

            // Search functionality
            if (search) {
                whereClause.OR = [
                    { title: { contains: search as string, mode: 'insensitive' } },
                    { description: { contains: search as string, mode: 'insensitive' } },
                    { location: { contains: search as string, mode: 'insensitive' } },
                    { category: { contains: search as string, mode: 'insensitive' } },
                    {
                        highlights: {
                            hasSome: [(search as string)]
                        }
                    }
                ];
            }

            // Price range filtering (extract numeric value from price string)
            if (minPrice || maxPrice) {
                // This would require additional logic to parse price strings like "$139"
                // For now, we'll skip price filtering until prices are standardized
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
                                bookings: true,
                            },
                        },
                    },
                    skip,
                    take: Number(limit),
                    orderBy: [
                        { featured: 'desc' }, // Featured tours first
                        { createdAt: 'desc' }
                    ],
                }),
                this.prisma.tour.count({ where: whereClause }),
            ]);

            const toursWithCalculatedRating = tours.map(tour => {
                const calculatedRating = this.calculateAverageRating(tour.reviews);
                const finalRating = tour.rating || calculatedRating;
                
                return {
                    ...tour,
                    averageRating: finalRating,
                    reviewCount: tour._count.reviews,
                    bookingCount: tour._count.bookings,
                    reviews: undefined, // Remove reviews from response
                    _count: undefined, // Remove count object
                };
            });

            res.json({
                success: true,
                data: {
                    tours: toursWithCalculatedRating,
                    pagination: {
                        page: Number(page),
                        limit: Number(limit),
                        total,
                        pages: Math.ceil(total / Number(limit)),
                        hasNext: Number(page) < Math.ceil(total / Number(limit)),
                        hasPrev: Number(page) > 1
                    },
                }
            });
        } catch (error) {
            console.error('Tours fetch error:', error);
            res.status(500).json({ 
                success: false,
                error: 'Failed to fetch tours',
                message: 'Internal server error' 
            });
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
                        take: 10, // Limit reviews in detail view
                    },
                    inclusions: true,
                    exclusions: true,
                    _count: {
                        select: {
                            reviews: true,
                            bookings: true,
                        },
                    },
                },
            });

            if (!tour) {
                res.status(404).json({ 
                    success: false,
                    error: 'Tour not found',
                    message: `Tour with ID ${id} does not exist`
                });
                return;
            }

            const calculatedRating = this.calculateAverageRating(tour.reviews);
            const finalRating = tour.rating || calculatedRating;

            res.json({
                success: true,
                data: {
                    ...tour,
                    averageRating: finalRating,
                    reviewCount: tour._count.reviews,
                    bookingCount: tour._count.bookings,
                    _count: undefined,
                }
            });
        } catch (error) {
            console.error('Tour fetch error:', error);
            res.status(500).json({ 
                success: false,
                error: 'Failed to fetch tour',
                message: 'Internal server error' 
            });
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
                        take: 10,
                    },
                    inclusions: true,
                    exclusions: true,
                    _count: {
                        select: {
                            reviews: true,
                            bookings: true,
                        },
                    },
                },
            });

            if (!tour) {
                res.status(404).json({ 
                    success: false,
                    error: 'Tour not found',
                    message: `Tour with slug "${slug}" does not exist`
                });
                return;
            }

            const calculatedRating = this.calculateAverageRating(tour.reviews);
            const finalRating = tour.rating || calculatedRating;

            res.json({
                success: true,
                data: {
                    ...tour,
                    averageRating: finalRating,
                    reviewCount: tour._count.reviews,
                    bookingCount: tour._count.bookings,
                    _count: undefined,
                }
            });
        } catch (error) {
            console.error('Tour fetch error:', error);
            res.status(500).json({ 
                success: false,
                error: 'Failed to fetch tour',
                message: 'Internal server error' 
            });
        }
    }

    // Get tours by category
    public async getToursByCategory(req: Request, res: Response): Promise<void> {
        try {
            const { category } = req.params;
            const { page = 1, limit = 10 } = req.query;
            const skip = (Number(page) - 1) * Number(limit);

            const [tours, total] = await Promise.all([
                this.prisma.tour.findMany({
                    where: {
                        category: {
                            contains: category,
                            mode: 'insensitive'
                        }
                    },
                    include: {
                        reviews: {
                            select: { rating: true }
                        },
                        _count: {
                            select: {
                                reviews: true,
                                bookings: true,
                            },
                        },
                    },
                    skip,
                    take: Number(limit),
                    orderBy: { createdAt: 'desc' }
                }),
                this.prisma.tour.count({
                    where: {
                        category: {
                            contains: category,
                            mode: 'insensitive'
                        }
                    }
                })
            ]);

            const toursWithRating = tours.map(tour => {
                const calculatedRating = this.calculateAverageRating(tour.reviews);
                const finalRating = tour.rating || calculatedRating;
                
                return {
                    ...tour,
                    averageRating: finalRating,
                    reviewCount: tour._count.reviews,
                    bookingCount: tour._count.bookings,
                    reviews: undefined,
                    _count: undefined,
                };
            });

            res.json({
                success: true,
                data: {
                    tours: toursWithRating,
                    category,
                    pagination: {
                        page: Number(page),
                        limit: Number(limit),
                        total,
                        pages: Math.ceil(total / Number(limit)),
                    },
                }
            });
        } catch (error) {
            console.error('Tours by category fetch error:', error);
            res.status(500).json({ 
                success: false,
                error: 'Failed to fetch tours by category',
                message: 'Internal server error' 
            });
        }
    }

    // Get featured tours
    public async getFeaturedTours(req: Request, res: Response): Promise<void> {
        try {
            const { limit = 6 } = req.query;

            const tours = await this.prisma.tour.findMany({
                where: { featured: true },
                include: {
                    reviews: {
                        select: { rating: true }
                    },
                    _count: {
                        select: {
                            reviews: true,
                            bookings: true,
                        },
                    },
                },
                take: Number(limit),
                orderBy: { createdAt: 'desc' }
            });

            const toursWithRating = tours.map(tour => {
                const calculatedRating = this.calculateAverageRating(tour.reviews);
                const finalRating = tour.rating || calculatedRating;
                
                return {
                    ...tour,
                    averageRating: finalRating,
                    reviewCount: tour._count.reviews,
                    bookingCount: tour._count.bookings,
                    reviews: undefined,
                    _count: undefined,
                };
            });

            res.json({
                success: true,
                data: {
                    tours: toursWithRating,
                    count: toursWithRating.length
                }
            });
        } catch (error) {
            console.error('Featured tours fetch error:', error);
            res.status(500).json({ 
                success: false,
                error: 'Failed to fetch featured tours',
                message: 'Internal server error' 
            });
        }
    }

    private calculateAverageRating(reviews: { rating: number }[]): number {
        if (reviews.length === 0) return 0;
        const sum = reviews.reduce((acc: number, review: { rating: number }) => acc + review.rating, 0);
        return Math.round((sum / reviews.length) * 10) / 10; // Round to 1 decimal place
    }

    // Helper method to extract numeric price from string (e.g., "$139" -> 139)
    private extractNumericPrice(priceString: string): number {
        const numericValue = priceString.replace(/[^0-9.]/g, '');
        return parseFloat(numericValue) || 0;
    }
}