import { createEffect } from "effector";
import { TelegramPlayerInfo } from "@/entities";
import { initializeTelegram, mockTelegramDataFactory } from "@/utils";

export const initializeTelegramAppFx = createEffect(() =>
  mockTelegramDataFactory()
    ? null
    : new Promise((resolve) => {
        initializeTelegram(resolve);
      }),
);

export const getUserDataFx = createEffect((): TelegramPlayerInfo => {
  const mockedData = mockTelegramDataFactory();

  if (mockedData) {
    return mockedData;
  }

  const telegram = window.Telegram.WebApp;

  const telegramId = telegram.initDataUnsafe.user?.id;
  const photoUrl = telegram.initDataUnsafe.user?.photo_url;

  if (telegramId == null) {
    throw new Error("We are not recognizing you");
  }

  return {
    telegramId: String(telegramId),
    photoUrl: photoUrl ?? "",
  };
});

export const setupTelegramApplicationFx = createEffect(() => {
  if (mockTelegramDataFactory()) {
    return;
  }

  const telegram = window.Telegram.WebApp;

  telegram.expand();
});
