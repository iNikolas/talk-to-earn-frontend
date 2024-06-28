"use client";

import { useGate, useUnit } from "effector-react";
import React from "react";

import { KebabDropdown, Loader, Table } from "@/components";
import { playerModel } from "@/stores";
import { formatDate } from "@/utils";

export function AllPlayers() {
  useGate(playerModel.Gate);

  const players = useUnit(playerModel.$players);

  if (!players) {
    return <Loader />;
  }

  return (
    <section className="bg-base-100 rounded-box">
      <h2 className="text-2xl py-6 px-8 leading-relaxed">All Players</h2>
      <Table
        table={{
          skipSortForColumnIndexes: [4],
          head: ["Name", "Coins", "Registration Date", "Telegram Id", ""],
          body: players.map(
            ({ name, registrationDate, telegramId, coins }) => ({
              key: name,
              data: [
                { index: name, value: name },
                { index: coins, value: coins },
                {
                  index: new Date(registrationDate).getTime(),
                  value: formatDate(registrationDate, "dd/MM/yyyy"),
                },
                {
                  index: telegramId,
                  value: telegramId,
                },
                {
                  index: "",
                  value: <KebabDropdown />,
                },
              ],
            }),
          ),
        }}
      />
    </section>
  );
}
