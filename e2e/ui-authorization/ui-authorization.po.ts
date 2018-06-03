import { browser, by, element, protractor } from 'protractor';
import { PathURL } from '../config/routes.e2e';

export class UIAuthorization {

    static USERNAME = element(by.css('#usernamefield'));
    static PWD = element(by.css('#passwordfield'));
    static SUBMIT_BTN = element(by.css('#loginbutton'));
    static TOKENLINK = element(by.css('#expandpinfield > span'));
    static TOKEN = element(by.css('#tokenInput'));

    //mvsa_admin
    static MVSA_ADMIN = 'mvsa_admin';
    // users internal
    static INTERNAL_ADMIN = 'administrator_internal';
    static INTERNAL_ACCOUNT_ADMIN = 'account_administrator_internal';
    static INTERNAL_OPERATOR = 'operator_internal1';
    static INTERNAL_REVIEWER = 'reviewer_internal1';
    // users external
    static EXTERNAL_ADMIN = '';
    static EXTERNAL_SECURITYLEAD = '';
    static EXTERNAL_OPERATOR = '';
    static EXTERNAL_REVIEWER = '';
    static EXTERNAL_EXECUTIVE = '';
    static EXTERNAL_SUBMITTER = '';

    navigateToLogin() {
        browser.get(PathURL.loginURL).then(() => {
            browser.wait(browser.ExpectedConditions.urlContains(PathURL.loginURL));
        });
    }

    authenticateWith(_usertype: string, password: string) {
        const mvsa_title = element(by.css('body > app-root > div > app-gateway-list > div > div.header > div:nth-child(1) > h1'));
        browser.wait(browser.ExpectedConditions.presenceOf(UIAuthorization.USERNAME)).then((e) => {
            console.log('Element show ->' + e);
            // input user username/password for authenticate.
            this.enter_auth_credentials(_usertype, password);
            browser.sleep(1000).then(() => {
                UIAuthorization.SUBMIT_BTN.click().then(() => {
                    browser.sleep(4000).then(() => {
                        browser.get(PathURL.baseURL).then(() => {
                            browser.wait(browser.ExpectedConditions.presenceOf(mvsa_title));
                        });
                    });
                });
            });
        });
    }

    private enter_auth_credentials(_usertype: string, password: string) {
        const title = element(by.css('body > app-root > div > app-gateway-list > div > div.header > div:nth-child(1) > h1'));
        UIAuthorization.USERNAME.clear();
        UIAuthorization.PWD.clear();

        switch (_usertype) {
            case UIAuthorization.MVSA_ADMIN:
                UIAuthorization.USERNAME.sendKeys(_usertype);
                UIAuthorization.PWD.sendKeys(password);
                break;

            case UIAuthorization.INTERNAL_ADMIN:
                UIAuthorization.USERNAME.sendKeys(_usertype);
                UIAuthorization.PWD.sendKeys(password);
                UIAuthorization.TOKENLINK.click().then(() => {
                    UIAuthorization.TOKEN.sendKeys('555555');
                });
                break;

            case UIAuthorization.INTERNAL_ACCOUNT_ADMIN:
                UIAuthorization.USERNAME.sendKeys(_usertype);
                UIAuthorization.PWD.sendKeys(password);
                UIAuthorization.TOKENLINK.click().then(() => {
                    UIAuthorization.TOKEN.sendKeys('555555');
                });
                break;

            case UIAuthorization.INTERNAL_OPERATOR:
                UIAuthorization.USERNAME.sendKeys(_usertype);
                UIAuthorization.PWD.sendKeys(password);
                break;
        }
    }

    logout() {
        const logoutIcon = element(by.css('body > app-root > div > vc-nav-bar > nav > vc-nav-bar-group-right > ul > vc-nav-item:nth-child(1) > li > div > span.icon.glyphicon.glyphicon-user'));
        const menuItem = element.all(by.css('body > app-root > div > vc-nav-bar > nav > vc-nav-bar-group-right > ul > vc-nav-item:nth-child(1) > li > vc-nav-item-group > ul > vc-nav-menu-item')).last();

        if (logoutIcon.isPresent()) {
            logoutIcon.click().then(() => {
                menuItem.getText().then((text) => {
                    if (text === 'Logout') {
                        menuItem.click().then(() => {
                            browser.wait(browser.ExpectedConditions.presenceOf(UIAuthorization.USERNAME)).then(() => {
                                console.log('backTo login.......');
                            });
                        });
                    }
                });
            });
        }
    }

    permission_for_view() { }
    permission_for_create() { }
    permission_for_edit() { }
    permission_for_select() { }

}// class end
