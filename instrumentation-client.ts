// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a user loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

declare global {
  interface Window {
    __SENTRY_INITIALIZED__?: boolean;
  }
}

// Prevent multiple Sentry instances
if (!window.__SENTRY_INITIALIZED__) {
  Sentry.init({
    dsn: "https://9e46c71b89e11dcb68ca3524aecf38ed@o4509054931894272.ingest.us.sentry.io/4509054935891968",

    // Add optional integrations for additional features
    integrations: [
      Sentry.replayIntegration(),
    ],

    // Define how likely traces are sampled. Adjust this value in production.
    tracesSampleRate: 1.0,

    // Define how likely Replay events are sampled.
    replaysSessionSampleRate: 0.1,

    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // Debugging mode (set to `true` to print logs while setting up Sentry)
    debug: false,
  });

  window.__SENTRY_INITIALIZED__ = true;
}
