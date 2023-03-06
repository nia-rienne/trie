import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices.Desktop,
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    // {
    //   name: 'safari',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
    // {
    //   name: 'edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //   },
    // },
  ],
  testMatch: ['tests/*.ts'],
  use: {
    baseURL: 'https://amazon.com',
    headless: true,
    screenshot: 'on',
    video: 'on', // open issue https://github.com/microsoft/playwright/issues/ 14813
    contextOptions: {
      recordVideo: {
        dir: './test-results/videos',
      },
    },
    // launchOptions: { // helpful for debugging, slows down test run
    //   slowMo: 1000,
    // },
  },
  retries: 0,
  timeout: 90000,
  reporter: [['dot'], ['json', {
    outputFile: 'test-results/jsonReports/jsonReport.json',
  }], ['html', {
    open: 'always',
  }]],
};

export default config;
