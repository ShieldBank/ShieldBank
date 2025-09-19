"use client";

import { Header } from "./components/header";
import { Content } from "./shieldbank";
import { App } from "./home";
import { Produtos } from "./produtos";
import { Inteligencia } from "./inteligenciaFinanceira";
import { Footer } from "./components/footer";
import PageBlog from "./blog/page";
import { Bank } from "./bank";
import { Pos } from "./pos";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <App />
      <Inteligencia />
      <Bank />
      <Content />
      <Pos />
      <Produtos />
      <Footer />
    </div>
  );
}
