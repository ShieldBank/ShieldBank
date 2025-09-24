import Image from "next/image";
import { motion } from "framer-motion";

import logoAppStore from "../assets/apple.svg";
import logoGooglePLay from "../assets/google-play.svg";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import shieldbank from "../assets//shieldbank.png";
export function Footer() {
  return (
    <>
      <div className="w-full max-sm:h-[90rem] h-[52rem] grid grid-cols-3 grid-rows-3 max-md:grid-cols-1  p-20  max-sm:m-0 max-sm:p-10">
        <div className=" flex justify-center max-sm:gap-12 max-sm:mt-50 gap-70 col-start-1 col-end-4 row-start-1 row-end-1 max-sm:flex-col-reverse  ">
          <div className="flex flex-col gap-2 font-light max-sm:text-[0.9rem] ">
            <motion.h1 className="font-light text-2xl">
              NOSSOS PRODUTOS
            </motion.h1>
            <motion.p className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]">
              <a href="/produtos/inteligencia">Inteligência Tributária</a>
            </motion.p>
            <motion.p className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]">
              <a href="/produtos/rendimentos">Rendimentos</a>
            </motion.p>
            <motion.p className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]">
              <a href="/produtos/shieldpay">Shield Pay</a>
            </motion.p>
            <motion.p className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]">
              {" "}
              <a href="/produtos/bank">Shield Bank</a>{" "}
            </motion.p>
            <motion.p className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]">
              <a href="/produtos/split">Split de Pagamentos</a>
            </motion.p>
          </div>

          <div className="flex flex-col gap-2 font-light max-md:flex max-md:flex-col max-sm:text-[0.9rem] ">
            <motion.h1 className="font-light text-2xl ">Sobre Nós</motion.h1>
            <a href="/">
              <motion.p className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]">
                Quem Somos
              </motion.p>
            </a>
            <a href="/blog">
              <motion.p className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]">
                Blog
              </motion.p>
            </a>
            <a href="https://shieldbank.vagas.solides.com.br/" target="_blank">
              <motion.p className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]">
                Trabalhe Conosco
              </motion.p>
            </a>
            <a href="/acessar-conta">
              <motion.p className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]">
                Acessar Conta
              </motion.p>
            </a>
            <a
              href="https://wa.me/5511978802370/?text=Olá, Quero abrir minha conta Shield!"
              target="_blank"
              className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]"
            >
              {" "}
              Seja Shield{" "}
            </a>
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

            <div className="flex gap-10 justify-center w-[15rem] max-sm:gap-5 max-sm:w-[10rem]">
              <a href="https://www.instagram.com/shield_bank" target="_blank">
                <FaInstagram
                  className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]"
                  size={25}
                />
              </a>
              <a
                href="https://www.tiktok.com/search?q=shield%20bank&t=1758038399624"
                target="_blank"
              >
                <FaTiktok
                  className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]"
                  size={25}
                />
              </a>
              <a href="https://www.youtube.com/@shield_bank" target="_blank">
                <FaYoutube
                  className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]"
                  size={25}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/shield-bank/posts/?feedView=all"
                target="_blank"
              >
                <FaLinkedin
                  className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]"
                  size={25}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          id="contatos"
          className=" flex max-sm:mt-60 mt-20 justify-center gap-10 items-center  col-start-1 col-end-3 row-start-2 row-end-2 max-md:col-start-1 max-sm:items-start  max-sm:row-start-2 max-sm:row-end-2 "
        >
          <div className="  grid gap-2  max-sm:grid-cols-1">
            <motion.h1 className="font-light text-2xl">ATENDIMENTO</motion.h1>
            <p>Segunda a sexta das 9h às 18h (horário de Brasília)</p>

            <div className="flex   border-[0.5px] w-[20rem] mt-2 mb-4 border-['##FFFFFF52'] opacity-30"></div>
            <div className="flex max-sm:flex-col gap-20 max-sm:gap-5">
              <div className="">
                <p>Whatsapp</p>
                <a
                  href="https://wa.me/5511978802370/"
                  target="_blank"
                  className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]"
                >
                  (11) 97880-2370{" "}
                </a>
              </div>

              <div>
                <p>Todas as regiões </p>
                <p>
                  <a
                    className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]"
                    href=""
                  >
                    0800 000 2651
                  </a>
                </p>
              </div>
              <div>
                <p>E-mail</p>
                <p>
                  <a
                    href="mailto:atendimento@shieldbank.com.br"
                    className="transition-transform duration-200 hover:scale-125 hover:text-[#CCAA76]"
                  >
                    atendimento@shieldbank.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-sm:text-[0.9rem] max-sm:mt-40  col-start-1 col-end-4 row-start-3 row-end-3 mt-5  ">
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
