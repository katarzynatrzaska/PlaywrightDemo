import { pageURL } from '../utils/pageURL';

export class ContactUsPage {

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

    async fillInContactForm(name, email, subject, message) {
        this.page.on('dialog', dialog => dialog.accept());
        await this.page.goto(pageURL.contactUsURL);
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.subjectInput.fill(subject);
        await this.messageInput.fill(message);
        await this.submitButton.click();
    }
}