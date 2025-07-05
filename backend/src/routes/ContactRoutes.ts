import { BaseRoutes } from './BaseRoutes';
import { ContactController } from '../controllers/ContactController';

export class ContactRoutes extends BaseRoutes {
    private contactController!: ContactController;

    protected configureRoutes(): void {
        this.contactController = new ContactController(this.prisma);

        this.app.post('/api/contact', this.contactController.createContactInquiry.bind(this.contactController));
        this.app.post('/api/newsletter/subscribe', this.contactController.subscribeToNewsletter.bind(this.contactController));
    }
}