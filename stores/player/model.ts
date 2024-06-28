import { createEvent, createStore, sample } from "effector";

import { createGate } from "effector-react";
import { defaultMaxPlayersResponse } from "@/config";
import {
  fetchAllPlayersFx,
  fetchPlayerInfoFx,
  getUserDataFx,
  showErrorMessageFx,
} from "@/effects";
import { PaginationData, Player } from "@/entities";

export const Gate = createGate();

const fetchAllPlayersRequested = createEvent();

export const $player = createStore<Player | null>(null);

export const $paginate = createStore<PaginationData>({
  limit: defaultMaxPlayersResponse,
  page: 1,
});

export const $players = createStore<Omit<Player, "photoUrl">[] | null>(null);

sample({
  clock: Gate.open,
  source: {
    isGateOpened: Gate.status,
    players: $players,
    isFetching: fetchAllPlayersFx.pending,
  },
  filter: ({ isFetching, isGateOpened, players }) =>
    !isFetching && isGateOpened && !players,
  target: fetchAllPlayersRequested,
});

sample({
  clock: $paginate,
  source: $players,
  filter: (players) => !!players,
  target: fetchAllPlayersRequested,
});

sample({
  clock: fetchAllPlayersRequested,
  source: $paginate,
  target: fetchAllPlayersFx,
});

sample({ clock: getUserDataFx.doneData, target: fetchPlayerInfoFx });

sample({ clock: fetchPlayerInfoFx.doneData, target: $player });

sample({
  clock: fetchAllPlayersFx.done,
  source: $paginate,
  filter: (paginate, { params }) => paginate === params,
  fn: (_, { result }) => result.data,
  target: $players,
});

sample({
  clock: [fetchPlayerInfoFx.failData, fetchAllPlayersFx.failData],
  target: showErrorMessageFx,
});
