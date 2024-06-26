import { sample } from "effector";
import { createGate } from "effector-react";

import { initializeTelegramAppFx } from "@/effects";

export const Gate = createGate();

sample({ clock: Gate.open, target: initializeTelegramAppFx });
