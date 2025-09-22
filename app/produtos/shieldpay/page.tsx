"use client";
import { Header } from "@/app/components/header";
import Image from "next/image";
import inteligenciaIMG from "../../assets/blogInteligenciaTributaria.jpg";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
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

export default function Inteligencia() {
  return (
    <>
      <Header />
      <div className=" w-full bg-amber-50 h-auto grid place-items-center  ">
        <div className="w-[60%] z-1  ">
          <p className="mt-50  font-semibold text-[#CCAA22]   text-start text-xl tracking-wider  mb-5  ">
            SHIELD PAY
          </p>
          <h1 className=" tracking-[-0.02em] text-black leading-[1.1] font-light text-8xl text-start ">
            Shield Pay: <br />
            transforme pagamentos complexos em simplicidade financeira
          </h1>
          <p className=" mt-10 text-2xl text-black font-light tracking-wider leading-[1.1]">
            Tecnologia que verifica quem está do outro lado, guarda seus fundos
            com segurança e libera o pagamento só quando tudo estiver certo. Sem
            burocracia, com transparência e controle.
          </p>
          <div className=" absolute ml-[50rem] -mt-[35rem]  -z-100  ">
            <Image width={700} src={shieldbackground} alt="" />
          </div>
        </div>

        <div className=" z-1 text-black mb-20 w-[60%] flex justify-around mt-20">
          <div className="w-[30%] text-xl leading-[1.6] text-start font-light py-20 tracking-wider">
            <p className="font-light">
              A Shield Pay nasceu para simplificar a forma como empresas recebem
              e processam pagamentos. Com maquininhas modernas e um sistema
              inteligente, oferecemos transações rápidas, seguras e com taxas
              reduzidas, ajudando seu negócio a economizar mais a cada venda.
            </p>
            <br />
            <p className="font-light">
              Nossa tecnologia garante custos competitivos e transparentes, sem
              tarifas escondidas. Assim, você aumenta sua margem de lucro,
              controla melhor os gastos e impulsiona o crescimento da sua
              empresa.
            </p>
            <br />

            <p className="font-light">
              Com a Shield Pay, cada pagamento vira uma oportunidade de
              rentabilidade: mais transparência, mais economia e muito mais
              confiança para você e seus clientes.
            </p>
            <Button
              asChild
              variant={"outline"}
              className="mt-10 text-xl p-6 font-semibold bg-[#CCAA76] text-foreground hover:border-0 hover:text-foreground hover:bg-background "
            >
              <a href="https://shieldbank.posportal.com.br/" target="_blank">
                Conheça Shield Pay{" "}
              </a>
            </Button>
          </div>
          <div className=" z-1 text-black mb-20  w-[60%] flex justify-around ">
            <div className="flex  w-[30rem] mb-30 h-[50rem] max-sm:w-[12rem] max-sm:h-[25rem]   ">
              <VideoPlayer className="overflow-hidden  rounded-lg border mt-10 max-sm:mt-0  ">
                <VideoPlayerContent
                  crossOrigin=""
                  muted
                  preload="auto"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.currentTime = 20;
                  }}
                  autoPlay
                  slot="media"
                  src="/shieldpay.mp4"
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
