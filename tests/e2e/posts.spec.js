import { test, expect } from '@playwright/test';

test.describe('posts page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('renders markdown posts', async ({ page }) => {
    await page.getByRole('link', { name: 'posts' }).click();
    await expect(page.getByText('A New Website')).toBeVisible();
    await page.getByText('A New Website').click();
  });

  test('navigates between markdown posts', async ({ page }) => {
    await page.goto('/posts/a-new-website');
    await expect(page.getByRole('link', { name: /.+Previous/ })).toBeVisible();
    await expect(page.getByText(/Taking Notes/)).toBeVisible();
    await page.getByRole('link', { name: 'Posts' }).click();
    await expect(page.getByText(/Taking Notes/)).toBeVisible();
    await expect(page.getByText('A New Website')).toBeVisible();
  });
});
