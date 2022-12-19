import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Começou agora a maratona ignite');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a content with less than 5 characters', () => {
    expect(() => new Content('sim')).toThrowError();
  });

  it('should not be able to create a content with less than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrowError();
  });
});
