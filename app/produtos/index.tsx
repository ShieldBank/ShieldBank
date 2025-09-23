"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { useEffect, useRef, useState } from "react";

import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import shield from "../assets/SHIELDBANK_AZUL.png";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

export function Produtos() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const servicos = [
    {
      img: "/teste.png",
      name: "Inteligência",

      url: "/produtos/inteligencia",
      content:
        "Impulsione a eficiência da sua empresa de forma simples e prática.",
    },
    {
      img: "shutterstock_2459023597.jpg",
      name: "Rendimentos",
      url: "/produtos/rendimentos",

      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      img: "/Tiktok.png",
      name: "ShieldPay",
      url: "/produtos/shieldpay",

      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      img: "/Linkedin.png",
      name: "ShielBank",
      url: "/produtos/bank",

      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      img: "/Youtube.png",
      name: "Split de Pagamentos",
      url: "/produtos/split",

      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
  ];
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <>
      <div id="produtos" className="w-[100%] bg-amber-50  h-auto text-black  ">
        <div className="p-12 grid grid-rows-1 grid-cols-3 max-sm:grid-cols-1 max-sm:p-8   ">
          <div className="row-start-1 place-items-center ">
            {/* <p className=" text-[#CCAA76]  text-xl tracking-wider ">SERVIÇOS</p> */}
            <h2 className="text-5xl font-light w- mt-2 max-sm:text-4xl max-sm:mt-1 max-sm:mb-20">
              Nossos Produtos
            </h2>
            <Image
              className="max-sm:w-150 max-sm:absolute max-sm:-mt-30 max-sm:mr-4 max-sm:z-0 max-sm:opacity-50"
              width={500}
              src={shield}
              alt=""
            />
          </div>
          <div className="items-baseline col-start-2 col-end-4 max-sm:col-start-1  max-sm:mt-10">
            <div className=" overflow-hidden">
              <Carousel
                opts={{ align: "start" }}
                plugins={[plugin.current]}
                orientation="horizontal"
                className="w-[62rem] h-[33rem] z-1 max-sm:w-full  "
              >
                <CarouselContent className="  max-sm:w-full">
                  {servicos.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/3  max-sm:basis-1/2 "
                    >
                      <a
                        href={item.url}
                        className="  text-amber-50 flex cursor-pointer  rounded-full   text-sm font-semibold  mr-2 mb-2"
                      >
                        <motion.div
                          whileHover={{ scale: 0.9 }}
                          className="w-full "
                        >
                          <Card
                            className="  shadow-lg p-0 bg-cover  bg-center border-0 h-[30rem] max-sm:h-[25rem]   "
                            style={{
                              backgroundImage: `url(${item.img})`,
                            }}
                          >
                            <CardContent className="text-amber-50">
                              <div className="">
                                <div className="font-light m-1 text-2xl max-sm:text-xl">
                                  {item.name}
                                </div>

                                {/* <p className="text-gray-700 text-base line-clamp-1">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Voluptatibus quia, nulla!
                              Maiores et perferendis eaque, exercitationem
                              praesentium nihil.
                            </p> */}
                              </div>
                              <div className="flex ">
                                <ChevronRight />
                                Conheça o produto
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </a>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className=" absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4 mt-10 max-sm:bottom-20">
                  <CarouselNext />

                  <CarouselPrevious />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
