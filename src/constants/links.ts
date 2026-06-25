// Single source of truth for the beta-tester signup destination. Swap this
// to the real Play Console closed-testing opt-in URL
// (play.google.com/apps/testing/com.northkraken.tranzfr) once it exists —
// every CTA on the site reads from here, so one edit updates them all.
// Subject line matches the page's current language rather than being
// hardcoded, since the site toggles between Spanish and English.
export function getTesterSignupUrl(language: "es" | "en") {
  const subject =
    language === "es" ? "Quiero ser tester de Tranzfr" : "I want to be a Tranzfr tester";
  return `mailto:hello@tranzfr.com?subject=${encodeURIComponent(subject)}`;
}

// Flip to true once the app is live on Google Play, so all the "Get it on
// Google Play" buttons switch back from the beta-tester CTA automatically.
export const IS_APP_PUBLISHED = false;
