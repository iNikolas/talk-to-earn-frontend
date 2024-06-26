import { createEffect } from "effector";

export const initializeTelegramAppFx = createEffect(() => {
  const telegram = window.Telegram.WebApp;
  telegram.ready();
});
