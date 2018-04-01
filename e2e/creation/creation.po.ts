import { browser, by, element } from 'protractor';
import { PathURL } from '../config/routes.e2e';

export class Creation {

    public exists: boolean = false;
    public indexValue: number = 0;

    navigateTo() {
        return browser.get('https://was.malachite.veracode.com/mvsa/#/view-gateways');
    }


    isDisplayedNewGateway() {
        return element.all(by.css('.running')).each((element, index) => {
            element.getText().then((text) => {
                if (text === 'gateway_2') {
                    this.exists = true;
                    this.indexValue = index + 1;
                    // console.log("new found = " + index ++ );
                }

            });
        });
    }

    showSelectedGateway(index) {
        //console.log("new index.>> " + index);
        const locator = 'app-gateway-list > div > div.center > app-view-gateway:nth-child(' + index + ') > div > div > div.header > h2';
        //console.log(locator);
        element(by.css(locator)).click();
        browser.sleep(2000);

    }

    // isEndpointListed() {
    //     element.all(by.xpath('//*[@id="borderLayout_eGridPanel"]/div[1]/div/div[4]/div[3]/div/div/div')).each((elm) => {
    //         elm.getText().then(function (text) {
    //             if (text.includes('endpoint_2')) {
    //                 this.ep_exists = true;
    //             }
    //         });
    //         console.log('found ============== ' + this.exists);
    //     });
    // }

    // endpointFound() {
    //     // return this.ep_exists;
    //     console.log('found ============== ' + this.ep_exists);
    // }

}