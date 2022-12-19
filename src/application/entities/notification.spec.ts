import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'social',
      content: new Content('Você recebeu uma nova mensagem'),
      recipientId: 'any-id-example',
    });

    expect(notification).toBeTruthy();
  });
});
