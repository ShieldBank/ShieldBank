"use client";

import { Header } from "./components/header";
import { Content } from "./shieldbank";
import { App } from "./home";
import { ContaDigital } from "./conta-digital";
import { Bank } from "./bank";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <App />
      <Content />
      <Bank />
      <ContaDigital />
      <Footer />
    </div>
  );
}
