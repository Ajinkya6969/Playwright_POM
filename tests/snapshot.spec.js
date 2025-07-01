import { expect, test } from '@playwright/test';

test('Visual regression: homepage', async ({ page }) => {
  await page.goto('https://your-app.com')

  // Take a full-page screenshot and compare with baseline
  await expect(await page.screenshot({ fullPage: true }))
    .toMatchSnapshot('homepage.png');
});