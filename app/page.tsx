"use client";

import { useGate } from "effector-react";
import React from "react";

import { telegramModel } from "@/stores";

export default function Home() {
  useGate(telegramModel.Gate);
  return <main className="" />;
}
