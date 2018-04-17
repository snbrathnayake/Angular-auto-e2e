import { browser, by, element } from 'protractor';
import { PathURL } from '../config/routes.e2e';

export class EndpointStatus {

    static OVERVIEW: string = 'overview';
    static DETAILS: string = 'details';
    static SCAN: string = 'scan';
    static DSE: string = 'dse';

    exists: boolean = false;
    status: boolean = false;
    counts: number = 0;
    compareCount: number = 0;
    hasActiveCount: boolean = false;
    greyedOutIcon: boolean = false;

    searchGateway(_name: string) {
        return element.all(by.css('.running')).each((list, index) => {
            list.getText().then((text) => {
                if (text === _name) {
                    this.exists = true;
                    browser.params.INDEX_ELEMENT = index + 1;
                    console.log("found = " + browser.params.INDEX_ELEMENT);
                }

            });
        });
    }

    getEndpointStatusInfor(page: string) {
        const index_elm = browser.params.INDEX_ELEMENT;
        let tableElement = null;

        switch (page) {
            case EndpointStatus.OVERVIEW:
                console.log('inside overview page...');
                tableElement = 'body > app-root > div > app-gateway-list > div > div.center > app-view-gateway:nth-child(' + index_elm + ') > div > div > div.body > div > div.endpoint-status-activity > div > div.status > div > div.details > table > tbody';
                break;
            case EndpointStatus.DETAILS:
                console.log('inside details page...');
                tableElement = 'body > app-root > div > app-gateway-detail > div > div.center > div > div:nth-child(1) > app-view-gateway > div > div > div > div > div.endpoint-status-activity > div > div.status > div > div.details > table > tbody';
                break;
        }

        const tableData = element.all(by.css(tableElement));
        for (let i = 0; i < 3; i++) {
            console.log('Round........... : ' + i);
            const tableRow = tableData.all(by.tagName('tr')).get(i);
            tableRow.all(by.tagName('td')).map((tableVal, index) => {
                tableVal.getText().then((data) => {
                    if (data.length > 0) {
                        if (page === EndpointStatus.OVERVIEW) {
                            this.saveEndpointStatus(data, i)
                        } else {
                            this.compareEndpointStatus(data, i);
                        }
                    }
                });
            });
        }
    }

    isEndpointCountReported() {
        console.log('reports-ready => ' + browser.params.READY);
        console.log('reports-pending =>' + browser.params.PENDING);
        console.log('reports-offline =>' + browser.params.OFFLINE);
        // reading stored values.
        const ready = browser.params.READY;
        const pending = browser.params.PENDING;
        const offline = browser.params.OFFLINE;
        return ready !== null && pending !== null && offline !== null ? true : false;
    }

    private compareEndpointStatus(cell: string, row: number) {
        switch (row) {
            case 0:
                if (cell.toString().endsWith('Ready')) { this.counts++; }
                else if (cell === browser.params.READY) { this.compareCount++; }
                break;
            case 1:
                if (cell.toString().endsWith('Pending')) { this.counts++; }
                else if (cell === browser.params.PENDING) { this.compareCount++; }
                break;
            case 2:
                if (cell.toString().endsWith('Offline')) { this.counts++; }
                else if (cell === browser.params.OFFLINE) { this.compareCount++; }
                break;
        }
    }

    private saveEndpointStatus(cell: string, row: number) {
        switch (row) {
            case 0:
                if (cell.toString().endsWith('Ready')) { this.counts++; } else { browser.params.READY = cell; }
                break;
            case 1:
                if (cell.toString().endsWith('Pending')) { this.counts++; } else { browser.params.PENDING = cell; }
                break;
            case 2:
                if (cell.toString().endsWith('Offline')) { this.counts++; } else { browser.params.OFFLINE = cell; }
                //console.log('offline : ' + cell);
                //console.log('count_in_offline : ' + this.COUNT);
                break;
        }
    }

