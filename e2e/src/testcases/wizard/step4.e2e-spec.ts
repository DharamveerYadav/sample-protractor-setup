import { Step4Page } from "../../pageObject/step4.po";
import { browser } from 'protractor';

const testData = require('../../data/testProperties.json');

describe('Step4 ', () => {
    let step4Page: Step4Page;
    beforeAll( () => {
        step4Page = new Step4Page();
        step4Page.navigateTo();
    });
  
    it('Dialog should have header', ()=>{
        step4Page.clickAddNewButton();
        expect(step4Page.getDialogHeaderText()).toEqual(testData.step4DialogHeader);
    });

    it('Should able to add Project', () => {
        step4Page.clickAddNewButton();
        expect(step4Page.getDialogHeaderText()).toEqual(testData.step4DialogHeader);
        step4Page.setDialogProjectTitle('DummyProject');
        step4Page.setDialogProjectType();
        step4Page.setDialogProjectDescription("This is dummy Project");
       // step4Page.clickDialogSubmitButton();
        browser.sleep(5000);

    })
})