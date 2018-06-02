import { EndpointStatus } from './endpoint-status.po';
import { browser, element, by } from 'protractor';
import { PathURL } from '../config/routes.e2e';
import { inspect } from 'util';


describe('Creation page ', () => {
  let page: EndpointStatus;


  beforeEach(() => {
    page = new EndpointStatus();
    browser.ignoreSynchronization = true;
  });

  afterEach(() => {
    browser.ignoreSynchronization = false;

  });

  it('reday page', () => {
    browser.wait(browser.ExpectedConditions.urlContains(PathURL.baseURL + '/view-gateways')).then(() => {
      expect(browser.getCurrentUrl()).toMatch('https://was.malachite.veracode.com/mvsa/#/view-gateways').then(() => {
        browser.sleep(1000);
      });
    });
  });

  it('search one gateway name [Overview page]', () => {
    page.searchGateway('First Gateway').then(() => {
      expect(page.exists).toBe(true);
      page.onclicked('body > app-root > div > app-gateway-list > div > div.center > app-view-gateway:nth-child(3) > div > div > div.header > h2');
    });
  });

  it('first gateway', () => {
    let condition = browser.ExpectedConditions;
    browser.wait(condition.urlContains(PathURL.baseURL + '/gateway-detail/1')).then(() => {
      const pencil = 'body > app-root > div > app-gateway-detail > div > div.header > div.header-left > span';
      element(by.css(pencil)).isPresent().then((show) => {
        if (show) {
          page.onclicked(pencil).then((clicked) => {
            if (show) {
              const input = 'form > vc-form-alert > vc-alert-box > div > div > p > div > div > div > input';
              page.sendKeysValueDirect();
              page.attribValue(input);
              browser.sleep(5000);
            }
          });
        }
      });
    });

  });









  // it('endpoint status includes the Ready-Pending-Offline supported states [Overview page]', () => {
  //   page.getEndpointStatusInfor(EndpointStatus.OVERVIEW);
  //   browser.sleep(2000).then(() => {
  //     expect(page.counts).toBe(3);
  //   });
  // });

  // it('endpoint status counts are reported for Ready-Pending-Offline [Overview page]', () => {
  //   expect(page.isEndpointCountReported()).toBe(true);
  // });

  // it('endpoint activity includes ScanType: `SCAN` & counts are reported [Overview page]', () => {
  //   expect(page.isEndpointActivityDisplayed(EndpointStatus.SCAN, EndpointStatus.OVERVIEW)).toBe(true);
  //   page.getEndpointActivityInfor(EndpointStatus.SCAN).then(() => {
  //     expect(page.hasActiveCount).toBe(true);
  //   });
  // });

  // it('endpoint activity includes ScanType: `DSE` & counts are reported [Overview page]', () => {
  //   expect(page.isEndpointActivityDisplayed(EndpointStatus.DSE, EndpointStatus.OVERVIEW)).toBe(true);
  //   page.getEndpointActivityInfor(EndpointStatus.DSE).then(() => {
  //     expect(page.hasActiveCount).toBe(true);
  //   });
  // });

  // it('Zero[0] active scans status includes greyed-out icon for SCAN type [Overview page]', () => {
  //   const activityReport = browser.params.SCAN;
  //   console.log(Number(activityReport) === 0);
  //   page.endpointActivityIconType(0, EndpointStatus.OVERVIEW).then(() => {
  //     if (Number(activityReport) === 0) {
  //       expect(page.greyedOutIcon).toBe(true);
  //     } else {
  //       expect(page.greyedOutIcon).toBe(false);
  //     }
  //   });
  // });

  // it('Zero[0] active scans status includes greyed-out icon for DSE type [Overview page]', () => {
  //   const activityReport = browser.params.DSE;
  //   page.endpointActivityIconType(1, EndpointStatus.OVERVIEW).then(() => {
  //     if (Number(activityReport) === 0) {
  //       expect(page.greyedOutIcon).toBe(true);
  //     } else {
  //       expect(page.greyedOutIcon).toBe(false);
  //     }
  //   });

  // });

  // it('navigates to selected `Second Gateway` page to verify the information [Gateway Details page]', () => {
  //   page.navigateToSelectedGateway().then((e) => {
  //     browser.sleep(1000).then(() => {
  //       expect(browser.getCurrentUrl()).toContain('gateway-detail');
  //       expect(page.verifySelectedGatewayName()).toMatch('GW-2500');
  //     })
  //   });
  // });

  // xit('endpoint status includes the Ready-Pending-Offline & status reports should be correct [Gateway Details page]', () => {
  //   page.getEndpointStatusInfor(EndpointStatus.DETAILS);
  //   browser.sleep(2000).then(() => {
  //     expect(page.counts).toBe(3);
  //     expect(page.compareCount).toBe(3);
  //   });
  // });

  // xit('endpoint activity includes ScanType: `Scan` & counts are reported [Gateway Details page]', () => {
  //   expect(page.isEndpointActivityDisplayed(EndpointStatus.SCAN, EndpointStatus.DETAILS)).toBe(true);
  //   // no count are reported checked here.
  // });

  // xit('endpoint activity includes ScanType: `DSE` & counts are reported  [Gateway Details page]', () => {
  //   expect(page.isEndpointActivityDisplayed(EndpointStatus.DSE, EndpointStatus.DETAILS)).toBe(true);
  // });

  // xit('Zero[0] active scans status includes greyed-out icon for SCAN type [Gateway Details page]', () => {
  //   const activityReport = browser.params.SCAN;
  //   console.log(Number(activityReport) === 0);
  //   page.endpointActivityIconType(0, EndpointStatus.DETAILS).then(() => {
  //     if (Number(activityReport) === 0) {
  //       expect(page.greyedOutIcon).toBe(true);
  //     } else {
  //       expect(page.greyedOutIcon).toBe(false);
  //     }
  //   });
  // });

  // xit('Zero[0] active scans status includes greyed-out icon for DSE type [Gateway Details page]', () => {
  //   const activityReport = browser.params.DSE;
  //   console.log(Number(activityReport) === 0);
  //   page.endpointActivityIconType(1, EndpointStatus.DETAILS).then(() => {
  //     if (Number(activityReport) === 0) {
  //       expect(page.greyedOutIcon).toBe(true);
  //     } else {
  //       expect(page.greyedOutIcon).toBe(false);
  //     }
  //   });
  // });


  // it('endpont status frame GRID', () => {
  //   page.getIndex();
  //   expect(page.getIndex()).toBe(true);
  //  // page.grideTableActivity();
  // });

});
