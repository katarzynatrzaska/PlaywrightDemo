import { test as setup, expect } from "@playwright/test";
import { LoginPage } from '../pageobjects/LoginPage';
import { loginCreds } from '../utils/loginTestData.json';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginWithValidCreds(loginCreds[0].validLogin, loginCreds[0].validPassword);
    await expect(loginPage.logoutText).toBeVisible();
    await page.context().storageState({ path: authFile });
});