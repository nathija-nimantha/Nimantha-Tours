import { Request, Response } from 'express';
import { BaseController } from './BaseController';

export class BookingController extends BaseController {
    protected initializeRoutes(): void {
        this.router.post('/', this.createBooking.bind(this));
        this.router.post('/check', this.checkBooking.bind(this));
        this.router.get('/:bookingId', this.getBookingById.bind(this));
    }

    public async createBooking(req: Request, res: Response): Promise<void> {
        try {
            const {
                title,
                name,
                nationality,
                email,
                phone,
                startDate,
                nights,
                adults,
                children,
                accommodation,
                specialNote,
                hearAboutUs,
                otherDetails
            } = req.body;

            // Validate required fields
            if (!title || !name || !nationality || !email || !phone || !startDate || !nights || !adults) {
                res.status(400).json({ error: 'Missing required fields' });
                return;
            }

            // Get the latest booking number
            const latestBooking = await this.prisma.booking.findFirst({
                orderBy: { id: 'desc' },
                select: { bookingId: true }
            });
            let baseNumber = 1;
            if (latestBooking && latestBooking.bookingId) {
                const currentNumber = parseInt(latestBooking.bookingId.substring(2));
                baseNumber = currentNumber + 1;
            }

            const maxAttempts = 5;
            let attempt = 0;
            let booking = null;
            let lastError = null;
            while (attempt < maxAttempts) {
                try {
                    const bookingId = `BK${(baseNumber + attempt).toString().padStart(4, '0')}`;
                    booking = await this.prisma.booking.create({
                        data: {
                            bookingId,
                            title,
                            name,
                            nationality,
                            email,
                            phone,
                            startDate: new Date(startDate),
                            nights: parseInt(nights),
                            adults: parseInt(adults),
                            children: parseInt(children),
                            accommodation,
                            specialNote,
                            hearAboutUs,
                            otherDetails,
                            totalPrice: 0, // Default to 0 since no tour pricing
                        },
                    });
                    break; // Success
                } catch (error: any) {
                    if (error.code === 'P2002' && error.meta && error.meta.target && error.meta.target.includes('bookingId')) {
                        attempt++;
                        lastError = error;
                        continue; // Try next number
                    } else {
                        throw error;
                    }
                }
            }

            if (!booking) {
                throw lastError || new Error('Failed to create booking after multiple attempts');
            }

            res.status(201).json({
                message: 'Booking created successfully',
                booking,
                bookingId: booking.bookingId,
            });
        } catch (error) {
            console.error('Booking error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    public async checkBooking(req: Request, res: Response): Promise<void> {
        try {
            const { email, bookingId } = req.body;

            if (!email || !bookingId) {
                res.status(400).json({ error: 'Email and booking ID are required' });
                return;
            }

            const booking = await this.prisma.booking.findFirst({
                where: {
                    bookingId: bookingId,
                    email: email,
                },
                include: {
                    payment: true,
                },
            });

            if (!booking) {
                res.status(404).json({ error: 'Booking not found with provided details' });
                return;
            }

            res.json(booking);
        } catch (error) {
            console.error('Booking check error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    public async getBookingById(req: Request, res: Response): Promise<void> {
        try {
            const { bookingId } = req.params;

            const booking = await this.prisma.booking.findUnique({
                where: { bookingId: bookingId },
                include: {
                    payment: true,
                },
            });

            if (!booking) {
                res.status(404).json({ error: 'Booking not found' });
                return;
            }

            res.json(booking);
        } catch (error) {
            console.error('Booking fetch error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}