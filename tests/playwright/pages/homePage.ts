import BasePage from './basePage';

export default class HomePage extends BasePage {
  homePageUrlWNavBar = '/ref=nav_logo';

  todaysDealsPageUrl = '/deals?ref_=nav_cs_gb';

  todaysDealsNavigationLink = `a[href="${this.todaysDealsPageUrl}"]`;
}
