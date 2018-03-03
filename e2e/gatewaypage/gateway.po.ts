import { browser, by, element } from 'protractor';
import { PathURL } from '../config/routes.e2e';

export class GatewayPage {

    name = element(by.css('vc-form > vc-form-row:nth-child(1) > vc-form-item > input'));
    description = element(by.css('vc-form > vc-form-row:nth-child(2) > vc-form-item > textarea'));

    navigateTo() {
        const condition = browser.ExpectedConditions;
        browser.wait(condition.urlContains(PathURL.baseURL + '/add-gateway'));
    }

    supportLinkClicked() {
        const support = element(by.css('app-footer > div > div:nth-child(1) > vc-link > a'));
        support.click().then(() => {
            return browser.wait(element(by.css('vc-contact-support-modal')).isDisplayed, 5000);
        });

    }

    supportWindow() {
        const popup = element(by.css('vc-contact-support-modal > div'));
        return popup.isDisplayed();
    }
    sendInput() {
        this.reset();
        browser.sleep(2000);
        this.name.sendKeys('xxxx');
        this.description.sendKeys('xxxx-xx-xxxxx-xx');
    }

    private reset() {
        this.name.clear();
        this.description.clear();
    }


}