"use client";

import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

import inteligenciaIMG from "../../assets/blogInteligenciaTributaria.jpg";

import shieldbackground from "../../assets/shield-bank-servicos.svg";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "@/app/components/ui/shadcn-io/video-player";

export default function ShieldBank() {
  return (
    <>
      <Header />
      <div className=" w-full bg-amber-50 h-auto grid place-items-center max-sm:overflow-hidden   ">
        <div className="w-[60%] z-1 max-sm:w-full  max-sm:p-5 max-sm:-mt-20">
          <p className="mt-50  font-semibold text-[#CCAA76]  text-start text-xl tracking-wider   mb-5  ">
            SHIELD BANK
          </p>
          <h1 className=" tracking-[-0.02em] text-black leading-[1.1] font-light text-8xl text-start max-sm:text-7xl">
            Shield Bank: <br />
            uma nova forma de ser
            <strong className="text-[#CCAA76]"> banco</strong>
          </h1>
          <p className=" mt-10 text-2xl text-black font-light tracking-wider leading-[1.1]">
            organizamos o seu financeiro com sistema de peças interligadas,
            repasse, saidas, tudo em seu controle
          </p>
          <div className=" absolute ml-[50rem] -mt-[35rem]  -z-100  ">
            <Image width={700} src={shieldbackground} alt="" />
          </div>
        </div>

        <div className=" z-1 text-black w-[70%] max-sm:flex-col max-sm:w-full flex justify-around mt-10">
          <div className="w-[30%]  max-sm:w-[100%] max-sm:p-5 text-xl leading-[1.6] text-start font-light py-20 tracking-wider">
            <p className="font-light">
              A Shield Bank nasceu para transformar a forma como empresas e
              pessoas lidam com o mercado financeiro. Mais do que oferecer
              soluções de pagamento, nós unimos tecnologia, segurança e
              inteligência estratégica para criar experiências simples,
              eficientes e transparentes. Nosso propósito é ser um parceiro de
              confiança no crescimento do seu negócio, ajudando você a ganhar
              tempo, reduzir custos e aproveitar cada oportunidade de forma
              inteligente..
            </p>
            <Button
              variant={"default"}
              className="mt-10 text-xl p-6 font-semibold bg-background text-foreground hover:border-0 hover:bg-[#CCAA76]  max-sm:hidden "
            >
              <a
                href="https://wa.me/5511978802370/?text=Olá, Quero abrir minha conta Shield!"
                target="_blank"
              >
                Vem Ser Shield
              </a>
            </Button>
          </div>
          <div className="flex  mt-5 w-[25rem]  h-[35rem]  max-sm:h-[30rem] max-sm:w-full max-sm:place-content-center  ">
            <VideoPlayer className="overflow-hidden  rounded-lg border mt-10 max-sm:mt-0 max-sm:w-[20rem]   ">
              <VideoPlayerContent
                crossOrigin=""
                muted
                preload="auto"
                autoPlay
                slot="media"
                src="/Shield_vertical_institucional.mp4"
              />
              <VideoPlayerControlBar>
                <VideoPlayerPlayButton />

                <VideoPlayerSeekBackwardButton />
                <VideoPlayerSeekForwardButton />
                <VideoPlayerTimeRange />
                <VideoPlayerTimeDisplay showDuration />
                <VideoPlayerMuteButton />
                <VideoPlayerVolumeRange />
              </VideoPlayerControlBar>
            </VideoPlayer>
          </div>
          <div className="max-sm:flex max-sm:place-content-center max-sm:place-items-center max-sm:visible min-sm:hidden">
            <Button
              asChild
              variant={"default"}
              className="mt-10  text-xl p-6 font-semibold   max-sm:w-40  bg-[#CCAA76] text-foreground hover:border-0 hover:text-foreground hover:bg-background "
            >
              <a
                href="https://wa.me/5511978802370/?text=Olá, Quero abrir minha conta Shield!"
                target="_blank"
              >
                Vem Ser Shield
              </a>
            </Button>
          </div>
        </div>

        <div className="w-[55rem] mr-50 border-[#CCAA76] border mb-10 opacity-20  max-sm:mt-10 max-sm:mb-10 max-sm:w-[18rem] max-sm:mr-0 "></div>
        <div className=" z-1 text-black mb-20 -mt-10 w-[60%] flex justify-around max-sm:w-full max-sm:flex-col-reverse max-sm:p-5 max-sm:-mt-30">
          <div className="max-sm:visible max-sm:flex max-sm:place-content-center min-sm:hidden">
            <Button
              variant={"default"}
              className="mt-10 text-xl p-6 font-semibold  bg-[#CCAA76] text-foreground hover:border-0 hover:text-foreground hover:bg-background "
            >
              <a href="/acessar-conta">Conheça Nosso App</a>
            </Button>
          </div>
          <div className="flex  w-[25rem] mb-30 max-sm:mb-0 h-[35rem]  max-sm:h-[25rem] max-sm:w-full max-sm:place-content-center max-sm:mt-0 ">
            <VideoPlayer className="overflow-hidden  rounded-lg border mt-10  max-sm:-mt-10 max-sm:w-70 ">
              <VideoPlayerContent
                crossOrigin=""
                muted
                preload="auto"
                autoPlay
                slot="media"
                src="/shieldBank.mp4"
              />
              <VideoPlayerControlBar>
                <VideoPlayerPlayButton />

                <VideoPlayerSeekBackwardButton />
                <VideoPlayerSeekForwardButton />
                <VideoPlayerTimeRange />
                <VideoPlayerTimeDisplay showDuration />
                <VideoPlayerMuteButton />
                <VideoPlayerVolumeRange />
              </VideoPlayerControlBar>
            </VideoPlayer>
          </div>

          <div className="w-[30%] max-sm:w-full text-xl leading-[1.6] text-start font-light py-20 tracking-wider">
            <p className="font-light">
              Nosso propósito é ser um parceiro de confiança no crescimento do
              seu negócio, ajudando você a ganhar tempo, reduzir custos e
              aproveitar cada oportunidade de forma inteligente.
            </p>
            <Button
              variant={"default"}
              className="mt-10 text-xl p-6 font-semibold bg-background text-foreground hover:border-0 hover:bg-[#CCAA76]  max-sm:hidden "
            >
              <a href="/acessar-conta">conheça nosso app</a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
