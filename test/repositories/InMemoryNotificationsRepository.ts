import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from 'src/application/repositories/notificationsRepository';

class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
export { InMemoryNotificationsRepository };
