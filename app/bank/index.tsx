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
      <div className=" w-full bg-amber-50  text-black mt-50 h-auto max-sm:h-[62%]  overflow-hidden flex justify-center items-center ">
        <motion.div className="">
          <div>
            <h1 className="text-4xl   font-light text-start ml-100 mt-20 ">
              <strong className="text-[#CCAA76]">
                {" "}
                Inteligência Financeira{" "}
              </strong>{" "}
              ao alcance de um toque{" "}
            </h1>
            <p className="text-3xl text-start ml-100 font-light">
              Tudo que você precisa para{" "}
              <strong className="text-[#CCAA76]"> gerir suas finanças </strong>,
              na palma da mão{" "}
            </p>
          </div>
          <div className="justify-center items-center flex -mt-50">
            <Image width={2000} src={mobile} alt="" />
          </div>
          <div className="flex items-center justify-center gap-10  mb-30 -mt-50 ">
            <div className=" flex flex-col items-center justify-center w-[15rem] gap-3 ">
              <FaCreditCard size={25} />
              <p className="text-3xl text-center font-light ">
                Cartão de crédito (sujeito a análise)
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center w-[25rem] gap-3">
              <FaMobileAlt size={25} />
              <p className="text-3xl text-center font-light ">
                {" "}
                Conta completa: pagamentos, recibemntos, pix e mais
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center w-[15rem] gap-3">
              <IoStatsChart size={25} />
              <p className="text-3xl text-center font-light ">
                Plataforma de investimentos
              </p>{" "}
            </div>
          </div>
          <div className="flex justify-center mb-10 -mt-20 ">
            <Button
              asChild
              variant={"outline"}
              className="w-60 bg-[#001124] text-amber-50 border-1 p-6 hover:bg-[#CCAA76] hover:border-0 hover:text-[#001124] max-sm:w-45 "
            >
              <a className="text-[1.4rem]" href="/login">
                Abra sua conta
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
