import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  use: { baseURL: "http://localhost:4173" },
  // Бие даалт 1: grader-ийн ажиллуулдаг build-ийг mock өгөгдөлтэй шалгана, backend асаахгүй.
  webServer: {
    command: "npm run start:grader",
    url: "http://localhost:4173",
    reuseExistingServer: true,
  },
});
