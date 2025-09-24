"use client";
import { Header } from "@/app/components/header";
import Image from "next/image";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import shieldbackground from "../../assets/shield-bank-servicos.svg";

export default function Investimentos() {
  return (
    <>
      <Header />
      <div className=" w-full bg-amber-50 h-auto grid place-items-center  ">
        <div className="w-[60%] z-1 max-sm:w-full   max-sm:p-5   max-sm:-mt-20">
          <p className="mt-50    font-semibold text-[#CCAA76]   text-start text-xl tracking-wider  mb-5  ">
            SHIELD BANK
          </p>
          <h1 className=" tracking-[-0.02em] text-black leading-[1.1] font-light text-8xl text-start  max-sm:text-6xl ">
            Rendimentos Shield: <br />
            <strong className="text-[#CCAA76]  ">Otimize</strong> cada decisão{" "}
            <strong className="text-[#CCAA76]  ">Financeira</strong>
          </h1>
          <p className=" mt-10 text-2xl text-black font-light tracking-wider leading-[1.1]">
            Invista com a segurança de um plano estruturado e a confiança de que
            cada passo é estrategicamente calculado. Com a Shield Bank, seu
            capital se transforma em um motor de crescimento sólido, orientado
            pela precisão e pela maximização das oportunidades.
          </p>
          <div className=" absolute ml-[50rem] -mt-[35rem]  -z-100  ">
            <Image width={700} src={shieldbackground} alt="" />
          </div>
        </div>

        <div className=" z-1 text-black mb-20 w-[70%] max-sm:mt-0 flex max-sm:flex-col justify-around mt-20">
          <div className="w-[30%] max-sm:w-full  text-xl leading-[1.6] text-start font-light py-20 tracking-wider">
            <p className="font-light">
              Simplificamos a complexidade dos rendimentos, oferecendo clareza e
              segurança para o seu crescimento. Nosso propósito é fazer o seu
              dinheiro trabalhar de forma mais inteligente, identificando,
              avaliando e aproveitando as melhores oportunidades.
              <br />
              <br />
              Conte com ferramentas que permitem a construção de um portfólio
              robusto, resiliente e alinhado aos seus objetivos. Na Shield Bank,
              cada decisão é planejada para conduzir você a um futuro financeiro
              mais sólido, onde rentabilidade e segurança caminham juntas.
            </p>
            <Button
              variant={"default"}
              className="mt-10 text-xl p-6 font-semibold bg-background text-foreground hover:border-0 hover:bg-[#CCAA76]  max-sm:hidden "
            >
              <a href="https://investimentos-sigma.vercel.app/" target="_blank">
                Crie seu Plano de Rendimento
              </a>
            </Button>
          </div>
          <div className="">
            <Image
              className="rounded-4xl mt-10 max-sm:-mt-15"
              width="500"
              height="90"
              src="/shutterstock_2459023597.jpg"
              alt="Imagem"
            />
          </div>
          <div className="max-sm:visible min-sm:hidden max-sm:flex max-sm:place-content-center">
            <Button
              variant={"default"}
              className="mt-10 text-xl p-6 font-semibold bg-background text-foreground hover:border-0 hover:bg-[#CCAA76]   "
            >
              <a href="https://investimentos-sigma.vercel.app/">
                Crie seu Plano de Rendimento
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
