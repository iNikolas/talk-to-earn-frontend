"use client";

import { useGate, useUnit } from "effector-react";
import { useRouter } from "next/navigation";
import React from "react";

import { Loader } from "@/components";
import { links } from "@/config";
import { playerModel, telegramModel } from "@/stores";

export default function Home() {
  useGate(telegramModel.Gate);

  const router = useRouter();

  const player = useUnit(playerModel.$player);

  if (!player) {
    return <Loader />;
  }

  return (
    <section>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => router.push(links.profile)}
      >
        Profile
      </button>
    </section>
  );
}
