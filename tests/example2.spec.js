const { test, expect } = require("@playwright/test");

test.describe("Examples", () => {
    test("Testing locators", async ({ page }) => {
        //
        
        await page.goto("https://demoqa.com/text-box");
        await page.locator('#userName').type("Test Username...");
        
        

        
      });

})

