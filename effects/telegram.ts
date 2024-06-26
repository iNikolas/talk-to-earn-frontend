import { createEffect } from "effector";

const telegram = window?.Telegram.WebApp;

export const initializeTelegramAppFx = createEffect(() => telegram.ready());
