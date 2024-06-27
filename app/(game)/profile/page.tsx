"use client";

import { useGate, useUnit } from "effector-react";
import Image from "next/image";
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
    <section className="prose">
      <h2>{player.name}</h2>
      {!!player.photoUrl && <Image src={player.photoUrl} alt="player avatar" />}
      <p>
        <b>Coins: </b>
        {player.coins}
      </p>
      <p>{player.photoUrl}</p>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => router.push(links.home)}
      >
        Main page
      </button>
    </section>
  );
}
