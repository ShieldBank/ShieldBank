import { motion } from "motion/react";
import Image from "next/image";
import logoAppStore from "../assets/apple.svg";
import logoGooglePLay from "../assets/google-play.svg";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import shieldbank from "../assets//shieldbank.png";
export function Footer() {
  return (
    <>
      <div className="w-full grid grid-cols-3 grid-rows-3 max-md:grid-cols-1  p-20  max-sm:m-0">
        <div className=" flex justify-center max-md:gap-12 gap-70 col-start-1 col-end-4 row-start-1 row-end-1 max-sm:flex-col-reverse  ">
          <div className="flex flex-col gap-2 font-light max-sm:text-[0.9rem] ">
            <motion.h1 className="font-light text-2xl">
              NOSSOS PRODUTOS
            </motion.h1>
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

          <div className="flex flex-col gap-2 font-light max-md:flex max-md:flex-col max-sm:text-[0.9rem] ">
            <motion.h1 className="font-light text-2xl ">SOBRE NÓS</motion.h1>
            <motion.p>Quem Somos</motion.p>
            <motion.p>Sala de Imprensa</motion.p>

            <motion.p>Blog</motion.p>
            <motion.p>Trabalhe Conosco</motion.p>
          </div>
          <div className=" flex flex-col gap-5 max-sm:items-center     ">
            <Image
              className="w-[15rem] max-sm:w-[12rem]"
              src={logoGooglePLay}
              alt=""
            />
            <Image
              className="w-[15rem] max-sm:w-[12rem]"
              src={logoAppStore}
              alt=""
            />
            <div className="flex gap-10 justify-center w-[15rem]    max-sm:gap-5 max-sm:w-[10rem]  ">
              <FaInstagram size={25} />
              <FaTiktok size={25} />
              <FaYoutube size={25} />
              <FaLinkedin size={25} />
            </div>
          </div>
        </div>
        <div className=" flex justify-center gap-10 items-center  col-start-1 col-end-3 row-start-2 row-end-2 max-md:col-start-1 max-sm:items-start  max-sm:mt-20 max-sm:row-start-2 max-sm:row-end-2 ">
          <div className="  grid gap-2 ">
            <motion.h1 className="font-light text-2xl">ATENDIMENTO</motion.h1>
            <p>Segunda a sexta das 9h às 18h (horário de Brasília)</p>

            <div className="flex  border-[0.5px] w-[20rem] mt-2 mb-4 border-['##FFFFFF52'] opacity-30"></div>
            <div className="flex gap-20">
              <div className="">
                <p>Whatsapp</p>
                <a href="tel:11978802370">(11) 97880-2370 </a>
              </div>

              <div>
                <p>Todas as regiões </p>
                <p>
                  <a href="">0800 000 2651</a>
                </p>
              </div>
              <div>
                <p>E-mail</p>
                <p>
                  <a
                    href="mailto:atendimento@shieldbank.com.br

"
                  >
                    atendimento@shieldbank.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* <div>
            <motion.h1 className="font-light">SAC</motion.h1>
          </div>
          <div>
            <motion.h1 className="font-light">OUVIDORIA</motion.h1>
          </div> */}
        </div>
        <div className=" max-sm:text-[0.9rem] col-start-1 col-end-4 row-start-3 row-end-3  ">
          <Image className="w-[8rem] " src={shieldbank} alt="" />
          <p>CNPJ: 29.774.053/0001-41 </p>
          <br />
          <p>
            Avenida Brigadeiro Faria Lima, 1.461, 4º andar, conjunto 41, Jardim
            Paulistano, São Paulo-SP, CEP 01452-921
          </p>
          <br />
          <p>© 2025 Shield Bank</p>
        </div>
      </div>
    </>
  );
}
