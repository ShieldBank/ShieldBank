"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export function App() {
  return (
    <>
      <div className=" w-full overflow-hidden flex  ">
        <div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{
          //   duration: 0.05, // deixa mais rápido
          //   ease: "easeIn", // ou "linear", "easeOut", "easeInOut"
          // }}
          className="h-full flex items-center max-sm:justify-center "
        >
          <div className="w-full mt-10 max-sm:mt-0 flex flex-col  items-center">
            <p className="text-center mb-10 mt-25  max-sm:mt-35 max-sm:mb-2  max-sm:text-[1rem] ">
              Potencialize suas finanças: descubra quanto sua empresa pode
              <strong> economizar </strong>
              por mês com a <strong>ShieldBank</strong>
            </p>
            <h1 className="text-8xl text-center font-light max-sm:text-5xl">
              Tecnologia{" "}
              <strong className="text-[#CCAA76]"> personalizada</strong> em
              inteligência financeira
            </h1>
            <span className="text-center mt-10  mb-5 flex gap-12 max-sm:gap-3">
              <Button
                variant={"default"}
                className="w-auto p-6 max-sm:p-4 hover:bg-[#CCAA76] bg-transparent border border-amber-50 hover:border-0 hover:text-foreground text-2xl max-sm:text-[0.9rem] max-sm:w-30"
              >
                <a
                  href="https://wa.me/5511978802370/?text=Olá, Quero abrir minha conta Shield!"
                  target="_blank"
                >
                  Seja Shield
                </a>
              </Button>
              <Button
                variant={"default"}
                className="w-auto bg-[#CCAA76] border-0 p-6 max-sm:p-4 hover:bg-foreground hover:border-0 hover:text-[#CCAA76] max-sm:w-50 text-2xl max-sm:text-[0.9rem] "
              >
                <a href="#produtos">Conheça Nossos Produtos</a>
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
