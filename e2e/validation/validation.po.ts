import { browser, by, element } from 'protractor';

export class ValidationPage {

    flag: boolean = true;

    navigateTo() {
        return browser.get('/');
    }
    showMessage(message) {
        console.log(message);
    }

    getFlag(){
        return this.flag;
    }
    fill(){

        const input1 = element(by.css(' vc-form-item > input')).sendKeys('cc');
        const input2 = element(by.css(' vc-form-item > textarea')).sendKeys('dd');
    }

    clickCancelButton(locator) {
        element(by.css(locator)).click();
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
