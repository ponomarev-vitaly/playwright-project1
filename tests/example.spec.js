const {test, expect} = require('@playwright/test');

test("First test", async({page})=>{
    //
    await page.goto("https://playwright.dev");
    await page.pause();
})