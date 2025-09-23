"use client";
import { Header } from "@/app/components/header";
import Image from "next/image";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import shieldbackground from "../../assets/shield-bank-servicos.svg";
import split from "../../assets/blogYoutube.png";

export default function Split() {
  return (
    <>
      <Header />
      <div className=" w-full bg-amber-50 h-auto grid place-items-center  ">
        <div className="w-[60%] z-1 max-sm:w-full   max-sm:p-5   max-sm:-mt-20">
          <p className="mt-50    font-semibold text-[#CCAA76]   text-start text-xl tracking-wider  mb-5  ">
            SHIELD BANK
          </p>
          <h1 className=" tracking-[-0.02em] text-black leading-[1.1] font-light text-8xl text-start  max-sm:text-5xl ">
            Split de Pagamentos: <br />
            <strong className="text-[#CCAA76]  ">Automatizando</strong> os
            repasses do seu{" "}
            <strong className="text-[#CCAA76]  ">Negócio</strong>
          </h1>
          <p className=" mt-10 text-2xl text-black font-light tracking-wider leading-[1.1]">
            Transforme a divisão de valores das suas vendas com segurança e
            precisão, permitindo que você foque no crescimento do negócio
            enquanto nossa Tecnologia cuida dos repasses.
          </p>
          <div className=" absolute ml-[50rem] -mt-[35rem]  -z-100  ">
            <Image width={700} src={shieldbackground} alt="" />
          </div>
        </div>

        <div className=" z-1 text-black mb-20 w-[70%] max-sm:mt-0 flex max-sm:flex-col justify-around mt-20">
          <div className="w-[30%] max-sm:w-full  text-xl leading-[1.6] text-start font-light py-20 tracking-wider">
            <p className="font-light">
              Defina regras personalizadas com o Split de Pagamentos e faça
              repasses automáticos para seus sócios, fornecedores ou parceiros.
              Na prática, isso significa que quando uma transação é concluída, o
              sistema já separa as porcentagens ou valores definidos e envia
              para cada conta.
              <br />
              <br />
              Assim, você elimina processos manuais, evita erros de cálculo e
              garante que cada parte receba exatamente o que lhe pertence. Mais
              eficiência no seu fluxo de caixa, mais agilidade no dia a dia e
              mais confiança para quem faz negócios com você.
            </p>
            <Button
              variant={"default"}
              className="mt-10 text-xl p-6 font-semibold bg-background text-foreground hover:border-0 hover:bg-[#CCAA76]  max-sm:hidden "
            >
              <a
                href="https://wa.me/5511978802370/?text=Olá, estou interessado sobre a Tecnologia Split de Pagamentos!"
                target="_blank"
              >
                Quero automatizar meus repasses
              </a>
            </Button>
          </div>
          <div className="">
            <Image
              className="rounded-4xl mt-10 max-sm:-mt-15"
              width="500"
              height="90"
              src={split}
              alt="Imagem"
            />
          </div>
          <div className="max-sm:visible min-sm:hidden max-sm:flex max-sm:place-content-center">
            <Button
              variant={"default"}
              className="mt-10 text-xl p-6 font-semibold bg-background text-foreground hover:border-0 hover:bg-[#CCAA76]  max-sm:hidden "
            >
              <a href="/">Crie seu Plano de Rendimento</a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
