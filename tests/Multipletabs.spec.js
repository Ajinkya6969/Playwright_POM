import {test} from "@playwright/test";

test ('multiple tabs', async() => {

const page1 = await context.newPage(); // First tab
const page2 = await context.newPage(); // Second tab

await page1.goto('https://site.com/home');
await page2.goto('https://site.com/profile');

});
