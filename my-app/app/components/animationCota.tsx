"use client";
import Image from "next/image";
import loboShield from "../assets/loboShield.png";
import { motion } from "framer-motion";
import { FaDollarSign, FaEuroSign, FaBitcoin } from "react-icons/fa";

export function AnimationCota({ moneyDay }) {
  const marqueeVariants = {
    animate: {
      x: ["0%", "-40%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        },
      },
    },
  };

  const formatarDinheiro = (valor) => {
    if (valor === null || valor === undefined) return "N/A";
    const valorNumerico = parseFloat(valor);
    return valorNumerico.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-background text-white font-light text-[15px] px-8 py-3 flex justify-center items-center overflow-hidden">
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="flex w-full min-w-[200%] justify-between"
      >
        <div className="flex items-center gap-2 flex-shrink-0">
          <FaDollarSign className="text-[#CCAA76]" size={15} />
          <p className="font-light">
            {formatarDinheiro(moneyDay?.USDBRL?.bid)}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image src={loboShield} alt="lobo Shield" width={20} height={20} />
          <p className="font-light">Shield Bank</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <FaEuroSign className="text-[#CCAA76]" size={15} />
          <p className="font-light">
            {formatarDinheiro(moneyDay?.EURBRL?.bid)}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image src={loboShield} alt="lobo Shield" width={20} height={20} />
          <p className="font-light">Shield Bank</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <FaBitcoin className="text-[#CCAA76]" size={15} />
          <p className="font-light">
            {formatarDinheiro(moneyDay?.BTCBRL?.bid)}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image src={loboShield} alt="lobo Shield" width={20} height={20} />
          <p className="font-light">Shield Bank</p>
        </div>
      </motion.div>
    </div>
  );
}
