import { HomePage } from './home.po';
import { browser } from 'protractor';

describe('Home Page e2e', () => {
    let page: HomePage;
  
    beforeEach(() => {
      page = new HomePage();
      browser.ignoreSynchronization = true;
    });
  
    afterEach(()=> {
        browser.ignoreSynchronization = false;
    });

    it('should display welcome message [HOME]', () => {
      page.navigateTo();
      expect(page.getPageTitle()).toEqual('Welcome Home');
    });
  });
  