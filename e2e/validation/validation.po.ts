import { browser, by, element } from 'protractor';

export class ValidationPage {

    flag: boolean = true;

    navigateTo() {
        return browser.get('/');
    }


    gatewayStatus() {
        return browser.params.HAS_GATEWAY_VIEW;
    }

    fill(){

        const input1 = element(by.css(' vc-form-item > input')).sendKeys('cc');
        const input2 = element(by.css(' vc-form-item > textarea')).sendKeys('dd');
    }

    clickCancelButton(locator) {
        browser.sleep(1000);
        return element(by.css(locator)).click().then( ()=>{
            browser.sleep(1000);
            return true;
        });
    }

    clickGatewayWizard(locator) {
        browser.sleep(1000);
        return element(by.css(locator)).click().then( ()=>{
            browser.sleep(1000);
            return true;
        });
     
        // assign flag when hasgateway function()
    }

    nameFeild() {
        const name = element(by.css('vc-form-item > input'));
        return name.getAttribute('value').then( (value) =>{
            browser.sleep(1000);
            return value;
        });
    }
}
