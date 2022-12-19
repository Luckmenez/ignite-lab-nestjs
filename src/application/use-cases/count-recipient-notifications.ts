import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repository/notification-repository';

interface ICountRecipientNotifications {
  recipientId: string;
}

interface CountNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: ICountRecipientNotifications,
  ): Promise<CountNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