    isEndpointActivityDisplayed(type: string, page: string) {

        if (type === EndpointStatus.SCAN && page === EndpointStatus.OVERVIEW) {
            return element(by.css('app-gateway-list > div > div.center > app-view-gateway:nth-child(4) > div > div > div.body > div > div.endpoint-status-activity > div > div.activity > div > div.details > table > tbody > tr:nth-child(1) > td:nth-child(1) > span')).isDisplayed();
        } else if (type === EndpointStatus.DSE && page === EndpointStatus.OVERVIEW) {
            return element(by.css('app-gateway-list > div > div.center > app-view-gateway:nth-child(4) > div > div > div.body > div > div.endpoint-status-activity > div > div.activity > div > div.details > table > tbody > tr:nth-child(1) > td:nth-child(2) > span')).isDisplayed();
        } else if (type === EndpointStatus.SCAN && page === EndpointStatus.DETAILS) {
            return element(by.css('app-gateway-detail > div > div.center > div > div:nth-child(1) > app-view-gateway > div > div > div > div > div.endpoint-status-activity > div > div.activity > div > div.details > table > tbody > tr:nth-child(1) > td:nth-child(1) > span')).isDisplayed();
        } else if (type === EndpointStatus.DSE && page === EndpointStatus.DETAILS) {
            return element(by.css('app-gateway-detail > div > div.center > div > div:nth-child(1) > app-view-gateway > div > div > div > div > div.endpoint-status-activity > div > div.activity > div > div.details > table > tbody > tr:nth-child(1) > td:nth-child(2) > span')).isDisplayed();
        }
    }

    getEndpointActivityInfor(type: string) {
        let idx = type === EndpointStatus.SCAN ? 2 : 3;
        const index_elm = browser.params.INDEX_ELEMENT;
        const selectedElm = 'body > app-root > div > app-gateway-list > div > div.center > app-view-gateway:nth-child(' + index_elm + ') > div > div > div.body > div > div.endpoint-status-activity > div > div.activity > div > div.details > table > tbody';
        const activityData = element.all(by.css(selectedElm));
        const row = activityData.all(by.tagName('tr'));

        return row.all(by.tagName('td')).map((tableData, index) => {
            tableData.getText().then((data) => {
                if (index === idx && data !== null) {
                    const count = data.substr(0, data.indexOf(' '));
                    switch (idx) {
                        case 2:
                            browser.params.SCAN = count;
                            this.hasActiveCount = true;
                            break;
                        case 3:
                            browser.params.DSE = count;
                            this.hasActiveCount = true;
                            break;
                    }
                }
            });
        });
    }

    // @param : getIndex css location detect.
    endpointActivityIconType(getIndex: number, page: string) {
        const index_elm = browser.params.INDEX_ELEMENT;
        let selectedElm = null;
        switch (page) {
            case EndpointStatus.OVERVIEW:
                selectedElm = 'body > app-root > div > app-gateway-list > div > div.center > app-view-gateway:nth-child(' + index_elm + ') > div > div > div.body > div > div.endpoint-status-activity > div > div.activity > div > div.details > table > tbody';
                break;
            case EndpointStatus.DETAILS:
                selectedElm = 'body > app-root > div > app-gateway-detail > div > div.center > div > div:nth-child(1) > app-view-gateway > div > div > div > div > div.endpoint-status-activity > div > div.activity > div > div.details > table > tbody';
                break;
        }

        const activityData = element.all(by.css(selectedElm));
        const row = activityData.all(by.tagName('tr'));

        return row.all(by.tagName('td > span')).map((tableData, index) => {
            tableData.getAttribute('class').then((cssName) => {
                if (index === getIndex) {
                    console.log(' Scans : =>' + cssName.includes('count-0'));
                    if (cssName.includes('count-0')) {
                        this.greyedOutIcon = true;
                    }
                }
            });
        });
    }

    navigateToSelectedGateway() {
        const index_elm = browser.params.INDEX_ELEMENT;
        const selected = element(by.css('body > app-root > div > app-gateway-list > div > div.center > app-view-gateway:nth-child(' + index_elm + ') > div > div > div.header > h2'));

        return selected.click().then(() => {
            browser.sleep(2000);
            return true;
        });
    }

    verifySelectedGatewayName() {
        return browser.sleep(1000).then(() => {
            return element(by.css('body > app-root > div > app-gateway-detail > div > div.header > div.header-left > h1')).getText();
        });
    }

    grideTable() {
        const table = element.all(by.css('.ag-body-container > div'));

        table.each((record, index) => {
            record.getText().then((text) => {
                console.log(index + ' ] : ' + text + '\n');
            });
        });
    }
}