"use client";

import { Header } from "./components/header";
import { Content } from "./content";
import { App } from "./home";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header />
      <App />
      <Content />
    </div>
  );
}
