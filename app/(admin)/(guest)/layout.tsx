import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-info flex flex-col p-2">
      <main className="grow flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
