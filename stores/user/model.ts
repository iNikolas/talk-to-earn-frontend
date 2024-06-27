import { createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";

import { links } from "@/config";
import {
  getUserProfileFx,
  logoutFx,
  redirectFx,
  showErrorMessageFx,
} from "@/effects";
import { User } from "@/entities";

import { loginModel } from "../login";

export const Gate = createGate();

export const logoutRequested = createEvent();
export const fetchUserDataRequested = createEvent();

export const $currentUser = createStore<User | null>(null);

sample({
  clock: Gate.open,
  target: fetchUserDataRequested,
});

sample({ clock: loginModel.Gate.open, fn: () => null, target: $currentUser });

sample({
  clock: fetchUserDataRequested,
  source: { user: $currentUser, isFetching: getUserProfileFx.pending },
  filter: ({ user, isFetching }) => !user && !isFetching,
  target: getUserProfileFx,
});

sample({ clock: getUserProfileFx.doneData, target: $currentUser });

sample({ clock: logoutRequested, target: logoutFx });

sample({ clock: logoutFx.done, fn: () => links.login, target: redirectFx });

sample({ clock: logoutFx.done, fn: () => null, target: $currentUser });

sample({
  clock: [logoutFx.failData, getUserProfileFx.failData],
  target: showErrorMessageFx,
});
