
import { browser, logging } from 'protractor';
import { WizardPage } from '../pageObject/wizard.po';
import { Step1Page } from '../pageObject/step1.po';
const testData = require('../data/testProperties.json');

xdescribe('Requisite variety ', () => {
  let wizardPage: WizardPage;
  let step1Page: Step1Page;

  beforeEach(() => {
    wizardPage = new WizardPage();
    step1Page = new Step1Page();
  });

  it('session creation', () => {

    wizardPage.navigateTo();
    wizardPage.clickCreateButton();
    expect(browser.getCurrentUrl()).toContain(testData.Wizard);
    step1Page.setSystemInFocusInput('First System');
    step1Page.setProjectNameInput('First Project');
    step1Page.setChallengeOriginateOption('');
    step1Page.setAttendees(30);
    step1Page.setTargetDate();
    
  });
});
