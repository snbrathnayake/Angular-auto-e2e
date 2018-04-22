import { Creation } from './creation.po';
import { browser, element, by } from 'protractor';
import { PathURL } from '../config/routes.e2e';


describe('Creation page ', () => {
  let page: Creation;

  beforeEach(() => {
    page = new Creation();
    browser.ignoreSynchronization = true;
  });

  afterEach(() => {
    browser.ignoreSynchronization = false;
  });


  it('init page overview page', () => {
    page.navigateTo().then(() => {

      let condition = browser.ExpectedConditions;
      browser.wait(condition.urlContains(PathURL.baseURL + '/view-gateways')).then(() => {
        expect(browser.driver.getCurrentUrl()).toMatch('https://was.malachite.veracode.com/mvsa/#/view-gateways');
      });
    });
  });

  it('First gateWay', () => {
    const link = element(by.css('body > app-root > div > app-gateway-list > div > div.center > app-view-gateway:nth-child(1) > div > div > div.header > h2'));
    link.click();
    browser.sleep(1000);
  });

  it('new page is loading..', () => {
    browser.wait(browser.ExpectedConditions.urlContains(PathURL.baseURL + '/gateway-detail')).then(() => {
      expect(browser.driver.getCurrentUrl()).toMatch('https://was.malachite.veracode.com/mvsa/#/gateway-detail/1');
    });

  });

  it('TEST', () => {
    const scond = element(by.css('body > app-root > div > app-gateway-list > div > div.center > app-view-gateway:nth-child(664) > div > div > div.header > h2'));
    try {
      browser.driver.findElement(scond);
    } catch (error) {
      console.error('Not found : ' + error);
      browser.debugger();
    }

  });

  it('scroll up', () => {

    const scrollDiv = element(by.css('.dropdown-menu'));
    element.all(by.css('#dropdownBasic1')).each(function (item, index) {
      item.click().then(function () {
        const lastElement = element.all(by.css('app-gateway-detail-actions-renderer > vc-dropdown > div > div > button:nth-child(3)')).get(index);
        browser.executeScript('arguments[0].scrollIntoView()', lastElement.getWebElement());
        browser.sleep(500);
      }).then(() => {
        item.click();
      });
    });
  });

  it('new gateway is displayed', () => {
    page.isDisplayedNewGateway().then(() => {
      expect(page.exists).toBe(true);
      browser.sleep(2000);
      page.showSelectedGateway(page.indexValue);
    });
  });


  it('/edit-gateway page show', () => {
    expect(browser.getCurrentUrl()).toContain('edit-gateway');
  });

  it('check Gateway Status ready icon', () => {
    const icon = element(by.css('app-view-gateway > div > div > div > div > div.gateway-status > div > div.details > div > div.image.glyphicon.glyphicon-ok'));
    const status = element(by.css('app-view-gateway > div > div > div > div > div.gateway-status > div > div.details > div > div.text'));
    const mark = icon.getAttribute('class');

    expect(mark).toEqual('image glyphicon glyphicon-ok');
    expect(status.getText()).toEqual('Ready');
  });


  it('should displayed the created endpoint which related to GATEWAY', () => {
    element.all(by.xpath('//*[@id="borderLayout_eGridPanel"]/div[1]/div/div[4]/div[3]/div/div/div')).each((elm) => {
      elm.getText().then(function (text) {
        if (text.startsWith('endpoint_2')) {
          //  console.log('matched : ==== ' + text.startsWith('endpoint_2'));
          expect(text.startsWith('endpoint_2')).toBe(true);
        }
      });
    });

  });

  it('should find apps by name', function () {
    let exists = false;
    element.all(by.css('.ag-cell ag-cell-not-inline-editing ag-cell-value')).each((element, index) => {
      element.getText().then(function (text) {
        console.log('existed name : ' + text);
        if (text === 'endpoint1')
          exists = true;
        return exists;
      }).then(function (exists) {
        console.log('existed name : ' + exists);  // This appears after
      });
    });
  });




});
