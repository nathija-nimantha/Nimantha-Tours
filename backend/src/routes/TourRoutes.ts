import { BaseRoutes } from './BaseRoutes';
import { TourController } from '../controllers/TourController';

export class TourRoutes extends BaseRoutes {
    private tourController!: TourController;

    protected configureRoutes(): void {
        this.tourController = new TourController(this.prisma);

        this.app.get('/api/tours', this.tourController.getTours.bind(this.tourController));
        this.app.get('/api/tours/:id', this.tourController.getTourById.bind(this.tourController));
        this.app.get('/api/tours/slug/:slug', this.tourController.getTourBySlug.bind(this.tourController));
    }
}