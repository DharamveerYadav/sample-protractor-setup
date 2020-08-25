import { ElementFinder, protractor, browser, element, by } from "protractor";

export class TestUtils {

  getInlineErrorMsg(ele: ElementFinder) {
    return ele.getAttribute('aria-describedby')
      .then((id: string) => {
        //  const until = protractor.ExpectedConditions;
        // browser.wait(until.visibilityOf(element(by.id(id))), 2000);
        return element(by.id(id)).getText();
      })
      .catch(error => {
        return error;
      });
  };

  selectOptionByOptionValue(formField: ElementFinder, valueToFind) {
    let isOptionClicked = false;

    formField.click().then(() => {

      formField
        .getAttribute('aria-owns').then(async (optionIdsString: string) => {
          const optionIds = optionIdsString.split(' ');
          for (let optionId of optionIds) {
            if (!isOptionClicked) {
              const option = element(by.id(optionId));
              browser.wait(protractor.ExpectedConditions.elementToBeClickable(option));
              await option.getText().then((text) => {
                if (text === valueToFind) {
                  isOptionClicked = true;
                  option.click();
                }
              });
            }
          }
        });
    });
  }
}