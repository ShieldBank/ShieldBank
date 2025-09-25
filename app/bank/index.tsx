"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCreditCard, FaMobileAlt } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import mobile from "../assets/TELAS-SHIELD.png";
import { Button } from "../components/ui/button";
export function Bank() {
  return (
    <>
      <div className=" w-full bg-amber-50   text-black mt-30 h-auto max-sm:h-auto  overflow-hidden   flex justify-center items-center ">
        <motion.div className="max-sm:w-full max-sm:h-auto">
          <div className="   ">
            <h1 className="text-4xl max-sm:text-4xl  max-sm:text-center max-sm:ml-0 font-light text-start ml-100 mt-20 ">
              <strong className="text-[#CCAA76]">
                {" "}
                Inteligência Financeira{" "}
              </strong>{" "}
              ao alcance de um toque.{" "}
            </h1>
            <p className="text-3xl text-start ml-100 font-light   max-sm:ml-0 max-sm:mt-5  max-sm:text-2xl  max-sm:text-center ">
              Tudo que você precisa para{" "}
              <strong className="text-[#CCAA76]"> gerir suas finanças</strong>,
              na palma da sua mão.{" "}
            </p>
          </div>
          <div className="  max-sm:items-center justify-center items-center flex -mt-50 max-sm:-mt-25 overflow-x-hidden ">
            <Image
              className="flex h-auto  max-sm:max-w-5xl"
              width={2000}
              src={mobile}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center gap-10  mb-30 -mt-50 max-sm:-mt-25   max-sm:gap-0  ">
            <div className=" flex flex-col items-center justify-center w-[15rem] gap-3  ">
              <FaCreditCard size={25} />
              <p className="text-xl text-center font-light max-sm:text-[0.9rem]">
                Cartão de Débito
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center w-[25rem] gap-3  ">
              <FaMobileAlt size={25} />
              <p className="text-xl text-center font-light max-sm:text-[0.9rem] ">
                {" "}
                Conta Completa: Pagamentos, Recebimentos, Pix e Mais
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center w-[15rem] gap-3 ">
              <IoStatsChart size={25} />
              <p className="text-xl text-center font-light max-sm:text-[0.9rem]">
                Plataforma de investimentos
              </p>{" "}
            </div>
          </div>
          <div className="flex justify-center mb-10 -mt-20 max-sm: ">
            <Button
              asChild
              variant={"default"}
              className="w-60 bg-[#001124] text-amber-50 border-1 p-6 max-sm:p-4.5 hover:bg-[#CCAA76]  hover:border-0 hover:text-[#fdfdfd] max-sm:w-40 "
            >
              <a
                className="text-[1.4rem] max-sm:text-xl"
                href="https://wa.me/5511978802370/?text=Olá, Quero abrir minha conta Shield!"
                target="_blank"
              >
                Seja Shield
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
