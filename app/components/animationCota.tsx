"use client";
import Image from "next/image";
import loboShield from "../assets/loboShield.png";
import { motion, Variants } from "framer-motion";
import { FaDollarSign, FaEuroSign, FaBitcoin } from "react-icons/fa";

interface AnimationCotaProps {
  moneyDay: [
    {
      BTCBRL: {
        ask: string;
        bid: string;
        code: string;
        codein: string;
        create_date: string;
        high: string;
        low: string;
        name: string;
        pctChange: string;
        timestamp: string;
        varBid: string;
      };
      EURBRL: {
        ask: string;
        bid: string;
        code: string;
        codein: string;
        create_date: string;
        high: string;
        low: string;
        name: string;
        pctChange: string;
        timestamp: string;
        varBid: string;
      };
      USDBRL: {
        ask: string;
        bid: string;
        code: string;
        codein: string;
        create_date: string;
        high: string;
        low: string;
        name: string;
        pctChange: string;
        timestamp: string;
        varBid: string;
      };
    }
  ];
}

export function AnimationCota({ moneyDay }: AnimationCotaProps) {
  const marqueeVariants: Variants = {
    animate: {
      x: ["0%", "-50%"],
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

  const formatarDinheiro = (valor: any) => {
    if (valor === null || valor === undefined) return "N/A";
    const valorNumerico = parseFloat(valor);
    return valorNumerico.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-background text-white font-light text-[10px] md:text-[15px] py-1 md:py-3 flex justify-center items-center overflow-hidden">
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="flex w-full min-w-[200%] justify-between"
      >
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          <FaDollarSign className="text-[#CCAA76]" size={15} />
          <p className="font-light">
            {formatarDinheiro(moneyDay[0].USDBRL.bid)}
          </p>
        </div>
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          <Image src={loboShield} alt="lobo Shield" width={20} height={20} />
          <p className="font-light">Shield Bank</p>
        </div>
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          <FaEuroSign className="text-[#CCAA76]" size={15} />
          <p className="font-light">
            {formatarDinheiro(moneyDay[0].EURBRL?.bid)}
          </p>
        </div>
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          <Image src={loboShield} alt="lobo Shield" width={20} height={20} />
          <p className="font-light">Shield Bank</p>
        </div>
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          <FaBitcoin className="text-[#CCAA76]" size={15} />
          <p className="font-light">
            {formatarDinheiro(moneyDay[0].BTCBRL?.bid)}
          </p>
        </div>
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          <Image src={loboShield} alt="lobo Shield" width={20} height={20} />
          <p className="font-light">Shield Bank</p>
        </div>
      </motion.div>
    </div>
  );
}
