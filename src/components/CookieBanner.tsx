"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "maison05-cookie-consent";
const CONSENT_EVENT = "maison05:cookie-consent";

function subscribe(callback: () => void) {
  const notify = () => callback();
  window.addEventListener("storage", notify);
  window.addEventListener(CONSENT_EVENT, notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(CONSENT_EVENT, notify);
  };
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot() {
  return null;
}

export default function CookieBanner() {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const decide = useCallback((value: "accepted" | "refused") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }, []);

  if (stored !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Politique de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cream/10 bg-bordeaux-dark/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-5 md:flex-row md:justify-between md:px-10">
        <p className="max-w-2xl text-sm leading-relaxed text-cream/80">
          Nous utilisons des cookies pour mesurer l&apos;audience et améliorer votre expérience.
          Consultez notre{" "}
          <a
            href="/politique-cookies"
            className="text-curry-light underline-offset-2 hover:underline"
          >
            politique cookies
          </a>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => decide("refused")}
            className="rounded-full border border-cream/30 px-6 py-2.5 text-sm font-medium text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-curry px-6 py-2.5 text-sm font-semibold text-bordeaux-dark transition-colors hover:bg-curry-light"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
