// Substitua o valor abaixo pelo seu Measurement ID real do Google Analytics 4
// quando for publicar o site. Exemplo: "G-ABC123XYZ4"
const GA_MEASUREMENT_ID = "G-PLACEHOLDER";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initAnalytics() {
  if (typeof window === "undefined") return;

  if (GA_MEASUREMENT_ID === "G-PLACEHOLDER") {
    console.warn(
      "[GA4] Measurement ID de placeholder em uso. Substitua G-PLACEHOLDER pelo ID real em src/lib/analytics.ts",
    );
  }

  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params ?? {});
}
