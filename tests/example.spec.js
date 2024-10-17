const { test, expect, firefox } = require("@playwright/test");

test.describe.parallel("Smoke tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.afterEach(async ({ page }) => {
    console.log("This test is finished!");
  });

  //test("First test @regression", async ({ page }) => {
  //
  //await page.goto("https://playwright.dev");
  //await page.pause();
  //const title = page.locator(".navbar__inner .navbar__title");
  //await expect(title).toHaveText("Playwright");
  //});

  test("Second test @regression", async ({ page, browserName }) => {
    //
    test.skip(browserName === "firefox", "Working on the firefox fix");
    await page.pause();
    await page.locator("text=Add/Remove Elements").click();
    // await page.screenshot({path: "screenshot.png"});
    await page.locator("text=Add Element").click();
  });

  test("Duplicate test @smoke", async ({ page }) => {
    //
    await page.pause();
    await page.locator("text=Add/Remove Elements").click();
    await page.locator("text=Add Element").click();
  });

  test("Duplicate test @regression", async ({ page }) => {
    //
    await page.pause();
    await page.locator("text=Add/Remove Elements").click();
    await page.locator("text=Add Element").click();
  });
});
