import { pageURL } from '../utils/pageURL';
import { loginCreds } from '../utils/testData.json';

exports.LoginPage = class LoginPage {

    loginURL = pageURL.loginURL;

    constructor(page) {
        this.page = page
        this.emailInput = page.getByTestId('login-email');
        this.passwordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-button')
        this.logoutText = page.getByText('Logout');
    }

    async loginWithValidCreds(page) {
        await page.goto(pageURL.loginURL);
        await this.emailInput.fill(loginCreds[0].validLogin);
        await this.passwordInput.fill(loginCreds[0].validPassword);
        await this.loginButton.click();
    }
}