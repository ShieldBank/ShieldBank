"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../components/header";
import logoBank from "../assets/logoBank.png";
import shieldpayBank from "../assets/shieldpayBank.png";
import shieldBankPrivate from "../assets/ShieldBankPrivate.png";
import iconGoogle from "../assets/iconGoogle.png";
import iconApple from "../assets/iconApple.png";
import iconWebBanking from "../assets/iconWebBank.png";

export default function AcessarContaPage() {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col overflow-x-hidden">
      <Header />

      {/* animation for the initial message */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-12 text-center px-4"
      >
        {/* mensage initial */}
        <p className="w-full  mx-auto text-center text-lg md:text-xl font-light mt-40">
          Acesse sua conta
          <strong className="font-semibold text-[#CCAA76]">
            {" "}
            Shield Bank
          </strong>{" "}
          de forma rápida e segura
        </p>
      </motion.div>

      {/* cards apps */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 relative mb-20">
        {/* Linha entre o 1º e 2º card */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-[#CCAA76] -translate-x-0"></div>

        {/* Linha entre o 2º e 3º card */}
        <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-[#CCAA76] -translate-x-0"></div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex flex-col items-center rounded-xl shadow-lg shadow-black p-8 w-full"
        >
          <Image
            src={logoBank}
            alt="Shield Class"
            width={150}
            height={150}
            className="mb-10 bg-background rounded-xl shadow-lg shadow-black"
          />
          <div className="flex justify-center gap-4 w-full">
            <div>
              <a
                href="https://apps.apple.com/br/app/shield-bank/id6739310287"
                target="_blank"
                className="block w-full text-center text-white bg-background border border-[#CCAA76] px-6 py-2 rounded-md mb-6 hover:bg-[#CCAA76] hover:border-background hover:text-background transition"
              >
                Acessar
              </a>

              <div className="Items-center">
                <Image
                  src={iconApple}
                  alt="Apple Store"
                  width={120}
                  height={40}
                  className="cursor-pointer hover:opacity-80 transition-opacity rounded-sm mt-5"
                />
              </div>
            </div>

            <div>
              <a
                href="https://play.google.com/store/apps/details?id=br.com.shieldbank.v2&hl=pt_BR&pli=1"
                target="_blank"
                className="block w-full text-center text-white bg-background border border-[#CCAA76] px-6 py-2 rounded-md mb-6 hover:bg-[#CCAA76] hover:border-background hover:text-background transition"
              >
                Acessar
              </a>

              <div className="Items-center">
                <Image
                  src={iconGoogle}
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="cursor-pointer hover:opacity-80 transition-opacity mt-5"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex flex-col items-center rounded-xl shadow-lg shadow-black p-8 w-full"
        >
          <Image
            src={shieldBankPrivate}
            alt="Shield Class"
            width={150}
            height={150}
            className="mb-10 bg-background rounded-xl shadow-lg shadow-black py-4 px-4 mt-3"
          />
          <div className="flex justify-center gap-2 w-full">
            <div>
              <a
                href="https://apps.apple.com/br/app/shield-private/id6788125810"
                target="_blank"
                className="block w-full text-center text-white bg-background border border-[#CCAA76] px-5 py-2 rounded-md mb-6 hover:bg-[#CCAA76] hover:border-background hover:text-background transition"
              >
                Acessar
              </a>

              <div className="Items-center">
                <Image
                  src={iconApple}
                  alt="Apple Store"
                  width={120}
                  height={40}
                  className="cursor-pointer hover:opacity-80 transition-opacity rounded-sm mt-5"
                />
              </div>
            </div>

            <div>
              <a
                href="https://play.google.com/store/apps/details?id=br.com.shield.private"
                target="_blank"
                className="block w-full text-center text-white bg-background border border-[#CCAA76] px-5 py-2 rounded-md mb-6 hover:bg-[#CCAA76] hover:border-background hover:text-background transition"
              >
                Acessar
              </a>

              <div className="Items-center">
                <Image
                  src={iconGoogle}
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="cursor-pointer hover:opacity-80 transition-opacity mt-5"
                />
              </div>
            </div>

            <div>
              <a
                href="https://private.shieldbank.com.br/login/"
                target="_blank"
                className="block w-full text-center text-white bg-background border border-[#CCAA76] px-5 py-2 rounded-md mb-6 hover:bg-[#CCAA76] hover:border-background hover:text-background transition"
              >
                Acessar
              </a>

              <div className="Items-center">
                <Image
                  src={iconWebBanking}
                  alt="Web Banking"
                  width={120}
                  height={40}
                  className="cursor-pointer hover:opacity-80 transition-opacity mt-5"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex flex-col items-center rounded-xl shadow-lg shadow-black p-8 w-full"
        >
          <Image
            src={shieldpayBank}
            alt="Shield Class"
            width={150}
            height={150}
            className="mb-10 bg-background rounded-xl shadow-lg shadow-black py-4 px-4 mt-3"
          />
          <div className="flex justify-center gap-4 w-full">
            <div>
              <a
                href="https://apps.apple.com/br/app/shield-pay-conta-digital/id6444707849"
                target="_blank"
                className="block w-full text-center text-white bg-background border border-[#CCAA76] px-6 py-2 rounded-md mb-6 hover:bg-[#CCAA76] hover:border-background hover:text-background transition"
              >
                Acessar
              </a>

              <div className="Items-center">
                <Image
                  src={iconApple}
                  alt="Apple Store"
                  width={120}
                  height={40}
                  className="cursor-pointer hover:opacity-80 transition-opacity rounded-sm mt-5"
                />
              </div>
            </div>

            <div>
              <a
                href="https://play.google.com/store/apps/details?id=br.com.shieldbank.digital_account&hl=pt_BR"
                target="_blank"
                className="block w-full text-center text-white bg-background border border-[#CCAA76] px-6 py-2 rounded-md mb-6 hover:bg-[#CCAA76] hover:border-background hover:text-background transition"
              >
                Acessar
              </a>

              <div className="Items-center">
                <Image
                  src={iconGoogle}
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="cursor-pointer hover:opacity-80 transition-opacity mt-5"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
