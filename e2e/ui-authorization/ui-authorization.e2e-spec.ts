import { browser, by, element, protractor } from 'protractor';
import { UIAuthorization } from './ui-authorization.po';
import { PathURL } from '../config/routes.e2e';

describe('UIAuthorization', () => {
    let page: UIAuthorization;

    beforeEach(() => {
        page = new UIAuthorization();
        browser.ignoreSynchronization = true;
    });

    afterEach(() => {
        browser.ignoreSynchronization = false;
    });

    it('permissions are allowed: gateway/endpoint for the [Administrator_internal]', () => {
        page.navigateToLogin();
        try {
            page.authenticateWith(UIAuthorization.MVSA_ADMIN, 'TESTtest11');
            console.log('Running..........');
        } catch (error) {
            console.log('Error................ : ' + error);
        }
    });

    it('random gateways()', () => {
        page.select_gateways();
    });

    it('clicked pencile', () => {
        const popover = element(by.css('div.popover-body > app-popup-edit-gateway > div.modal-body'));
        const pencil = element(by.css('app-gateway-detail > div > div.header > div.header-left > span'));
        const inputBox = element(by.css('input'));

        pencil.click().then(() => {
            browser.wait(browser.ExpectedConditions.presenceOf(popover)).then(() => {
                inputBox.clear().then(() => {
                    inputBox.sendKeys('new gateway name');
                    browser.sleep(2000);
                });
            });
        });

    });
});
