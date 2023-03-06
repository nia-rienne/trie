import { expect, test as baseTest } from '@playwright/test';
import { HomePage, TodaysDealsPage } from '../pages/index';

type pages = {
  homePage: HomePage,
  todaysDealsPage: TodaysDealsPage,
};

const testPages = baseTest.extend<pages>({
  homePage: async ({ }, use) => {
    await use(new HomePage());
  },
  todaysDealsPage: async ({ }, use) => {
    await use(new TodaysDealsPage());
  },
});

export const test = testPages;
export { expect };
