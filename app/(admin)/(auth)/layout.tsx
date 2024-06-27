import React from "react";

import { Header, Navbar } from "./_components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Navbar className="max-lg:hidden" />
      <div className="bg-neutral grow px-7 h-screen flex flex-col overflow-hidden">
        <Header />
        <main className="grow overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
