import { expect, test } from '../fixtures/pageFixture';

test('the "Today\'s Deals" link is visible', async ({ browser, baseURL, homePage }) => {
  await homePage.setBrowserCookies(browser);
  const { page, homePageUrlWNavBar, todaysDealsNavigationLink } = homePage;

  await page.goto(`${baseURL}${homePageUrlWNavBar}`);
  await page.locator(todaysDealsNavigationLink).isVisible();
  await expect(page.locator(todaysDealsNavigationLink)).toBeEnabled();
});
