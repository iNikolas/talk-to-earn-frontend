"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { routeGroupes } from "@/config";
import { cn } from "@/utils";

export function Groups() {
  const pathePathname = usePathname();

  return (
    <>
      {routeGroupes.map((group) => (
        <section key={group.label} className="mt-[52px]">
          <h4 className="text-sm font-light ml-6 mb-2.5">{group.label}</h4>
          {group.routes.map(({ Icon, label, path, customClass }) => (
            <div key={label}>
              <Link
                className={cn(
                  "nav-element",
                  pathePathname === path && "nav-element--active text-primary",
                )}
                href={path}
              >
                <Icon
                  className={cn(
                    pathePathname === path &&
                      (customClass ?? "[&_path]:fill-primary"),
                  )}
                />
                {label}
              </Link>
            </div>
          ))}
        </section>
      ))}
    </>
  );
}
