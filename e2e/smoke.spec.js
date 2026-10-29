import { test, expect } from "@playwright/test";
import { ROUTES, openRoute } from "./routes";

for (const route of ROUTES) {
  test(`${route.path} opens without errors or /api calls`, { tag: "@smoke" }, async ({ page }) => {
    test.fixme(route.pending, "Route App.jsx-д бүртгэгдээгүй байна");
    const errors = [];
    const apiCalls = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("request", (req) => new URL(req.url()).pathname.startsWith("/api/") && apiCalls.push(req.url()));

    await openRoute(page, route);

    await expect(page).toHaveURL((url) => url.pathname === route.path);
    if (route.testId) await expect(page.getByTestId(route.testId)).toBeVisible();
    expect(errors).toEqual([]);
    expect(apiCalls).toEqual([]);
  });
}
