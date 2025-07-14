import { BaseRoutes } from './BaseRoutes';
import { TourController } from '../controllers/TourController';

export class TourRoutes extends BaseRoutes {
    private tourController!: TourController;

    protected configureRoutes(): void {
        this.tourController = new TourController(this.prisma);

        // Get all tours with filtering and pagination
        this.app.get('/api/tours', this.tourController.getTours.bind(this.tourController));
        
        // Get featured tours
        this.app.get('/api/tours/featured', this.tourController.getFeaturedTours.bind(this.tourController));
        
        // Get tours by category
        this.app.get('/api/tours/category/:category', this.tourController.getToursByCategory.bind(this.tourController));
        
        // Get tour by slug
        this.app.get('/api/tours/slug/:slug', this.tourController.getTourBySlug.bind(this.tourController));
        
        // Get tour by ID (should be last to avoid conflicts)
        this.app.get('/api/tours/:id', this.tourController.getTourById.bind(this.tourController));
    }
}