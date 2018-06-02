import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('Default auto-e2e App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message-1', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome Home');
  });

  it('copy function test ', () => {
    let condition = browser.ExpectedConditions;
    browser.wait(condition.urlContains('http://localhost:4200/#/home')).then(() => {
      page.copyToClipboard();
    });

  });

  it('print' ,() => {
    expect(page.print()).toMatch('sameera');
  });
});
