import { GatewayPage } from './gateway.po';
import { browser, element, by } from 'protractor';
import { PathURL } from '../config/routes.e2e';

describe('GatewayPage Page ', () => {
  let page: GatewayPage;

  beforeEach(() => {
    page = new GatewayPage();
    browser.ignoreSynchronization = true;
  });

  afterEach(() => {
    browser.ignoreSynchronization = false;
  });

  it('Should redirect to #/add-gateway', () => {
    page.navigateTo();
    expect(browser.driver.getCurrentUrl()).toMatch(PathURL.baseURL + '/add-gateway');
  });

  it('should inputs', () => {
    page.sendInput();
  });


  it('verocode support link', () => {
    expect(page.supportLinkClicked()).toBe(true);
    browser.sleep(5000);
  });


});
