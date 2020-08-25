import { browser, by, element, protractor, ElementFinder, ElementArrayFinder } from 'protractor';
import { TestUtils } from '../../util/testUtils';
const testData = require('../../data/testProperties.json');

export class SystemPage {
    util = new TestUtils();
firstContainerHeader : ElementFinder = element(by.css('app-board-system .sys-list-items > div:nth-child(1) > p'));
firstContainer : ElementFinder = element(by.css('app-board-system .sys-list-items > div:nth-child(1)'));
secondContainer : ElementFinder = element(by.css('app-board-system .sys-list-items > div:nth-child(2) div[class="cdk-drop-list"]'));
secondContainerList : ElementArrayFinder = element.all(by.css('app-board-system .sys-list-items > div:nth-child(2) mat-card mat-card'));
thirdContainer : ElementFinder = element(by.css('app-board-system .sys-list-items > div:nth-child(3)'));
dragableListItem : ElementFinder = element(by.css('mat-nav-list  mat-card:nth-child(1)'));
secondContainerAddParticipant : ElementFinder = element(by.css('app-board-system .sys-list-items > div:nth-child(2) mat-card button[class="mat-raised-button mat-primary"]'));
addParticipantDialogFilter : ElementFinder = element(by.css('app-board-system-component-dialog mat-select'));
firstTableElementInDialog : ElementFinder = element(by.css('app-board-system-component-dialog mat-checkbox:nth-child(1)'));
addParticipantDialogSave : ElementFinder = element(by.css('.mat-dialog-actions > button:nth-child(2)'));
secondContainerAddedParticipant : ElementFinder = element(by.css("app-board-system .sys-list-items > div:nth-child(2) mat-card  *[class='addedParticipantNumber']"));


navigateTo(){
    browser.get('/board');
}

getFirstContainerHeader(){
    return this.firstContainerHeader.getText();
}

 dragList(){
    browser.driver.actions().dragAndDrop(this.dragableListItem,this.secondContainer).perform();
}
 draglistItem(){
    browser.actions().mouseMove(this.dragableListItem).perform();
    browser.actions().mouseDown(this.dragableListItem).perform();
    browser.actions().mouseMove({x:5,y:0}).perform();
    browser.actions().mouseMove( this.secondContainer).perform();
    browser.actions().mouseUp().perform();
    browser.actions().mouseUp().perform();
}



clickAddParticipantButton(){
    this.secondContainerAddParticipant.click();
}

  addParticipantFilter(){     
    this.util.selectOptionByOptionValue(this.addParticipantDialogFilter, 'operations');
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.firstTableElementInDialog));
    this.firstTableElementInDialog.click();
    this.addParticipantDialogSave.click();
 }
}