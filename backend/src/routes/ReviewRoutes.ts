import { BaseRoutes } from './BaseRoutes';
import { ReviewController } from '../controllers/ReviewController';

export class ReviewRoutes extends BaseRoutes {
    private reviewController!: ReviewController;

    protected configureRoutes(): void {
        this.reviewController = new ReviewController(this.prisma);

        this.app.post('/api/reviews', this.reviewController.createReview.bind(this.reviewController));
        this.app.get('/api/reviews/tour/:tourId', this.reviewController.getReviewsByTour.bind(this.reviewController));
    }
}