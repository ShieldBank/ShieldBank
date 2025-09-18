import { motion } from "motion/react";
import Image from "next/image";
import logoAppStore from "../assets/apple.svg";
import logoGooglePLay from "../assets/google-play.svg";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import shieldbank from "../assets//shieldbank.png";
export function Footer() {
  return (
    <>
      <div className="w-full flex flex-col p-10 ">
        <div className="flex justify-around gap-10">
          <div className="flex flex-col gap-2 font-light">
            <motion.h1 className="font-light">NOSSOS PRODUTOS</motion.h1>
            <motion.p>ShieldPay</motion.p>
            <motion.p>ShieldBank</motion.p>
            <motion.p>
              <a href="">Investimentos</a>
            </motion.p>
            <motion.p>
              <a href="">Inteligência Tributaria</a>
            </motion.p>
            <motion.p>
              {" "}
              <a href="">Blog</a>
            </motion.p>
          </div>

          <div>
            <motion.h1 className="font-light">SOBRE NÓS</motion.h1>
            <motion.p>Quem Somos</motion.p>
            <motion.p>Sala de Imprensa</motion.p>

            <motion.p>Blog</motion.p>
            <motion.p>Carreiras</motion.p>
          </div>
          <div className=" flex flex-col gap-5">
            <Image className="w-[15rem]" src={logoGooglePLay} alt="" />
            <Image className="w-[15rem]" src={logoAppStore} alt="" />
            <div className="flex gap-10 justify-center ">
              <FaInstagram size={25} />
              <FaTiktok size={25} />
              <FaYoutube size={25} />
              <FaLinkedin size={25} />
            </div>
          </div>
        </div>
        <div className="flex justify-around mt-10">
          <div>
            <motion.h1 className="font-light">ATENDIMENTO</motion.h1>
          </div>
          <div>
            <motion.h1 className="font-light">SAC</motion.h1>
          </div>
          <div>
            <motion.h1 className="font-light">OUVIDORIA</motion.h1>
          </div>
        </div>
        <div className="p-10 px-[12rem]">
          <Image className="w-[10rem] " src={shieldbank} alt="" />
          <p>© 2025 Shield Bank</p> <br />
          <p>CNPJ: 31.872.495/0001-72</p>
          <p>
            Av. Nove de Julho, 3186 - Jardim Paulista, São Paulo - 01406-000
          </p>
        </div>
      </div>
    </>
  );
}
