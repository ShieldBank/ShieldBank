import { motion } from "motion/react";
import Image from "next/image";
import logoAppStore from "../assets/apple.svg";
import logoGooglePLay from "../assets/google-play.svg";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <div className="w-full flex flex-col p-10  ">
        <div className="flex justify-around gap-10">
          <div className="flex flex-col gap-10 font-light">
            <motion.h1 className="">NOSSOS PRODUTOS</motion.h1>
            <motion.p>ShieldPay</motion.p>
            <motion.p>ShieldBank</motion.p>
            <motion.p>Investimentos</motion.p>
            <motion.p>Inteligência Tributaria</motion.p>
            <motion.p>Blog</motion.p>
          </div>
          <div>
            <motion.h1>Contato</motion.h1>
            <motion.p>0800 000 2651</motion.p>
            <motion.p>atendimento@shieldbank.com.br</motion.p>
          </div>
          <div>
            <motion.h1>SOBRE NÓS</motion.h1>
            <motion.p>Quem Somos</motion.p>
            <motion.p>Blog</motion.p>
            <motion.p>Carreiras</motion.p>
          </div>
          <div className=" flex flex-col gap-5">
            <Image className="w-[15rem]" src={logoGooglePLay} alt="" />
            <Image className="w-[15rem]" src={logoAppStore} alt="" />
            <div className="flex gap-10 justify-center">
              <FaInstagram />
              <FaTiktok />
              <FaYoutube />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
