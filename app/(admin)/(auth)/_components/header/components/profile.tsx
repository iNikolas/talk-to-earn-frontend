"use client";

import { useGate, useUnit } from "effector-react";
import React from "react";

import { userModel } from "@/stores";

export function Profile() {
  useGate(userModel.Gate);
  const user = useUnit(userModel.$currentUser);

  return (
    <div className="flex gap-6 items-center h-12">
      {user && (
        <p className="text-2xl font-bold">{`Hello, ${user.firstname} ${user.lastname}!`}</p>
      )}
    </div>
  );
}
