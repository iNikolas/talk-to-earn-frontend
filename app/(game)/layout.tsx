import React from "react";

import { Scripts } from "./_scripts";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Scripts />
      <div className="min-h-dvh bg-neutral flex flex-col p-2">
        <main className="grow flex flex-col">{children}</main>
      </div>
    </>
  );
}
