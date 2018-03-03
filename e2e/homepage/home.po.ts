import { browser, by, element } from 'protractor';

export class HomePage {

    navigateTo() {
        return browser.get('/');
    }
    getPageTitle() {
        return element(by.css('h1')).getText();
    }
}