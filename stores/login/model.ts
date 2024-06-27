import { combine, sample } from "effector";
import { createForm } from "effector-forms";
import { createGate } from "effector-react";
import { links } from "@/config";
import { loginFx, redirectFx, showErrorMessageFx } from "@/effects";

import { LoginCredentials } from "@/entities";
import { fields } from "@/utils";

export const Gate = createGate();

export const form = createForm<LoginCredentials>({
  fields: {
    email: fields.email(),
    password: fields.password(),
  },
});

export const $loading = combine([loginFx.pending], (tuple) =>
  tuple.some(Boolean),
);

sample({ clock: form.formValidated, target: loginFx });

sample({ clock: Gate.close, target: form.reset });

sample({ clock: loginFx.done, fn: () => links.dashboard, target: redirectFx });

sample({
  clock: loginFx.failData,
  target: showErrorMessageFx,
});
