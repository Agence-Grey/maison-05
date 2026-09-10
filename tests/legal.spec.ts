import { expect, test } from "@playwright/test";

test.describe("pages légales", () => {
  test("mentions légales se charge", async ({ page }) => {
    await page.goto("/mentions-legales");

    await expect(page).toHaveTitle(/Mentions légales/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Mentions légales");
    await expect(page.getByRole("listitem").filter({ hasText: "06 01 05 21 60" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Manon.jacquier@pilatesmaison05.com" }),
    ).toBeVisible();
  });

  test("politique de confidentialité se charge", async ({ page }) => {
    await page.goto("/politique-de-confidentialite");

    await expect(page).toHaveTitle(/Politique de confidentialité/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Politique de confidentialité",
    );
  });

  test("politique cookies se charge", async ({ page }) => {
    await page.goto("/politique-cookies");

    await expect(page).toHaveTitle(/Politique cookies/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Politique cookies");
  });

  test("liens légaux présents et navigables dans le footer", async ({ page }) => {
    await page.goto("/");

    const footer = page.locator("footer");
    await expect(footer.getByRole("link", { name: "Mentions légales" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Politique de confidentialité" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Politique cookies" })).toBeVisible();

    // Fermer la bannière pour qu'elle ne recouvre pas le lien en bas de page.
    await page
      .getByRole("dialog", { name: "Politique de cookies" })
      .getByRole("button", { name: "Accepter" })
      .click();

    await footer.getByRole("link", { name: "Mentions légales" }).click();
    await expect(page).toHaveURL(/mentions-legales/);
  });
});

test.describe("bannière cookies", () => {
  test("affichée au premier chargement", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("dialog", { name: "Politique de cookies" })).toBeVisible();
    await expect(
      page.getByRole("dialog", { name: "Politique de cookies" }).getByRole("button", {
        name: "Accepter",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("dialog", { name: "Politique de cookies" }).getByRole("button", {
        name: "Refuser",
      }),
    ).toBeVisible();
  });

  test("accepter masque la bannière et mémorise le choix", async ({ page }) => {
    await page.goto("/");

    const banner = page.getByRole("dialog", { name: "Politique de cookies" });
    await banner.getByRole("button", { name: "Accepter" }).click();
    await expect(banner).toBeHidden();

    await page.reload();
    await expect(page.getByRole("dialog", { name: "Politique de cookies" })).toBeHidden();
  });

  test("refuser masque la bannière et mémorise le choix", async ({ page }) => {
    await page.goto("/");

    const banner = page.getByRole("dialog", { name: "Politique de cookies" });
    await banner.getByRole("button", { name: "Refuser" }).click();
    await expect(banner).toBeHidden();

    await page.reload();
    await expect(page.getByRole("dialog", { name: "Politique de cookies" })).toBeHidden();
  });
});
