import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const content = new Notification({
      recipientId: 'example-recipientId',
      content: new Content('Nova solicitação de amizade!'),
      category: 'Social',
    });

    expect(content).toBeTruthy();
  });
});
