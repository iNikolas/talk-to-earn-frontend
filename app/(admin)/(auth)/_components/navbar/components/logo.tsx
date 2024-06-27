"use client";

import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logoPic from "@/assets/images/logo.jpg";
import { links } from "@/config";
import { cn } from "@/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });

export function Logo() {
  return (
    <Link className="max-w-max flex gap-3 items-center" href={links.dashboard}>
      <Image
        priority
        className="ml-3"
        src={logoPic}
        width={48}
        height={48}
        alt="logo"
      />
      <h2
        className={cn(
          "truncate font-bold text-lg text-base-content",
          dmSans.className,
        )}
      >
        Talk to Earn
      </h2>
    </Link>
  );
}
