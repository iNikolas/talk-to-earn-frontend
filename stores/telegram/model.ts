import { sample } from "effector";
import { createGate } from "effector-react";

import {
  getUserDataFx,
  initializeTelegramAppFx,
  showErrorMessageFx,
} from "@/effects";

export const Gate = createGate();

sample({ clock: Gate.open, target: initializeTelegramAppFx });

sample({ clock: initializeTelegramAppFx.doneData, target: getUserDataFx });

sample({ clock: initializeTelegramAppFx.failData, target: showErrorMessageFx });
