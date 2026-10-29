import { Buffer } from "node:buffer";
import { test, expect } from "@playwright/test";
import { loginAs } from "./routes";

test.describe("validation", { tag: "@validation" }, () => {
  test("login rejects empty and wrong credentials", async ({ page }) => {
    await page.goto("/login");
    const submit = page.getByRole("button", { name: /Сэрэх/ });

    await submit.click();
    await expect(page.locator(".login-error")).toHaveText("Оюутны код болон нууц үгээ оруулна уу!");

    await page.getByPlaceholder("жишээ: temuulen, bagsh").fill("temuulen");
    await page.locator('input[type="password"]').fill("wrong-password");
    await submit.click();
    await expect(page.locator(".login-error")).toHaveText("Оюутны код эсвэл нууц үг буруу байна. Дахин оролдоно уу.");
    await expect(page).toHaveURL(/\/login$/);
  });

  test("course form shows field errors and stays open", async ({ page }) => {
    await loginAs(page, "bagsh");
    await page.goto("/teacher/courses/new");

    await page.getByTestId("course-save").click();
    await expect(page.getByTestId("course-title-error")).toHaveText("Хичээлийн нэр оруулна уу");
    await expect(page.getByTestId("course-category-error")).toHaveText("Ангилал сонгоно уу");
    await expect(page.getByTestId("course-description-error")).toHaveText("Тайлбар оруулна уу");

    await page.getByTestId("course-title-input").fill("ab");
    await page.getByTestId("course-description-input").fill("богино");
    await page.getByTestId("course-save").click();
    await expect(page.getByTestId("course-title-error")).toHaveText("Нэр хамгийн багадаа 3 тэмдэгт");
    await expect(page.getByTestId("course-description-error")).toHaveText("Тайлбар хамгийн багадаа 10 тэмдэгт");
    await expect(page).toHaveURL(/\/teacher\/courses\/new$/);
  });

  test("material upload rejects a wrong type and a file over 10 MB", async ({ page }) => {
    await loginAs(page, "bagsh");
    await page.goto("/teacher/courses/new");
    const input = page.getByTestId("material-input");

    await input.setInputFiles({ name: "notes.txt", mimeType: "text/plain", buffer: Buffer.from("тэмдэглэл") });
    await expect(page.getByTestId("material-error")).toHaveText("Зөвхөн pdf, pptx, docx, png, jpg файл");

    await input.setInputFiles({ name: "slides.pdf", mimeType: "application/pdf", buffer: Buffer.alloc(11 * 1024 * 1024) });
    await expect(page.getByTestId("material-error")).toHaveText("Файл 10 MB-аас их байна");
  });

  test("lecture edit keeps the lecture when required fields are empty", async ({ page }) => {
    await loginAs(page, "bagsh");
    await page.goto("/explore/lecture/L05");

    await page.getByTestId("lecture-edit-btn").click();
    await page.getByTestId("lecture-title-input").fill(" ");
    await page.getByTestId("lecture-content-input").fill("");
    await page.getByTestId("lecture-save").click();

    await expect(page.getByText("Лекцийн гарчиг оруулна уу")).toBeVisible();
    await expect(page.getByText("Лекцийн агуулга оруулна уу")).toBeVisible();
    await expect(page.getByTestId("lecture-title-input")).toBeFocused();

    await page.getByRole("button", { name: "Буцах" }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("React Components");
  });
});
