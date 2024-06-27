"use client";

import { useUnit } from "effector-react";
import React from "react";
import { ImExit } from "react-icons/im";

import { userModel } from "@/stores";

export function Logout() {
  const logout = useUnit(userModel.logoutRequested);

  return (
    <button onClick={logout} className="nav-element" type="button">
      <ImExit /> Log out
    </button>
  );
}
