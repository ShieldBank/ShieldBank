"use client";
import { Header } from "@/app/components/header";
import Image from "next/image";
import inteligenciaIMG from "../../assets/blogInteligenciaTributaria.jpg";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import shieldbackground from "../../assets/shield-bank-servicos.svg";

export default function Inteligencia() {
  return (
    <>
      <Header />
      <div className=" w-full bg-amber-50 h-auto grid place-items-center  ">
        <div className="w-[60%] z-1 max-sm:w-full max-sm:p-5 max-sm:-mt-20 ">
          <p className="mt-50  font-semibold text-[#CCAA76]   text-start text-xl tracking-wider  mb-5  ">
            CONTA SHIELD
          </p>
          <h1 className=" tracking-[-0.02em] text-black leading-[1.1] font-light text-8xl text-start max-sm:text-6xl ">
            Inteligência Shield: <br />
            <strong className="text-[#CCAA76]">
              eficiência estratégica{" "}
            </strong>{" "}
            para maximizar lucros
          </h1>
          <p className=" mt-10 text-2xl text-black font-light tracking-wider leading-[1.1]">
            Com tecnologia de análise contínua, a Shield transforma dados em
            oportunidades reais de crescimento. Reduza desperdícios, otimize
            recursos e aumente sua rentabilidade com decisões mais inteligentes
            e seguras.
          </p>
          <div className=" absolute ml-[50rem] -mt-[35rem]  -z-100  ">
            <Image width={700} src={shieldbackground} alt="" />
          </div>
        </div>

        <div className=" z-1 text-black mb-20 w-[70%] flex justify-around mt-20 max-sm:mt-0 max-sm:flex-col">
          <div className="w-[30%] max-sm:w-full text-xl leading-[1.6] text-start font-light py-20  max-sm:py-8 tracking-wider">
            <p className="font-light">
              Aumentar a rentabilidade não é apenas sobre vender mais; é sobre
              operar de forma mais inteligente. A Inteligência Shield é o seu
              parceiro nesse processo. Ao integrar nossa tecnologia à sua
              operação, você ganha a capacidade de reduzir custos ocultos,
              otimizar processos e descobrir novas fontes de receita que antes
              eram invisíveis. Nossos clientes relatam um aumento significativo
              na lucratividade e uma melhoria na agilidade de resposta às
              mudanças do mercado. O Shield transforma sua empresa em uma
              máquina de eficiência, onde cada decisão é uma oportunidade de
              crescimento.
            </p>
            <Button
              asChild
              variant={"outline"}
              className="mt-10 text-xl p-6 font-semibold bg-background text-foreground hover:border-0 hover:text-[#CCAA76] hover:bg-background max-sm:hidden "
            >
              <a
                href="https://efici-ncia-tribut-ria.vercel.app/"
                target="_blank"
              >
                {" "}
                Sua nova realidade
              </a>
            </Button>
          </div>
          <div className="">
            <Image
              className="rounded-4xl mt-10"
              width={500}
              src={inteligenciaIMG}
              alt=""
            />
          </div>
          <div className="max-sm:visible max-sm:flex max-sm:place-content-center min-sm:hidden">
            <Button
              asChild
              variant={"outline"}
              className="mt-10 text-xl p-6 font-semibold bg-background text-foreground hover:border-0 hover:text-[#CCAA76] hover:bg-background "
            >
              <a
                href="https://efici-ncia-tribut-ria.vercel.app/"
                target="_blank"
              >
                {" "}
                Sua nova realidade
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
