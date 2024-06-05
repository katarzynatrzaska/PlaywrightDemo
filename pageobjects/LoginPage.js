import { pageURL } from '../utils/pageURL';

export class LoginPage {

    constructor(page) {
        this.page = page
        this.emailInput = page.getByTestId('login-email');
        this.passwordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-button')
        this.logoutText = page.getByText('Logout');
        this.consentToCookiesButton = page.locator('.fc-button.fc-cta-consent.fc-primary-button');
        this.emailSignUpInput = page.getByTestId('signup-email');
        this.signUpButton = page.getByTestId('signup-button');
        this.signUpName = page.getByTestId('signup-name');
        this.userExistsError = page.getByText('Email Address already exist!')
    }

    async goToLoginAndAcceptCookies() {
        await this.page.goto(pageURL.loginURL);
        await this.consentToCookiesButton.click();
    }

    async login(login, password) {
        await this.goToLoginAndAcceptCookies();
        await this.emailInput.fill(login);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async signUp(name, login) {
        await this.signUpName.fill(name)
        await this.emailSignUpInput.fill(login);
        await this.signUpButton.click();
    }
}