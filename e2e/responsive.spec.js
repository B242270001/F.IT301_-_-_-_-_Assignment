import { test, expect } from "@playwright/test";
import { ROUTES, openRoute } from "./routes";

const VIEWPORTS = [
  ["mobile", 375, 740],
  ["desktop", 1440, 900],
];

for (const [device, width, height] of VIEWPORTS) {
  test.describe(`${device} (${width}px)`, () => {
    test.use({ viewport: { width, height } });

    for (const route of ROUTES) {
      test(`${route.path} has no horizontal overflow`, { tag: "@responsive" }, async ({ page }) => {
        test.fixme(route.pending, "Route App.jsx-д бүртгэгдээгүй байна");
        await openRoute(page, route);

        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        expect(overflow).toBeLessThanOrEqual(0);
      });
    }
  });
}
