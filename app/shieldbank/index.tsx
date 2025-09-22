"use client";

import { motion } from "framer-motion";

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
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Card, CardContent } from "@/app/components/ui/card";
import { useEffect, useState } from "react";
import { IoReceiptOutline } from "react-icons/io5";
import { SiPix } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineMonetizationOn, MdOutlinePayment } from "react-icons/md";
export function Content() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const servicos = [
    {
      icons: <MdOutlineMonetizationOn />,
      name: "Recebimentos",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      icons: <MdOutlinePayment />,
      name: "Pagamentos",
      content:
        "Mais facilidade para pagar fornecedores, tributos e contas de consumo.",
    },
    {
      icons: <GiReceiveMoney />,
      name: "Gestão Financeira",
      content: "Controle seu fluxo de caixa com mais eficiência.",
    },
    {
      icons: <SiPix />,
      name: "Pix",
      content:
        "Faça transferências e pagamentos a qualquer momento instantaneamente.",
    },
    {
      icons: <IoReceiptOutline />,
      name: "Folha de pagamento",
      content: "Faça pagamentos de seus colaboradores de forma simples e ágil.",
    },
  ];
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const securitizadora: { name: string; content: string }[] = [
    {
      name: "Empreendedores",
      content:
        "Sua empresa tem acesso às nossas soluções especializadas que vão ajudar no crescimento do seu negócio.",
    },
    {
      name: "Parceiros de Negócios",
      content:
        "Temos formas diferentes de parcerias para ampliar suas oportunidades de negócios.",
    },
    {
      name: "Empreendedores",
      content:
        "Sua empresa tem acesso às nossas soluções especializadas que vão ajudar no crescimento do seu negócio.",
    },
    {
      name: "Parceiros de Negócios",
      content:
        "Temos formas diferentes de parcerias para ampliar suas oportunidades de negócios.",
    },
  ];
  return (
    <>
      <div className=" w-full bg-amber-50  h-auto max-sm:h-[35rem]    ">
        <motion.div className=" ">
          <div className="text-black grid grid-cols-2   place-content-center place-items-center  max-sm:place-self-end  max-sm:px-0 px-30   ">
            <div
              className="flex flex-col  p-16 font-normal gap-1 max-sm:p-5 max-sm:mt-20
            "
            >
              <div className="mb-20">
                <p className="text-[#CCAA76] font-semibold text-xl tracking-wider">
                  SHIELD BANK
                </p>
                <p className="font-light text-xl  ">
                  Como podemos potencializar seus <strong> resultados</strong> e
                  simplificar sua vida empresarial.
                </p>
              </div>
              <div>
                <p className=" text-[#CCAA76] font-semibold text-xl tracking-wider ">
                  CONTA DIGITAL
                </p>
                <h2 className="text-xl font-light  mt-2">
                  Conheça nossos <strong> serviços</strong>
                </h2>
                <div className=" grid place-items-center place-content-center z-1 max-sm:hidden">
                  <Carousel
                    opts={{
                      align: "center",
                      loop: true,
                    }}
                    setApi={setApi}
                    className="   max-w-[50rem] max-sm:w-[20rem]    "
                  >
                    <CarouselContent className=" h-[25rem]  ">
                      {servicos.map((item, index) => (
                        <CarouselItem
                          key={index}
                          className="basis-1/3  p-1 -m-3"
                        >
                          <div className="mt-10 -m-[1rem]">
                            <Card
                              className={`transition-transform duration-300 bg-[#001124] text-amber-50    ${
                                current === index
                                  ? "scale-80 shadow-lg  "
                                  : "scale-60 opacity-60 z-0"
                              }`}
                            >
                              <CardContent className="flex flex-col aspect-square p-2 ">
                                <span className="text-[2.8rem] text-[#CCAA76] font-semibold  max-sm:text-[2rem]  flex justify-start px-2">
                                  {item.icons}
                                </span>
                                <span className="text-[1.6rem] max-sm:text-[1.2rem] font-semibold text-center mt-5 ">
                                  {item.name}
                                </span>
                                <p className="text-[1.2rem] text-center max-sm:text-[1rem] mt-10">
                                  {item.content}
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hover:bg-[#13110f] hover:text-amber-50 ml-0 " />
                    <CarouselNext className="hover:bg-[#CCAA76] hover:text-amber-50 mr-0" />
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="flex justify-center  w-[25rem] mb-30 h-[40rem] max-sm:w-[12rem] max-sm:h-[20rem]  max-sm:-mb-10  ">
              <VideoPlayer className="overflow-hidden rounded-lg border mt-10 max-sm:mt-0  ">
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
          </div>
        </motion.div>
      </div>
    </>
  );
}
