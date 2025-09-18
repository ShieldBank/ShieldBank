"use client";

import { Header } from "./components/header";
import { Content } from "./shieldbank";
import { App } from "./home";
import { ContaDigital } from "./conta-digital";
import { Bank } from "./inteligenciaFinanceira";
import { Footer } from "./components/footer";
import PageBlog from "./blog/page";

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
