import { test, expect } from '@playwright/test';
test.describe('MiniShop E2E Flow', () => {
  test('should go through the full buying process', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await expect(page.locator('h1')).toContainText('All Products');
    await page.locator('.product-card').first().click();
    await expect(page.locator('button')).toContainText('Add to Cart');
    await page.click('button:text("Add to Cart")');
    await expect(page.locator('h1')).toContainText('Your Cart');
    await page.click('button:text("Place Order")');
    await expect(page.url()).toContain('/login');
  });
});
