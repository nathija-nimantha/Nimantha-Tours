import { Request, Response } from 'express';
import { BaseController } from './BaseController';

export class ContactController extends BaseController {
    protected initializeRoutes(): void {
        this.router.post('/', this.createContactInquiry.bind(this));
        this.router.post('/subscribe', this.subscribeToNewsletter.bind(this));
    }

    public async createContactInquiry(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, phone, subject, message } = req.body;

            if (!name || !email || !subject || !message) {
                res.status(400).json({ error: 'Missing required fields' });
                return;
            }

            const inquiry = await this.prisma.contactInquiry.create({
                data: {
                    name,
                    email,
                    phone,
                    subject,
                    message,
                },
            });

            res.status(201).json({
                message: 'Message sent successfully',
                inquiryId: inquiry.id
            });
        } catch (error) {
            console.error('Contact form error:', error);
            res.status(500).json({ error: 'Failed to send message' });
        }
    }

    public async subscribeToNewsletter(req: Request, res: Response): Promise<void> {
        try {
            const { email } = req.body;

            if (!email) {
                res.status(400).json({ error: 'Email is required' });
                return;
            }

            await this.prisma.newsletter.upsert({
                where: { email },
                update: { subscribed: true },
                create: { email },
            });

            res.json({ message: 'Successfully subscribed to newsletter' });
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            res.status(500).json({ error: 'Failed to subscribe' });
        }
    }
}