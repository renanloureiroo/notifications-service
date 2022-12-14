import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/useCases/sendNotification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notification')
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return { notification };
  }
}
