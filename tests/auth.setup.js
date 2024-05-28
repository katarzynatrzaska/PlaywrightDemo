import { test as setup, expect } from "@playwright/test";
const authFile = 'playwright/.auth/user.json';
import { LoginPage } from '../pageobjects/LoginPage';

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginWithValidCreds(page);
    await expect(loginPage.logoutText).toBeVisible();

    await page.context().storageState({ path: authFile });
});

