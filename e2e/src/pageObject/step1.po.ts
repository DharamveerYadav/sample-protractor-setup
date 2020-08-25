import { browser, by, element, Locator, protractor, ElementFinder } from 'protractor';
const testData = require('../data/testProperties.json');

export class Step1Page {
    step1Header: ElementFinder = element(by.css('app-step1 h1'));
    systemInFocusInput: ElementFinder = element(by.xpath("//input[@formcontrolname='system']"));
    projectNameInput: ElementFinder = element(by.xpath("//input[@formcontrolname='project']"));
    challengeOriginateSelect: ElementFinder = element(by.xpath("//mat-select[@formcontrolname='organization']"));
    challengeOriginateOption: ElementFinder = element(by.xpath("//span[text()='Outside the Organization']"));
    attendeesSlider: ElementFinder = element(by.xpath("//mat-slider[@formcontrolname='attendees']"));
    targetDate: ElementFinder = element(by.xpath("//mat-select[@formcontrolname='targetDate']"));
    challengeQuestion: ElementFinder = element(by.xpath("//textarea[@formcontrolname='challengeQuestion']"));
    nextButton: ElementFinder = element(by.xpath("//button[@routerlink='/wizard/step2']"));
    datePikerScript = "document.getElementById('mat-input-2').value='02/11/2019'";


    getStep1Header() {
        return this.step1Header.getText();
    }
    setSystemInFocusInput(key) {
        this.systemInFocusInput.sendKeys(key);
    }



    setProjectNameInput(key) {
        this.projectNameInput.sendKeys(key);
    }

    setChallengeOriginateOption(key) {
        this.challengeOriginateSelect.click()
            .then(() => {
                this.challengeOriginateOption.click();
            });

    }

    setAttendees(num: number) {
        let slider = this.attendeesSlider;
        browser.actions().dragAndDrop(
            slider,
            { x: num, y: 0 }
        ).perform();
    }

    setTargetDate() {
        browser.executeScript(this.datePikerScript);
    }

    setChallengeQuestion(key) {
        this.challengeQuestion.sendKeys(key);
    }

    clickNextButton() {
        this.nextButton.click();
    }

    setStep1FormFieldData(){
    this.setSystemInFocusInput(testData.SystemInFocus);
    this.setProjectNameInput(testData.ProjectName);
    this.setChallengeOriginateOption('');
    this.setAttendees(10);
    browser.sleep(5000);
    this.setTargetDate();
    this.clickNextButton();
    }
}