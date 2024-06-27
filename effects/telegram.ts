import { createEffect } from "effector";
import { TelegramPlayerInfo } from "@/entities";
import { initializeTelegram } from "@/utils";

export const initializeTelegramAppFx = createEffect(
  () =>
    new Promise((resolve) => {
      initializeTelegram(resolve);
    }),
);

export const getUserDataFx = createEffect((): TelegramPlayerInfo => {
  const telegram = window.Telegram.WebApp;

  const telegramId = telegram.initDataUnsafe.user?.id;
  const photoUrl = telegram.initDataUnsafe.user?.photo_url;

  if (telegramId == null) {
    throw new Error("We are not recognizing you");
  }

  return {
    telegramId,
    photoUrl: photoUrl ?? "",
  };
});

export const setupTelegramApplicationFx = createEffect(() => {
  const telegram = window.Telegram.WebApp;

  telegram.expand();
});
