import { expect, test } from "@playwright/test";

test("page d'accueil se charge correctement", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Maison 05/);

  await expect(page.locator("h1")).toContainText("parenthèse");
  await expect(page.locator("h1")).toContainText("maison");

  await expect(page.getByRole("link", { name: "Réserver une séance" })).toBeVisible();
  await expect(
    page.locator("#top").getByRole("link", { name: "Découvrir la maison" }),
  ).toBeVisible();
});

test("navigation vers sections", async ({ page }) => {
  await page.goto("/");

  await page.click('a[href="#maison"]');
  await expect(page.locator("#maison")).toBeInViewport();

  await page.click('a[href="#disciplines"]');
  await expect(page.locator("#disciplines")).toBeInViewport();
});

test("composants visibles", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("header")).toBeVisible();
  await expect(page.locator("footer")).toBeVisible();

  await expect(page.getByRole("heading", { name: "Pilates Flow" })).toBeVisible();
  await expect(page.getByText("Pilates Mat")).toHaveCount(0);
  await expect(page.locator("text=Ouverture en octobre 2026")).toBeVisible();
});
