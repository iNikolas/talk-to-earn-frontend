import { createStore, sample } from "effector";
import { createGate } from "effector-react";

import {
  getUserDataFx,
  initializeTelegramAppFx,
  showErrorMessageFx,
} from "@/effects";

export const Gate = createGate();

const $initialized = createStore(false);

sample({
  clock: Gate.open,
  source: $initialized,
  filter: (initialized) => !initialized,
  target: initializeTelegramAppFx,
});

sample({
  clock: Gate.open,
  fn: () => true,
  target: $initialized,
});

sample({ clock: initializeTelegramAppFx.doneData, target: getUserDataFx });

sample({
  clock: [initializeTelegramAppFx.failData, getUserDataFx.failData],
  target: showErrorMessageFx,
});
