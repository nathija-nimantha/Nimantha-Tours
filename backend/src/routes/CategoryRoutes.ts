import { BaseRoutes } from './BaseRoutes';
import { CategoryController } from '../controllers/CategoryController';

export class CategoryRoutes extends BaseRoutes {
    private categoryController!: CategoryController;

    protected configureRoutes(): void {
        this.categoryController = new CategoryController(this.prisma);

        this.app.get('/api/categories', this.categoryController.getCategories.bind(this.categoryController));
        this.app.get('/api/destinations', this.categoryController.getDestinations.bind(this.categoryController));
    }
}
