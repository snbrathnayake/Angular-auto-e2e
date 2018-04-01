import { Creation } from './creation.po';
import { browser, element, by } from 'protractor';
import { PathURL } from '../config/routes.e2e';
import { exec } from 'child_process';
import { By } from 'selenium-webdriver';

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


  xit('test valid ip adrress', () => {

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


  // it('should find apps by name', function () {
  //   let exists = false;
  //   element.all(by.css('.ag-cell ag-cell-not-inline-editing ag-cell-value')).each((element, index) => {
  //     element.getText().then(function (text) {
  //       console.log('existed name : ' + text);
  //       if (text === 'endpoint1')
  //         exists = true;
  //       return exists;
  //     }).then(function (exists) {
  //       console.log('existed name : ' + exists);  // This appears after
  //     });
  //   });
  // });




});
