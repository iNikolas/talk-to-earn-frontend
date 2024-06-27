"use client";

import { useForm } from "effector-forms";
import { useGate, useUnit } from "effector-react";
import React from "react";
import { MdEmail } from "react-icons/md";
import { PiPasswordBold } from "react-icons/pi";

import { InputWithIcon } from "@/components";
import { loginModel } from "@/stores";

export function LoginForm() {
  useGate(loginModel.Gate);

  const { fields, submit, eachValid } = useForm(loginModel.form);
  const loading = useUnit(loginModel.$loading);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="flex flex-col gap-4"
    >
      <InputWithIcon
        type="text"
        placeholder="Email"
        Icon={MdEmail}
        value={fields.email.value}
        onChange={(e) => fields.email.onChange(e.target.value)}
        onBlur={() => fields.email.onBlur()}
        error={fields.email.errorText()}
      />
      <InputWithIcon
        type="password"
        placeholder="Password"
        Icon={PiPasswordBold}
        value={fields.password.value}
        onChange={(e) => fields.password.onChange(e.target.value)}
        onBlur={() => fields.password.onBlur()}
        error={fields.password.errorText()}
      />
      <button
        type="submit"
        disabled={loading || !eachValid}
        className="btn btn-info max-w-52 w-full mx-auto mt-8"
      >
        Login
      </button>
    </form>
  );
}
