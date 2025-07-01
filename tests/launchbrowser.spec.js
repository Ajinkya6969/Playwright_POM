import { chromium, test } from '@playwright/test'


test.describe('LaunchBrowser' => {

  test('Browser Launching', async() => {

  const browser = await chromium.launch()
const context = await browser.newContext()

// Open first tab with Google

const page1 = await context.newPage();
  await page1.goto('https://google.com');

  // Open a new empty tab
  const page2 = await context.newPage();
  await page2.goto('about:blank');
});
});