const {test, expect} = require('@playwright/test');

test("First test", async({page})=>{
    //
    await page.goto("https://playwright.dev");
    await page.pause();
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
})

test("Second test", async({page})=>{
    //
    await page.goto("https://the-internet.herokuapp.com/");
    await page.pause();
    await page.locator("text=Add/Remove Elements").click();
    await page.locator("text=Add Element").click();
})