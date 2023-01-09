import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  reporter: [
    ["dot"], // -> console
    ["json", { outputFile: "test-result.json" }], //  -> JSON
    ['html', {
        open: "always"
    }] // -> HTML
],
  use: {
    baseURL: "https://dev137904.service-now.com/api/now/table/incident",
    extraHTTPHeaders: {
      "Authorization": "Basic YWRtaW46dUUlNUh0VCpZM2x0"
  },
    headless: true,
    browserName:"chromium",
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'on',
    trace:'retain-on-failure'
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],

 
}

export default config
