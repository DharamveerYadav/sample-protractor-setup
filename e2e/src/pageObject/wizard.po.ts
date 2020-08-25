import { browser, by, element, Locator } from 'protractor';

export class WizardPage {
activeHeader: Locator = by.className('welcome-title');
activeSubHeading: Locator = by.className('nodata-msg');
createButton: Locator = by.buttonText('Create');

  navigateTo() {
    return browser.get(browser.baseUrl);
  }

  getheaderText() {
    return element(this.activeHeader).getText();
}

getSubHeadingText(){
    return element(this.activeSubHeading).getText();
}

clickCreateButton(){
  return element(this.createButton).click();
}
}