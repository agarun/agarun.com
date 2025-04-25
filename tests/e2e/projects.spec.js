import { test, expect } from '@playwright/test';

test.describe('projects page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders markdown projects', async ({ page }) => {
    await page.getByRole('link', { name: 'work' }).click();

    await page.waitForURL('/projects');
    const count = await page.locator('main').locator('> *').count();
    expect(count).toBeGreaterThan(1);

    await expect(async () => {
      const count = await page.locator('article').count();
      expect(count).toBeDefined();
      expect(count).toBeGreaterThan(5);
    }).toPass({ timeout: 3000 });
  });
});
