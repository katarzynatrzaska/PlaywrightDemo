import { pageURL } from '../utils/pageURL';

export class LoginPage {

    loginURL = pageURL.loginURL;

    constructor(page) {
        this.page = page
        this.emailInput = page.getByTestId('login-email');
        this.passwordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-button')
        this.logoutText = page.getByText('Logout');
        this.consentToCookiesButton = page.locator('.fc-button.fc-cta-consent.fc-primary-button');
    }

    async loginWithValidCreds(login, password) {
        await this.page.goto(pageURL.loginURL);
        await this.consentToCookiesButton.click();
        await this.emailInput.fill(login);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}