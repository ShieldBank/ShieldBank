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
export function Content() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
          <div className="text-black grid grid-cols-2 place-content-center place-items-center px-30   ">
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
                <p className="text-[#CCAA76]  text-xl tracking-wider">
                  PARA VOCÊ
                </p>
                <h2 className="text-4xl font-light">
                  Para quem é o<strong> Shield Bank?</strong>
                </h2>

                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  setApi={setApi}
                  className=" max-w-[35rem] mt-10 "
                >
                  <CarouselContent className="">
                    {securitizadora.map((item, index) => (
                      <CarouselItem key={index} className="basis-1/3 ">
                        <div className="p-1">
                          <Card
                            className={`transition-transform duration-300  ${
                              current === index - 1
                                ? "scale-100 shadow-lg"
                                : "scale-80 opacity-60"
                            }`}
                          >
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                              <span className="text-[1.2rem] font-semibold text-center mb-6">
                                {item.name}
                              </span>
                              <p className="text-[0.8rem] text-center">
                                {item.content}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hover:bg-[#CCAA76] hover:text-amber-50" />
                  <CarouselNext className="hover:bg-[#CCAA76] hover:text-amber-50" />
                </Carousel>
              </div>
            </div>
            <div className="flex justify-center w-[30rem] h-[40rem]">
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
