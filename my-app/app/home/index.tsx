"use client";

import { motion } from "framer-motion";
import { Header } from "../components/header";

export function App() {
  return (
    <>
      <div className=" w-full  h-full bg-[url('/home.png')] overflow-hidden bg-cover bg-center ">
        <motion.div className="h-full flex items-center p-20 ">
          <div className="w-3xl">
            <h2 className="text-[48px]">
              Elevamos o padrão no setor de
              <strong> private banking </strong>
              <br />
              proporcionando uma
              <br />
              <strong>experiência única</strong>
            </h2>
          </div>
        </motion.div>
      </div>
    </>
  );
}
