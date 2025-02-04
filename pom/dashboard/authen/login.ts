import { Locator, Page } from '@playwright/test';
import { BasePage } from "../../common/base-page.pom";

export class LoginPage extends BasePage{
    usernameLoc: Locator;
    passwordLoc: Locator;
    rememberLoc: Locator;
    loginButtonLoc: Locator;

    constructor(page: Page) {
        super(page);

        this.usernameLoc = page.locator("//input[@id='user_login']");
        this.passwordLoc = page.locator("//input[@id='user_pass']");
        this.loginButtonLoc = page.locator("//input[@id='user_login']");
        this.rememberLoc = page.locator("//input[@id='remember_me']");
    }

    async fillUsername(username: string) {
        this.usernameLoc.fill(username);
    }

    async fillPassword(password: string) {
        this.passwordLoc.fill(password);
    }

    async checkRemember() {
        this.rememberLoc.check();
    }

    async clickLogin() {
        this.loginButtonLoc.click();
    }

    async login(username: string, password: string, isRemember: boolean) {
        this.fillUsername(username);
        this.fillPassword(username);
        if (isRemember) {
            this.checkRemember();
        }
        
        this.clickLogin();
    }
}