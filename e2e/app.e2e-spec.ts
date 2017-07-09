import { MyZKHTestPage } from './app.po';

describe('my-zkhtest App', () => {
  let page: MyZKHTestPage;

  beforeEach(() => {
    page = new MyZKHTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
