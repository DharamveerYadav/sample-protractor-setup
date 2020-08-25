import { SystemPage } from "../../pageObject/board/system.po";
import { browser } from 'protractor';

describe('System ', () => {
    let systemPage: SystemPage;

    beforeAll(() => {
        systemPage = new SystemPage();
        systemPage.navigateTo();
    });

    it('first container should have header', () => {
        expect(systemPage.getFirstContainerHeader()).toBe('Visionaries');
    })
    it('People listed under Visionary should dragable to visionary container',  () => {
        systemPage.dragList();

        browser.sleep(5000);
        expect(systemPage.secondContainerList.count()).toBe(1);
    })

    it('Add participant with Add participant button', () => {
        systemPage.secondContainerList.count()
            .then(listedProfileCount => {
                console.log('printing listed count', listedProfileCount);
                systemPage.clickAddParticipantButton();
                systemPage.addParticipantFilter();
                systemPage.secondContainerList
                    .then(counAfterAddition => {
                        expect(systemPage.secondContainerAddedParticipant.getText()).toBe(string(listedProfileCount + 1));
                    });
            });

    })
})