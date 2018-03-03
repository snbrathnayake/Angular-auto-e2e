import { browser, by, element, protractor } from 'protractor';
import { PathURL } from '../config/routes.e2e';

export class LandingPage {

    navigateTo() {
        browser.get(PathURL.loginURL);
    }

    login() {
        let condition = browser.ExpectedConditions;
        browser.wait(condition.urlContains(PathURL.loginURL)).then(() => {

            const username = element(by.css('#usernamefield'));
            const pwd = element(by.css('#passwordfield'));
            const submit = element(by.css('#loginbutton'));

            username.clear();
            username.sendKeys('test');
            pwd.clear();
            pwd.sendKeys('TESTtest1');

            submit.click().then(() => {
                browser.sleep(5000);
                browser.get(PathURL.baseURL);

            });

        });
        return browser.driver.getCurrentUrl();
    }

    isPresentButton() {
        const condition = browser.ExpectedConditions;
        const button = element(by.css('.btn-holder'));
        browser.wait(condition.presenceOf(button), 5000);

        return button.isPresent();
    }

    buttonClicked() {
        if (this.isPresentButton()) {
            browser.sleep(2000);
            element(by.css('.btn-holder')).click();
        } else {
            console.log('button not visible!');
        }

    }

    isPresentNavBar() {
        const condition = browser.ExpectedConditions;
        const navbar = element(by.css('vc-nav-bar'));
        browser.wait(condition.presenceOf(navbar), 5000);

        return navbar.isPresent();
    }

    isPresentLogos() {
        const logoHead = element(by.css('div.header > div:nth-child(2) > div > i')).isPresent();
        const logoCenter = element(by.css('div.center > i')).isPresent();

        return logoHead && logoCenter ? true : false;
    }


}