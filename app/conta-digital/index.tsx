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

import shieldbank from "../assets/homebeneficios.png";
import shieldbackground from "../assets/shield-bank-servicos.svg";
import inteligenciaTributaria from "../assets/blogInteligenciaTributaria.jpg";
import maquininha from "../assets/blogTiktok.png";
import investimentos from "../assets/blogYoutube.png";
import teste from "../assets/blogInstagram.jpg";

import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

import Autoplay from "embla-carousel-autoplay";

export function ContaDigital() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const servicos = [
    {
      img: "/teste.png",
      name: "Inteligencia",
      content:
        "Impulsione a eficiência da sua empresa de forma simples e prática.",
    },
    {
      img: "shutterstock_2459023597.jpg",
      name: "Investimentos",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      img: "/Tiktok.png",
      name: "ShieldPay",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      img: "/Linkedin.png",
      name: "ShielBank",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      img: "/Youtube.png",
      name: "Recebimentos",
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
      <div className="w-[100%] bg-amber-50  max-h-auto text-black  ">
        <div className="p-28 grid grid-rows-2 grid-cols-3  ">
          <div className="row-start-1">
            {/* <p className=" text-[#CCAA76]  text-xl tracking-wider ">SERVIÇOS</p> */}
            <h2 className="text-5xl font-light w- mt-2">Nossos Produtos</h2>
          </div>
          <div className="items-baseline col-start-2 col-end-4">
            <div className=" overflow-hidden">
              <Carousel
                opts={{ align: "start" }}
                plugins={[plugin.current]}
                orientation="horizontal"
                className="w-[60rem] h-[40rem] z-1  "
              >
                <CarouselContent className="  ">
                  {servicos.map((item, index) => (
                    <CarouselItem key={index} className="basis-1/3 ">
                      <Card
                        className="  shadow-lg p-0 bg-cover  border-0 h-[30rem]  "
                        style={{ backgroundImage: `url(${item.img})` }}
                      >
                        {/* <Image
                          className="w-[40rem] h-[25rem] rounded-2xl"
                          src={item.img}
                          alt="shield bank"
                          quality={90}
                          objectFit="cover"
                        /> */}
                        <CardContent className="text-amber-50">
                          <div className="">
                            <div className="font-light m-1 text-2xl">
                              {item.name}
                            </div>
                            {/* <p className="text-gray-700 text-base line-clamp-1">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Voluptatibus quia, nulla!
                              Maiores et perferendis eaque, exercitationem
                              praesentium nihil.
                            </p> */}
                          </div>
                          {/* <div className="px-6 pt-4 pb-2">
                            <a className="flex hover:animate-bounce cursor-pointer  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              <ChevronRight />
                              Conheça o produto
                            </a>
                          </div> */}
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="flex justify-end absolute ml-[40rem] -mt-[30rem] z-0 ">
                <Image src={shieldbackground} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
