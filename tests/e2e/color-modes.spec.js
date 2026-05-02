import { test, expect } from '@playwright/test';

test.describe('switching color modes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('switches to dark mode', async ({ page }) => {
    await page.getByRole('button').click();

    await expect(page.locator('body')).toHaveClass('dark');
    await expect(page.locator('body')).not.toHaveClass('light');
  });

  test('keeps dark mode on after switching', async ({ page }) => {
    await page.getByRole('button').click();

    await expect(page.locator('body')).toHaveClass('dark');
    await expect(page.locator('body')).not.toHaveClass('light');

    await page.reload();

    await expect(page.locator('body')).toHaveClass('dark');
    await expect(page.locator('body')).not.toHaveClass('light');
  });
});
