import { Body, Controller, Get, Post } from '@nestjs/common';
import { Notification } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './database/prisma/prisma.service';
import { CreateNotificationBody } from './http/dtos/create-notification-body';

@Controller('notification')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list(): Promise<Notification[]> {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);
    const { recipientId, content, category } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
