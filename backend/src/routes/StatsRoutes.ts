import { BaseRoutes } from './BaseRoutes';
import { StatsController } from '../controllers/StatsController';

export class StatsRoutes extends BaseRoutes {
    private statsController!: StatsController;

    protected configureRoutes(): void {
        this.statsController = new StatsController(this.prisma);

        this.app.get('/api/stats', this.statsController.getStats.bind(this.statsController));
    }
}