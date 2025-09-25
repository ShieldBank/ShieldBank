"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import pos1 from "../assets/maquina-de-cartao-shield.png";

import Image from "next/image";
import { FaCreditCard, FaHeadset } from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";
import shieldbackground from "../assets/shield-bank-servicos.svg";

export function Pos() {
  return (
    <div className="w-full h-auto overflow-x-hidden flex max-sm:px-[5px] max-sm:py-[5px]">
      <motion.div className="h-full grid grid-cols-2 place-content-center place-items-center p-20 max-sm:grid-cols-1 max-sm:p-[5px]">
        
        <div className="max-sm:hidden">
          <div className="flex gap-10 w-full justify-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              animate={{
                rotateX: [0, 10, -10, 0],
                rotateY: [0, 10, -10, 0],
                y: [0, -10, 10, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              <Image width={400} quality={90} src={pos1} alt="pos1" />
            </motion.div>
          </div>
        </div>

        <div className="text-amber-50 w-xl max-sm:w-auto max-sm:place-items-start max-sm:p-[5px]">
          <p className="text-[#CCAA76] text-xl tracking-wider font-semibold mb-10 max-sm:mb-2">
            MÁQUINA DE CARTÃO
          </p>

          <span className="font-light text-xl">
            <h2 className="text-3xl font-light mb-10 max-sm:mb-4">
              Aumente suas <strong>vendas</strong> com a nossa máquininha!
            </h2>
            <p className="font-light">
              Aceite múltiplas bandeiras, antecipe seus recebíveis e aproveite
              soluções que impulsionam o crescimento do seu negócio.
            </p>
          </span>

          <div className="flex gap-2 mt-12 max-sm:flex-col">
            <p className="flex gap-2 text-[1rem] max-sm:text-[0.9rem]">
              <FaCreditCard size={25} color="#CCAA76" />
              Conta Digital Gratuita
            </p>
            <p className="flex gap-2 text-[1rem] max-sm:text-[0.9rem]">
              <HiOutlineReceiptTax size={25} color="#CCAA76" />
              Taxas Personalizadas
            </p>
            <p className="flex gap-2 text-[1rem] max-sm:text-[0.9rem]">
              <FaHeadset size={25} color="#CCAA76" />
              Atendimento Rápido e Eficiente
            </p>
          </div>

          <div className="mt-10 justify-center flex gap-10">
            <Button
              variant={"default"}
              className="w-60 bg-transparent border border-amber-50 p-6 hover:bg-foreground hover:border-0 hover:text-[#CCAA76] max-sm:w-35 max-sm:p-3"
            >
              <a
                className="text-[1.4rem] max-sm:text-[1rem]"
                href="https://shieldbank.posportal.com.br/"
                target="_blank"
              >
                Portal Shield
              </a>
            </Button>
            <Button
              variant={"default"}
              className="w-60 bg-[#CCAA76] border-0 text-amber-50 p-6 hover:bg-foreground hover:border-0 hover:text-[#CCAA76] max-sm:w-35 max-sm:p-3"
            >
              <a
                className="text-[1.4rem] max-sm:text-[1rem]"
                href="https://shieldpay.wepay.app.br/"
                target="_blank"
              >
                Portal Pay
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-end absolute right-0 z-0 max-sm:right-[5px] opacity-60">
          <Image
            className="max-sm:opacity-100 max-sm:w-[20rem]"
            src={shieldbackground}
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
}
