"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export function App() {
  return (
    <>
      <div className=" w-full  h-[75%]  overflow-hidden flex  ">
        <motion.div className="h-full flex items-center p-20 ">
          <div className="w-full mt-10 flex flex-col  items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center mb-10 mt-25"
            >
              Potencialize suas finanças: veja quanto sua empresa{" "}
              <strong>economiza </strong>
              mensalmente com a <strong>ShieldBank</strong>
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-8xl text-center font-light"
            >
              Tecnologia{" "}
              <strong className="text-[#CCAA76]"> personalizada</strong> em
              inteligência financeira
            </motion.h1>
            <motion.button className="text-center mt-10 ">
              <Button
                asChild
                variant={"outline"}
                className="p-6 hover:bg-[#CCAA76] hover:border-0 hover:text-foreground"
              >
                <a href="/login">Abra sua conta</a>
              </Button>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
