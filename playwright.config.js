import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    // Setup project
    {
      name: 'setup', testMatch: /.*\.setup\.js/, testDir: './tests',

      use:
      {
        testIdAttribute: 'data-qa',
        //headless: false,

      }
    },

    {
      name: 'chromium',
      use: {
        testIdAttribute: 'data-qa',

        ...devices['Desktop Chrome'],

        // Use prepared auth state.
        storageState: 'playwright/.auth/user.json',
        //headless: false,
      },
      dependencies: ['setup'],
    },
  ],
});

