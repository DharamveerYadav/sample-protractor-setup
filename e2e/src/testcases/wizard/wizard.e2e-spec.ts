
import { WizardPage } from '../../pageObject/wizard.po';
import { browser } from 'protractor';
const testData = require('../../data/testProperties.json');

describe('Wizard ', () => {
    let page: WizardPage;
    beforeAll(() => {
        page = new WizardPage();
    });

    it('Active tab selected by default',  () => {
         page.navigateTo();
         expect(browser.getCurrentUrl()).toContain('dashbaord/active');
    });

    it('Should have correct header and subheader',  () => {
         expect(page.getheaderText()).toEqual(testData.ActiveHeader);
         expect(page.getSubHeadingText()).toEqual(testData.ActiveSubHeading);
    });


})