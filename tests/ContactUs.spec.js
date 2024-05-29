import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pageobjects/ContactUsPage.js';
const dataset = JSON.parse(JSON.stringify(require('../utils/contactUsTestData.json')));

for (const data of dataset) {

    test(`Filling in contact form with valid data should trigger confirmation ${data.name}`, async ({ page }) => {
        const contactUsPage = new ContactUsPage(page);
        await contactUsPage.fillInContactForm(page, data.name, data.email, data.subject, data.message);
        await expect(contactUsPage.contactUsConfirmation).toBeVisible();
    });
}
