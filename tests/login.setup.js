import { chromium } from '@playwright/test';
import fs from 'fs';

const saveAuthState = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://your-app.com/login');
  await page.fill('#username', 'yourUsername');
  await page.fill('#password', 'yourPassword');
  await page.click('text=Login');

  // Wait for dashboard or some post-login element
  await page.waitForURL('**/dashboard');

  // Save storage state
  await context.storageState({ path: 'storageState.json' });

  await browser.close();
};

saveAuthState();