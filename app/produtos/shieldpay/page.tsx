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
      <div className=" w-full max-sm:p-10 max-sm:overflow-hidden bg-amber-50 h-auto grid place-items-center   ">
        <div className="w-[60%] z-1  max-sm:w-full max-sm:-mt-25">
          <p className="mt-50  font-semibold text-[#CCAA72]   text-start text-xl tracking-wider  mb-5  ">
            SHIELD PAY
          </p>
          <h1 className=" tracking-[-0.02em] text-black leading-[1.1] font-light  text-7xl text-start max-sm:text-5xl ">
            Shield Pay: <br />
            transforme <strong className="text-[#CCAA72]">
              pagamentos
            </strong>{" "}
            complexos em{" "}
            <strong className="text-[#CCAA72]">simplicidade </strong>
            financeira
          </h1>
          <p className=" mt-10 text-2xl text-black font-light tracking-wider leading-[1.1] max-sm:text-xl">
            Tecnologia que verifica quem está do outro lado, guarda seus fundos
            com segurança e libera o pagamento só quando tudo estiver certo. Sem
            burocracia, com transparência e controle.
          </p>
          <div className=" absolute ml-[50rem] -mt-[35rem]  -z-100 max-sm:hidden  ">
            <Image width={700} src={shieldbackground} alt="" />
          </div>
        </div>

        <div className=" z-1 text-black mb-0 w-[60%] flex justify-around mt-0  max-sm:flex-col-reverse max-sm:w-full">
          <div className="w-[30%] max-sm:w-full  text-xl leading-[1.6] text-start font-light py-20 tracking-wider">
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

          <div className=" z-1 text-black mb-20 max-sm:mb-0  w-[50%] max-sm:w-full max-sm:mt-10 flex justify-around ">
            <div className="flex   w-[80rem] mb-30 max-sm:mb-0 h-[60rem] max-sm:w-[20rem] max-sm:h-[35rem]   ">
              <VideoPlayer className="overflow-hidden  rounded-lg border mt-10 max-sm:mt-0   ">
                <VideoPlayerContent
                  crossOrigin=""
                  muted
                  preload="auto"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.currentTime = 20;
                  }}
                  autoPlay
                  slot="media"
                  src="/shieldPayReels.mp4"
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
        {/* <div className="flex text-start  border-[0.5px] w-[30rem] mt-2 mb-4 border-['##0c0b0b52'] opacity-90"></div> */}
      </div>
      <Footer />
    </>
  );
}
