import { test } from '../fixtures/pageFixture';
import * as data from '../fixtures/testData/productCombosByFilters.json';

data.combinations.forEach((dataCombination) => {
  let primeProgram: string;
  switch (dataCombination.primePrograms) {
    case 'Prime':
      primeProgram = 'prime-eligible';
      break;
    case 'Prime Early Access deals':
      primeProgram = 'prime-early-access';
      break;
    case 'Prime exclusive deals':
      primeProgram = 'prime-early-exclusive';
      break;
    default:
      primeProgram = 'Prime';
  }
  const { filterCriteriaDept, price } = dataCombination;

  test(`filtering ${dataCombination.primePrograms} ${filterCriteriaDept} for ${price}`, async ({
    browser, baseURL, homePage, todaysDealsPage,
  }) => {
    await homePage.setBrowserCookies(browser);
    const { page, todaysDealsPageUrl } = homePage;
    await page.goto(`${baseURL}${todaysDealsPageUrl}`);

    await todaysDealsPage.applyFilters(page, primeProgram, filterCriteriaDept, price);
    await todaysDealsPage.verifyFiltersSelected(page);

    await page.close();
  });
});
