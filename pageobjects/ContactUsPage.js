import { pageURL } from '../utils/pageURL';

exports.ContactUsPage = class ContactUsPage {

    contactUsURL = pageURL.contactUsURL;

    constructor(page) {
        this.page = page;
        this.nameInput = page.getByTestId('name');
        this.emailInput = page.getByTestId('email');
        this.subjectInput = page.getByTestId('subject');
        this.messageInput = page.getByTestId('message');
        this.submitButton = page.getByTestId('submit-button');
        this.contactUsConfirmation = page.locator('.status.alert.alert-success');
    }

    async fillInContactForm(page) {
        page.on('dialog', dialog => dialog.accept());
        await page.goto(pageURL.contactUsURL);
        await this.nameInput.fill('test');
        await this.emailInput.fill('test@test.com');
        await this.subjectInput.fill('test@##@');
        await this.messageInput.fill('tes02939');
        await this.submitButton.click();
    }
}