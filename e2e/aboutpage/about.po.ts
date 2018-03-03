import { browser, by, element } from 'protractor';
import { PathURL } from '../config/routes.e2e';

export class AboutPage {

    navigateTo() {
        browser.get(PathURL.about);
        browser.waitForAngular().then((url) => {
            return url;
        });
    }

    getPageTitle() {
        return element(by.css('h1')).getText();
    }

    login() {
        browser.get('https://was.malachite.veracode.com/login/#!/login/');
        browser.sleep(2000);
        const condition = browser.ExpectedConditions;
        browser.wait(condition.urlContains('https://was.malachite.veracode.com/login/#!/login')).then(function () {

            const username = element(by.css('#usernamefield'));
            const pwd = element(by.css('#passwordfield'));

            username.clear();
            pwd.clear();
        });

    }

    waitForURLContain(urlExpected: string, timeout: number) {
        try {
            const condition = browser.ExpectedConditions;
            browser.wait(condition.urlContains(urlExpected), timeout);
            console.info('URL contain text.');
        } catch (e) {
            console.error('URL not contain text.', e);
        };
    }

    signIn() {
        element(by.css('.login-link')).click()
        browser.wait(function () {
            return browser.driver.isElementPresent(by.xpath('//a[@title="Venues"]'))
        }).then(function () {
            var venueLink = by.xpath('//a[@title="Venues"]')
            browser.driver.isElementPresent(venueLink).then(function () {
                console.log("tenant login process successful")
                element(venueLink).click()
            })
        });
    }
}