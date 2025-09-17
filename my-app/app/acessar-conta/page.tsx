"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../components/header";
import logoBank from "../assets/logoBank.png";
import iconGoogle from "../assets/iconGoogle.png";
import iconApple from "../assets/iconApple.png";

export default function AcessarContaPage() {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      <Header />

      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-12 text-center px-4"
      >
        <p className="text-lg md:text-xl font-light py-5">
          Acesse sua conta
          <strong className="font-bold text-[#CCAA76]"> Shield Bank</strong> de forma rápida e segura
        </p>
      </motion.div>

     
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 px-4 relative">
        
        
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#CCAA76]"></div>

        
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex flex-col items-center   rounded-xl shadow-lg shadow-black p-8"
        >
          <Image src={logoBank} alt="Shield Class" width={150} height={150} className="mb-4 bg-background rounded-xl" />
          <a
            href="#"
            className="text-white font-light border bg-[#CCAA76] border-amber-50 px-10 py-2 rounded-md mb-6 hover:border-background hover:text-background transition"
          >
            Abrir / Acessar
          </a>
          <div className="Items-center">
            <Image src={iconGoogle} alt="Google Play" width={120} height={40} className="cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex flex-col items-center  rounded-sm shadow-lg shadow-black p-8"
        >
          <Image src={logoBank} alt="Shield Private" width={150} height={150} className="mb-4 bg-background rounded-sm" />
          <a
            href="#"
            className="text-white font-light border bg-[#CCAA76] border-amber-50 px-10 py-2 rounded-md  mb-6 hover:border-background hover:text-background transition"
          >
            Abrir / Acessar
          </a>
          <div className="Items-center">
            <Image src={iconApple} alt="Apple Store" width={120} height={40} className="cursor-pointer hover:opacity-80 transition-opacity rounded-sm" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
