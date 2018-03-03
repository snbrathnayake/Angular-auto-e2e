import { AboutPage } from './about.po';
import { browser } from 'protractor';

describe('About Page e2e', () => {
  let page: AboutPage;

  beforeEach(() => {
    page = new AboutPage();
    page.navigateTo();
    browser.ignoreSynchronization = true;
  });

  afterEach(() => {
    browser.ignoreSynchronization = false;
  });

  it('should display welcome message [ABOUT]', () => {
    expect(page.getPageTitle()).toEqual('Welcome About');
  });

  fit('should login first', () => {
    page.login();
   // expect(page.login()).toMatch('https://was.malachite.veracode.com/login/#!/login');
  });
});
