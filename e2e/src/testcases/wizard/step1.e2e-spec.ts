import { Step1Page } from "../../pageObject/step1.po";
import { WizardPage } from '../../pageObject/wizard.po';

import { protractor, browser } from 'protractor';
import { TestUtils } from '../../util/testUtils';
const testData = require('../../data/testProperties.json');


xdescribe('Step1 ', () => {
    let wizardPage: WizardPage;
    let step1page: Step1Page;
    let utils: TestUtils;

    beforeAll(async () => {
        wizardPage = new WizardPage();
        step1page = new Step1Page();
        utils = new TestUtils();
        await wizardPage.navigateTo();
        await wizardPage.clickCreateButton();
    });


    it('Should have correct header', async () => {
        await expect(step1page.getStep1Header()).toEqual(testData.Step1Header);
    });

    it('System in focus field should not blank', () => {
        step1page.setSystemInFocusInput('');
        step1page.setSystemInFocusInput(protractor.Key.TAB);
        step1page.systemInFocusInput.getAttribute('class')
            .then(value => {
                expect(value).toContain('ng-invalid');
            });
        expect(utils.getInlineErrorMsg(step1page.systemInFocusInput)).toEqual(testData.RequiredFieldError);
    });

    it('System in focus field should not accept less than 2 characters',  () => {
        step1page.systemInFocusInput.clear();
        step1page.setSystemInFocusInput('pr');
        step1page.setSystemInFocusInput(protractor.Key.TAB);
        expect(step1page.systemInFocusInput.getAttribute('class')).toContain('ng-invalid');
        expect(utils.getInlineErrorMsg(step1page.systemInFocusInput)).toEqual(testData.AtLeast3CharError);
    });

    it('System in focus field should expect min 3 characters', () => {
        step1page.systemInFocusInput.clear();
        step1page.setSystemInFocusInput('pro');
        expect(step1page.systemInFocusInput.getAttribute('class')).toContain('ng-valid');
    });

    it('Project Name field should not blank', () => {
        step1page.projectNameInput.clear();
        step1page.setProjectNameInput('');
        step1page.setProjectNameInput(protractor.Key.TAB);
        step1page.projectNameInput.getAttribute('class')
            .then(value => {
                expect(value).toContain('ng-invalid');
            });
        expect(utils.getInlineErrorMsg(step1page.projectNameInput)).toEqual(testData.RequiredFieldError);
    });

    it('Project Name field should not accept less than 2 characters',  () => {
        step1page.projectNameInput.clear();
        step1page.setProjectNameInput('pr');
        step1page.setProjectNameInput(protractor.Key.TAB);
        expect(step1page.projectNameInput.getAttribute('class')).toContain('ng-invalid');
        expect(utils.getInlineErrorMsg(step1page.projectNameInput)).toEqual(testData.AtLeast3CharError);
    });

    it('Project Name field should expect min 3 characters', () => {
        step1page.projectNameInput.clear();
        step1page.setProjectNameInput('pro');
        expect(step1page.projectNameInput.getAttribute('class')).toContain('ng-valid');
    });
    
    it('Project Name field ', () => {
     //   step1page.projectNameInput.clear();
        step1page.setAttendees(5);
        browser.sleep(5000);
       // expect(step1page.projectNameInput.getAttribute('class')).toContain('ng-valid');
    });

   

});