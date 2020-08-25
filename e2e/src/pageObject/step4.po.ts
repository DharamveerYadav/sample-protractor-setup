import { browser, by, element, Locator, protractor, ElementFinder } from 'protractor';
import { TestUtils } from '../util/testUtils';
const testData = require('../data/testProperties.json');

export class Step4Page {
    util = new TestUtils();
    addNewButton: ElementFinder = element(by.css("button.add-card"));
    dialogHeader: ElementFinder = element(by.css("app-product-category-dialog h2"));
    dialogProjectTitle: ElementFinder = element(by.xpath("//app-product-category-dialog//input[@formcontrolname='project']"));
    dialogProjectType: ElementFinder = element(by.xpath("//app-product-category-dialog//mat-select[@formcontrolname='projectType']"));
    //projectTypeId = "app-product-category-dialog mat-select[formcontrolname='projectType']";
    dialogProjectDescription: ElementFinder = element(by.xpath("//app-product-category-dialog//textarea[@formcontrolname='projectDescription']"));
    dialogSubmit: ElementFinder = element(by.xpath("//app-product-category-dialog//button[@type='submit']"));

    navigateTo() {
        return browser.get('/wizard/step4');
    }

    clickAddNewButton() {
        return this.addNewButton.click();
    }

    getDialogHeaderText() {
        return this.dialogHeader.getText();
    }

    setDialogProjectTitle(key) {
        return this.dialogProjectTitle.sendKeys(key);
    }

    setDialogProjectType() {
        this.util.selectOptionByOptionValue(this.dialogProjectType, 'Project');
    }

    setDialogProjectDescription(key) {
        this.dialogProjectDescription.sendKeys(key);
    }

    clickDialogSubmitButton() {
        this.dialogSubmit.click();
    }

}