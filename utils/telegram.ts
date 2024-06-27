import { retryDelayMs } from "@/config";

export function initializeTelegram(onInitialized: (value: unknown) => void) {
  const telegram = window.Telegram?.WebApp;

  if (telegram) {
    onInitialized(telegram.ready());
  }

  setTimeout(() => {
    initializeTelegram(onInitialized);
  }, retryDelayMs);
}
