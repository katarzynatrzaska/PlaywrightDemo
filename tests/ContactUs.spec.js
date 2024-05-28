import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pageobjects/ContactUsPage.js';

test('Filling in contact form with valid data should trigger confirmation', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.fillInContactForm(page);
    await expect(contactUsPage.contactUsConfirmation).toBeVisible();    
});