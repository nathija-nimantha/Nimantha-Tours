import { BaseRoutes } from './BaseRoutes';
import { BookingController } from '../controllers/BookingController';

export class BookingRoutes extends BaseRoutes {
    private bookingController!: BookingController;

    protected configureRoutes(): void {
        this.bookingController = new BookingController(this.prisma);

        this.app.post('/api/bookings', this.bookingController.createBooking.bind(this.bookingController));
        this.app.post('/api/bookings/check', this.bookingController.checkBooking.bind(this.bookingController));
        this.app.get('/api/bookings/:bookingId', this.bookingController.getBookingById.bind(this.bookingController));
    }
}