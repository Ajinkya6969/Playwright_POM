// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../Pages/login';



// test('Login', async ({ page }) => {
  
//   await page.waitForTimeout (1000);

//   const Login = new LoginPage(page)

//   await Login.gotoLoginPage()
//   await Login.login('tomsmith', 'SuperSecretPassword')
  
// //   await page.getByRole('textbox', { name: 'Username' }).click();
// //   await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
// //   await page.getByRole('textbox', { name: 'Password' }).click();
// //   await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
// //   await page.getByRole('button', { name: ' Login' }).click();
// });



import { test, expect } from '@playwright/test';
import { FacebookLogin } from '../Pages/login';

test('Facebook', async ({ page }) => {
  
    const Login = new FacebookLogin (page)

    await Login.gotofacebookloginpage()
    await Login.login('abcxyz@gmail.com','AbcXyz@6969')




//   await page.getByTestId('royal-email').click();
//   await page.getByTestId('royal-email').fill('abcxyz@gmail.com');
//   await page.getByTestId('royal-pass').fill('AbcXyz@6969');
//   await page.getByTestId('royal-login-button').click();
});