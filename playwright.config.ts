import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Mobile Testing Configuration
 * Tests critical user journeys on mobile viewports (iOS Safari, Android Chrome)
 * 
 * Run tests: npx playwright test
 * Run with UI: npx playwright test --ui
 * Generate report: npx playwright show-report
 */

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/mobile-test-results.json' }],
    ['list']
  ],
  
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:4321',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  // Mobile device configurations
  projects: [
    {
      name: 'Mobile Safari - iPhone 14',
      use: {
        ...devices['iPhone 14'],
        // Simulate Slow 4G for realistic mobile conditions
        contextOptions: {
          offline: false,
        },
        launchOptions: {
          slowMo: 50, // Slow down by 50ms to see interactions
        },
      },
    },
    {
      name: 'Mobile Safari - iPhone SE',
      use: {
        ...devices['iPhone SE'],
        // Test on smaller viewport (375x667)
      },
    },
    {
      name: 'Mobile Chrome - Pixel 7',
      use: {
        ...devices['Pixel 7'],
      },
    },
    {
      name: 'Mobile Chrome - Samsung Galaxy S21',
      use: {
        ...devices['Galaxy S21'],
      },
    },
    {
      name: 'Tablet - iPad Pro',
      use: {
        ...devices['iPad Pro'],
      },
    },
  ],

  // Local dev server for testing
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});

