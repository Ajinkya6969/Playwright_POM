import { test, expect } from '@playwright/test';
import {loginData} from '../Pages/logindata'; // adjust path as needed

test.describe('Data-Driven Login Test', () => {
  for (const data of loginData) 
    {
    test(`Login test with username: ${data.username}`, async ({ page }) => {
      await page.goto('https://your-app-url.com/login');
      

      await page.fill('#username', data.username);
      await page.fill('#password', data.password);
      await page.click('text=Login');

      // Add assertion based on valid/invalid input
      if (data.username === 'invalid') {
        await expect(page.locator('.error')).toBeVisible();
      } else {
        await expect(page).toHaveURL(/dashboard/);
      }
    });
  }
});