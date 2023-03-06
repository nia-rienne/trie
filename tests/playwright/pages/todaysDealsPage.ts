import { expect, Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export default class TodaysDealsPage extends BasePage {
  primeProgramsCheckbox: string;

  deptCheckboxLabel: string;

  deptCheckbox: Locator;

  deptInput = 'input[data-csa-c-element-id^="filter-department"]';

  priceFilter: string;

  noDealsMessage = '[data-testid="no-deals-message"]';

  firstFilterResult = '[data-testid="deal-card"]:first-of-type';

  async applyFilters(page: Page, primeProgram?: string, department?: string, price?: string) {
    this.primeProgramsCheckbox = `input[data-csa-c-element-id="filter-${primeProgram}"]`;
    this.deptCheckboxLabel = `(//span[text()="${department}"])[2]`;
    this.priceFilter = `//span[text()="${price}"]`;
    this.deptCheckbox = page.locator(this.deptCheckboxLabel).locator('..').locator(this.deptInput);

    await this.deptCheckbox.check();
    await page.locator(this.priceFilter).click();
    await page.locator(this.primeProgramsCheckbox).scrollIntoViewIfNeeded();
    await page.locator(this.primeProgramsCheckbox).check();
  }

  async verifyFiltersSelected(page: Page) {
    if (!page.locator(this.noDealsMessage).isVisible()) {
      expect(await page.locator(this.priceFilter).getAttribute('class')).toEqual('a-text-bold');
    }
    await expect(this.deptCheckbox).toBeChecked();
    await expect(page.locator(this.primeProgramsCheckbox)).toBeChecked();
  }
}
