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

    it('reday page [view-gateways]', () => {
        // click mVSA Management  links
        // expect in viewgateway page
        // logout to login page to init the script 
    });

    it('verify [view-only] permissions are allowed: gateway/endpoint for the [Administrator_internal]', () => {
        page.navigateToLogin();
        page.authenticateWith(UIAuthorization.MVSA_ADMIN, 'TESTtest11');
        page.logout();
    });

    //Reviewer_internal
    it('verify [view-only] permissions are allowed: gateway/endpoint for the [Reviewer_internal]', () => { });

    //Submitter_external
    it('verify [view-only] permissions are allowed: gateway/endpoint for the [Submitter_external]', () => { });
    it('verify [create] permissions are allowed: gateway/endpoint for the [Submitter_external]', () => {
        // can't create
    });

    it('verify [view-only] permissions are allowed: gateway/endpoint for the [Creator_external]', () => { });
    it('verify [create] permissions are allowed: gateway/endpoint for the [Creator_external]', () => { });

    //Security_lead_external
    it('verify [view-only] permissions are allowed: gateway/endpoint for the [Security_lead_external]', () => { });
    it('verify [create] permissions are allowed: gateway/endpoint for the [Security_lead_external]', () => { });

    //Administrator_external
    it('verify [view-only] permissions are allowed: gateway/endpoint for the [Administrator_external]', () => { });
    it('verify [create] permissions are allowed: gateway/endpoint for the [Administrator_external]', () => { });

});
