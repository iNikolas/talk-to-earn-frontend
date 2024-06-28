import Image from "next/image";
import React from "react";

import notAllowedPic from "@/assets/images/not-allowed.webp";
import { Logout } from "./_components";

export default function NotAllowedPage() {
  return (
    <section className="overflow-y-auto p-4 bg-neutral rounded">
      <div className="prose mx-auto">
        <h2 className="text-center">Sorry!</h2>
        <h3 className="text-center">You account is not authorized yet</h3>

        <Image
          priority
          className="rounded"
          src={notAllowedPic}
          alt="Not allowed"
        />

        <p>
          Please ask administrator to grant you access to administrator features
        </p>

        <div className="divider" />

        <p className="flex justify-end">
          <Logout />
        </p>
      </div>
    </section>
  );
}
