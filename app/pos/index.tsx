"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import pos from "../assets/maquina-de-cartao-shield.png";
import Image from "next/image";
import { FaCreditCard, FaHeadset } from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";
import shieldbackground from "../assets/shield-bank-servicos.svg";

export function Pos() {
  return (
    <>
      <div className=" w-full  h-auto  max-sm:h-[62%]  overflow-hidden flex  ">
        <motion.div className="h-full grid grid-cols-2 place-content-center place-items-center p-20 max-sm:p-0 w-[100%]">
          <div className="ml-50">
            <Image width={400} height={200} quality={90} src={pos} alt="" />
          </div>
          <div className="text-amber-50 w-xl ">
            <p className=" text-[#CCAA76]  text-xl tracking-wider font-semibold mb-10 ">
              MÁQUINA DE CARTÃO
            </p>

            <p className="font-light text-xl ">
              {" "}
              <h2 className="text-3xl font-light mb-10">
                Aumente suas <strong>vendas</strong> com a nossa máquina de
                cartão!
              </h2>
              <p className="font-light">
                Com a nossa maquininha, você aceita múltiplas bandeiras,
                antecipa seus recebíveis e ainda conta com soluções que
                impulsionam o crescimento do seu negócio.
              </p>
            </p>
            <div className="flex gap-2 mt-12">
              <p className="flex gap-2 text-[1rem]">
                <FaCreditCard size={25} color="#CCAA76" />
                Conta Digital Gratuita
              </p>
              <p className="flex gap-2 text-[1rem]">
                {" "}
                <HiOutlineReceiptTax size={25} color="#CCAA76" />
                Taxas Personalizadas
              </p>
              <p className="flex gap-2 text-[1rem]">
                <FaHeadset size={25} color="#CCAA76" />
                Atendimento Rápido e Eficiente
              </p>
            </div>
            <div className="mt-10 justify-center flex gap-10">
              <Button
                asChild
                variant={"outline"}
                className="w-60 bg-[#CCAA76] border-0 p-6 hover:bg-foreground hover:border-0 hover:text-[#CCAA76] max-sm:w-45  "
              >
                <a
                  className="text-[1.4rem]"
                  href="https://shieldbank.posportal.com.br/"
                  target="_blank"
                >
                  SHIELD PAY
                </a>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-60 bg-[#CCAA76] border-0 text-amber-50  p-6 hover:bg-foreground hover:border-0 hover:text-[#CCAA76] max-sm:w-45 "
              >
                <a
                  className="text-[1.4rem]"
                  href="https://shieldpay.wepay.app.br/"
                  target="_blank"
                >
                  PORTAL SHIELD
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-end absolute ml-[80rem]  z-0  ">
            <Image width={700} src={shieldbackground} alt="" />
          </div>
        </motion.div>
      </div>
    </>
  );
}
