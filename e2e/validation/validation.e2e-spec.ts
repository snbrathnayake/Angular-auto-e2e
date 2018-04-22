import { ValidationPage } from './validation.po';
import { browser, element, by } from 'protractor';
import { PathURL } from '../config/routes.e2e';

describe('Validation', () => {
    let page: ValidationPage;

    beforeEach(() => {
        page = new ValidationPage();
        browser.ignoreSynchronization = true;
    });

    afterEach(() => {
        browser.ignoreSynchronization = false;
    });

    it('Should redirect to base URL', () => {

        expect(browser.driver.getCurrentUrl()).toMatch(PathURL.baseURL);
        // browser.wait(() => {
        //     // console.log('1 - BeforeEach WAIT');

        // },10000);
        browser.driver.sleep(3000);

    });

    it('Should redirect to #/add-gateway', () => {

        const condition = browser.ExpectedConditions;
        browser.wait(condition.urlContains(PathURL.baseURL + '/view-gateways')).then(() => {
            expect(browser.driver.getCurrentUrl()).toMatch(PathURL.baseURL + '/view-gateways');
            element(by.css('div.add-gateway > div > vc-button')).click().then(() => {
                expect(browser.driver.getCurrentUrl()).toMatch(PathURL.baseURL + '/add-gateway');
            });
        });
        browser.driver.sleep(2000);
    });

    it('status of gateway', () => {
        expect(page.gatewayStatus()).toBe(true);
    });

    xit('CANCLE BUTTON', () => {

        expect(browser.driver.getCurrentUrl()).toMatch(PathURL.baseURL + '/add-gateway').then(() => {
            page.fill();
            // page.buttonText('div.button').toBe('Cancle');
            page.clickCancelButton('app-footer > div > div:nth-child(2) > div > vc-button:nth-child(1)').then((e) => {
                expect(e).toBe(true);
                browser.driver.sleep(5000).then(() => {
                    // this flag should set after  where hasGatway() invoked
                    if (page.gatewayStatus()) {
                        // try to declare in for if/els both
                        const condition = browser.ExpectedConditions;
                        browser.wait(condition.urlContains(PathURL.baseURL + '/view-gateways')).then(() => {
                            expect(browser.driver.getCurrentUrl()).toMatch(PathURL.baseURL + '/view-gateways');
                            page.clickGatewayWizard('div.add-gateway > div > vc-button').then((e) => {
                                expect(e).toBe(true);
                                expect(browser.driver.getCurrentUrl()).toMatch(PathURL.baseURL + '/add-gateway').then(() => {
                                    expect(page.nameFeild()).toBe('');
                                    // add textarea value here too
                                    expect(page.nameFeild()).not.toBe('cc');
                                });
                            });
                        });
                    }
                    else {
                        const condition = browser.ExpectedConditions;
                        browser.wait(condition.urlContains(PathURL.baseURL + '/view-gateways')).then(() => {
                            expect(browser.driver.getCurrentUrl()).toMatch(PathURL.baseURL + '/view-gateways');
                            page.clickGatewayWizard('.btn-holder').then((e) => {
                                expect(e).toBe(true);
                                expect(browser.driver.getCurrentUrl()).toMatch(PathURL.baseURL + '/add-gateway').then(() => {
                                    expect(page.nameFeild()).toBe('');
                                    // add textarea value here too
                                    expect(page.nameFeild()).not.toBe('cc');
                                });
                            });
                        });
                    }

                });
            });
        });
    });

    it('open to empty page [GW]', () => {

    });
});
