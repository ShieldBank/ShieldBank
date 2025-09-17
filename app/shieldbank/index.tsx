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
      <div className=" w-[100%] bg-amber-50  h-auto  ">
        <motion.div className="">
          <div className="text-black grid grid-cols-2 place-content-center place-items-center px-30  ">
            <div
              className="flex flex-col  p-16 font-normal gap-1  
            "
            >
              <div className="mb-20">
                <p className="text-[#CCAA76]  text-xl tracking-wider">
                  SHIELD BANK
                </p>
                <h2 className="text-4xl font-light">
                  Conheça o <strong>Shield Bank</strong>
                </h2>
                <p className="font-light text-xl ">
                  Veja como podemos potencializar seus resultados e simplificar
                  sua vida empresarial.
                </p>
              </div>
              <div>
                <p className=" text-[#CCAA76]  text-xl tracking-wider ">
                  SERVIÇOS
                </p>
                <h2 className="text-4xl font-light  mt-2">
                  Veja alguns dos<strong> nossos serviços</strong>
                </h2>
                <div className=" grid place-items-center place-content-center z-1 ">
                  <Carousel
                    opts={{
                      align: "center",
                      loop: true,
                    }}
                    setApi={setApi}
                    className=" max-w-[50rem]  "
                  >
                    <CarouselContent className=" h-auto">
                      {servicos.map((item, index) => (
                        <CarouselItem key={index} className="basis-1/3  p-0">
                          <div className="">
                            <Card
                              className={`transition-transform duration-300  ${
                                current === index
                                  ? "scale-80 shadow-lg"
                                  : "scale-60 opacity-60"
                              }`}
                            >
                              <CardContent className="flex flex-col aspect-square p-2 ">
                                <span className="text-[2.5rem] text-[#CCAA76] font-semibold   flex justify-start px-2">
                                  {item.icons}
                                </span>
                                <span className="text-[1.5rem] font-semibold text-center mt-5 ">
                                  {item.name}
                                </span>
                                <p className="text-[1rem] text-center  mt-10">
                                  {item.content}
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hover:bg-[#CCAA76] hover:text-amber-50 ml-10" />
                    <CarouselNext className="hover:bg-[#CCAA76] hover:text-amber-50 mr-10" />
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-[25rem] h-[40rem]  ">
              <VideoPlayer className="overflow-hidden rounded-lg border mt-10 ">
                <VideoPlayerContent
                  crossOrigin=""
                  muted
                  preload="auto"
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
