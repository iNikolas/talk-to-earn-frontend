import React from "react";

import { Burger, Drawer, Profile } from "./components";

export function Header() {
  const drawerId = React.useId();

  return (
    <Drawer drawerId={drawerId}>
      <header>
        <section className="flex justify-between items-center h-[96px]">
          <Burger htmlFor={drawerId} />
          <Profile />
        </section>
        <div className="divider divider-secondary h-0 mt-0" />
      </header>
    </Drawer>
  );
}
