import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { useEffect, useState } from "react";

import shieldbank from "../assets/homebeneficios.png";
import shieldbackground from "../assets/shield-bank-servicos.svg";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function ContaDigital() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const servicos = [
    {
      img: shieldbank,
      name: "Recebimentos",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      img: shieldbank,
      name: "Recebimentos",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      img: shieldbank,
      name: "Recebimentos",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      img: shieldbank,
      name: "Recebimentos",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      img: shieldbank,
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
            <p className=" text-[#CCAA76]  text-xl tracking-wider ">SERVIÇOS</p>
            <h2 className="text-5xl font-light w-100 mt-2">
              Veja alguns dos<strong> nossos serviços</strong>
            </h2>
          </div>
          <div className="items-baseline col-start-2 col-end-4">
            <div className=" overflow-hidden">
              <Carousel opts={{ align: "start" }} className="w-[70rem] z-1 ">
                <CarouselContent className=" h-auto w-full ">
                  {servicos.map((item, index) => (
                    <CarouselItem key={index} className="basis-1/3 ">
                      <Image
                        className="w-[90rem]"
                        src={shieldbank}
                        alt="shield bank"
                      />
                      <Card className=" shadow-lg">
                        <CardContent className="">
                          <div className="">
                            <div className="font-normal text-3xl mb-2">
                              Conta Shield Bank
                            </div>
                            <p className="text-gray-700 text-base line-clamp-1">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Voluptatibus quia, nulla!
                              Maiores et perferendis eaque, exercitationem
                              praesentium nihil.
                            </p>
                          </div>
                          <div className="px-6 pt-4 pb-2">
                            <a className="flex hover:animate-bounce cursor-pointer  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              <ChevronRight />
                              Conheça o produto
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hover:bg-[#CCAA76] hover:text-amber-50" />
                <CarouselNext className="hover:bg-[#CCAA76] hover:text-amber-50 mr-10" />
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
