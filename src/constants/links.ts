// Single source of truth for the beta-tester signup destination. Swap this
// to the real Play Console closed-testing opt-in URL
// (play.google.com/apps/testing/com.northkraken.tranzfr) once it exists —
// every CTA on the site reads from here, so one edit updates them all.
export const TESTER_SIGNUP_URL =
  "mailto:hello@tranzfr.com?subject=Quiero%20ser%20tester%20de%20Tranzfr";

// Flip to true once the app is live on Google Play, so all the "Get it on
// Google Play" buttons switch back from the beta-tester CTA automatically.
export const IS_APP_PUBLISHED = false;
