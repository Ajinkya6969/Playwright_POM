import { test, expect, chromium } from '@playwright/test';


test('test @smoke, @regression', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('ajinkyamuley03');
  await page.screenshot({
    path: 'C:\Projects\screenshots\Google sign in.png',
    fullpage: true
  })
  
  const title = await page.title();

  await expect.soft(title).toBe('Sign in - Google Accounts');
  await page.getByRole('button', { name: 'Next' }).click();
})

test.only('LaunchBrowser', async () => {

  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('https://google.com')
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).type('ajinkya muley');
  await page.getByText('ajinkya muley').click();
  //   const [newPage] = await Promise.all([
  //   context.waitForEvent('page'),          // wait for new tab
  //   page.click('text=Open New Tab')        // the action that triggers it
  // ]);
})