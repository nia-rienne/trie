import { Browser, BrowserContext, Page } from '@playwright/test';

export default class BasePage {
  context: BrowserContext;

  page: Page;

  async setBrowserCookies(browser: Browser) {
    this.context = await browser.newContext({
      storageState: './auth.json',
    });
    this.page = await this.context.newPage();
  }
}
