import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "cypress/fixtures",
  video: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    baseUrl: 'https://www.google.com',
  },
});
