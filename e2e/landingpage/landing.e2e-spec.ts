import { LandingPage } from './landing.po';
import { browser } from 'protractor';
import { PathURL } from '../config/routes.e2e';

describe('Landing Page ', () => {
  let page: LandingPage;

  beforeEach(() => {
    page = new LandingPage();
    browser.ignoreSynchronization = true;
  });

  afterEach(() => {
    browser.ignoreSynchronization = false;
  });

  it('should redirecte to sign page', () => {
    page.navigateTo();
    browser.sleep(2000);
    expect(browser.driver.getCurrentUrl()).toMatch(PathURL.loginURL);
  });

  it('should login into platform', () => {

    browser.sleep(2000);
    expect(page.login()).toMatch(PathURL.baseURL);
  });

  it('should redirected #/landing-page', () => {
    expect(browser.driver.getCurrentUrl()).toMatch(PathURL.baseURL);
    browser.sleep(2000);
  });

  it('should dispaly the navigation', () => {
    expect(page.isPresentNavBar()).toBe(true);
  });

  it('should dispaly the veracode logo', () => {
    expect(page.isPresentLogos()).toBe(true);
  });

  it('should display the `configure mvsa` button', () => {
    expect(page.isPresentButton()).toBe(true);
  });

  // must route action last test case 
  it('should be clickble `configure mvsa` button', () => {
    page.buttonClicked();
  });



});
