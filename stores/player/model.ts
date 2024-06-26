import { createStore, sample } from "effector";

import {
  fetchPlayerInfoFx,
  getUserDataFx,
  showErrorMessageFx,
} from "@/effects";
import { Player } from "@/entities";

export const $player = createStore<Player | null>(null);

sample({ clock: getUserDataFx.doneData, target: fetchPlayerInfoFx });

sample({ clock: fetchPlayerInfoFx.doneData, target: $player });

sample({ clock: fetchPlayerInfoFx.failData, target: showErrorMessageFx });
