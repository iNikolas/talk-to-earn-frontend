"use client";

import { useGate, useUnit } from "effector-react";
import Image from "next/image";
import Script from "next/script";
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
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
      <main className="prose">
        <h2>{player.name}</h2>
        <Image src={player.photoUrl} alt="player avatar" />
        <p>
          <b>Coins: </b>
          {player.coins}
        </p>
      </main>
    </>
  );
}
