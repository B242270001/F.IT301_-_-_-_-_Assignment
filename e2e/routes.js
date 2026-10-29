import { readFileSync } from "node:fs";

const { users } = JSON.parse(readFileSync(new URL("../public/mock/users.json", import.meta.url), "utf8"));

// docs/04-api-pages.md-ийн 12 route. as: нэвтрэх хэрэглэгч, testId: хуудсын data-testid (хуудас нэмээгүй бол null).
// pending: App.jsx-д бүртгэгдээгүй route — эзэн нь нэмэхэд pending-ийг устгана.
export const ROUTES = [
  { path: "/login", as: null, testId: null },
  { path: "/dashboard", as: "temuulen", testId: null },
  { path: "/practice", as: "temuulen", testId: "page-practice", pending: true },
  { path: "/practice/C01", as: "temuulen", testId: "page-learning-path", pending: true },
  { path: "/quiz/UN04", as: "temuulen", testId: "page-quiz", pending: true },
  { path: "/quiz/result", as: "temuulen", testId: "page-quiz-result" },
  { path: "/explore", as: "temuulen", testId: "page-explore", pending: true },
  { path: "/topics/C01", as: "temuulen", testId: "page-topics", pending: true },
  { path: "/explore/lecture/L05", as: "temuulen", testId: "page-lecture" },
  { path: "/leaderboard", as: "temuulen", testId: "page-leaderboard" },
  { path: "/teacher", as: "bagsh", testId: "page-teacher-room" },
  { path: "/teacher/courses/new", as: "bagsh", testId: "page-teacher-course-form" },
];

// Mock login: App ачаалахаас өмнө sessionStorage-д хэрэглэгчийг хадгална (mockAuth-тай ижил түлхүүр)
export async function loginAs(page, username) {
  // eslint-disable-next-line no-unused-vars
  const { password, ...user } = users.find((u) => u.username === username);
  await page.addInitScript((u) => sessionStorage.setItem("studyquest.currentUser", JSON.stringify(u)), user);
}

// Хуудас нээгдэж, mock өгөгдөл ачаалж дуустал хүлээнэ
export async function openRoute(page, { path, as, testId }) {
  if (as) await loginAs(page, as);
  await page.goto(path);
  await page.waitForLoadState("networkidle");
  if (testId) await page.getByTestId(testId).waitFor();
}
