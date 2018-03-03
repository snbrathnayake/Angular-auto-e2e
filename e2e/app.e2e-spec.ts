import { AppPage } from './app.po';

describe('Default auto-e2e App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message-1', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome Home');
  });
});
