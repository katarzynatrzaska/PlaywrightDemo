import { pageURL } from "../utils/pageURL";

export class DashboardPage {

    constructor(page) {
        this.loginButton = page.getByTestId('login-button')
        this.logoutText = page.getByText(' Logout');
    }

    async logout(page) {
        await page.goto(pageURL.loginURL);
        await this.logoutText.click();
    }
}