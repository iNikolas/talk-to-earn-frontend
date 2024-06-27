import React from "react";

import { LoginForm } from "./_components";

export default function Login() {
  return (
    <section className="p-10 rounded-box bg-base-100 prose prose-xl">
      <h1 className="text-center">Login</h1>
      <LoginForm />
    </section>
  );
}
