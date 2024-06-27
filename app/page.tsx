"use client";

import { useGate, useUnit } from "effector-react";
import Image from "next/image";
import React from "react";

import { Loader } from "@/components";
import { playerModel, telegramModel } from "@/stores";

export default function Home() {
  useGate(telegramModel.Gate);
  const player = useUnit(playerModel.$player);

  if (!player) {
    return <Loader />;
  }

  return (
    <section className="prose">
      <h2>{player.name}</h2>
      <Image src={player.photoUrl} alt="player avatar" />
      <p>
        <b>Coins: </b>
        {player.coins}
      </p>
    </section>
  );
}
