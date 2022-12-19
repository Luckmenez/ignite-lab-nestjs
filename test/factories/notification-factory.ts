import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { Content } from '../../src/application/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Alguma coisa2'),
    recipientId: 'recipient-1',
    ...override,
  });
}
