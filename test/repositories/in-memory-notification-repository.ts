import { Notification } from '@application/entities/notification';
import { NotificationRepository } from '@application/repository/notification-repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const notificationsCount = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
    return notificationsCount;
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (notificationData) => notificationData.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notificationsList = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
    return notificationsList;
  }
}
