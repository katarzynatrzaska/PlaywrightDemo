import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pageobjects/DashboardPage';
import { loginCreds } from '../utils/loginTestData.json';
import { LoginPage } from '../pageobjects/LoginPage';

test('Registering user with existing email should trigger error', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const loginPage = new LoginPage(page);
    await dashboardPage.logout(page);
    await loginPage.signUp(loginCreds[0].name, loginCreds[0].validLogin);
    await expect(loginPage.userExistsError).toBeVisible();
});


