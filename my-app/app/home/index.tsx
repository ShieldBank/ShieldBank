"use client";

import { motion } from "framer-motion";

export function App() {
  return (
    <>
      <div className=" w-full  h-[85%]  overflow-hidden bg-cover bg-center ">
        <motion.div className="h-full flex items-center p-20 ">
          <div className="w-full mt-40">
            <motion.p className="text-center">
              Potencialize suas finanças: veja quanto sua empresa{" "}
              <strong>economiza </strong>
              mensalmente com a <strong>ShieldBank</strong>
            </motion.p>
            <h2 className="text-[100px] font-extralight text-center">
              Tecnologia{" "}
              <strong className="text-[#CCAA76]"> personalizada</strong> em
              inteligência financeira
            </h2>
          </div>
        </motion.div>
      </div>
    </>
  );
}
