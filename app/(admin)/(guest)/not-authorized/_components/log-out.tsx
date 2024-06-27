"use client";

import { useUnit } from "effector-react";
import React from "react";
import { ImExit } from "react-icons/im";

import { userModel } from "@/stores";

export function Logout() {
  const logout = useUnit(userModel.logoutRequested);

  return (
    <button onClick={logout} className="btn btn-ghost" type="button">
      <ImExit /> Log out
    </button>
  );
}
