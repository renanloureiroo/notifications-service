import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from 'src/application/repositories/notificationsRepository';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        category: notification.category,
        content: notification.content.value,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}

export { PrismaNotificationsRepository };
