import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import shieldbackground from "../assets/shield-bank-servicos.svg";
export function ContaDigital() {
  const servicos = [
    {
      icons: <DollarSign />,
      name: "Recebimentos",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      icons: <DollarSign />,
      name: "Recebimentos",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      icons: <DollarSign />,
      name: "Recebimentos",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      icons: <DollarSign />,
      name: "Recebimentos",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
    {
      icons: <DollarSign />,
      name: "Recebimentos",
      content:
        "Amplie as formas de recebimento da sua empresa de acordo com suas necessidades.",
    },
  ];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <>
      <div className="w-[100%] bg-amber-50  h-[100rem] text-black  ">
        <div className="grid grid-cols-1 place-content-center  px-26">
          <div className="p-16 flex flex-col  ">
            <p className=" text-[#CCAA76]  text-xl tracking-wider ">SERVIÇOS</p>
            <h2 className="text-5xl font-light w-100 mt-2">
              Veja alguns dos<strong> nossos serviços</strong>
            </h2>
          </div>
          <div className="flex justify-end absolute ">
            <Image src={shieldbackground} alt="" />
          </div>
          <div className=" place-items-center">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              setApi={setApi}
              className=" max-w-[60rem] mt-10 "
            >
              <CarouselContent className="">
                {servicos.map((item, index) => (
                  <CarouselItem key={index} className="basis-1/3 ">
                    <div className="p-1">
                      <Card
                        className={`transition-transform duration-300  ${
                          current === index
                            ? "scale-100 shadow-lg"
                            : "scale-80 opacity-60"
                        }`}
                      >
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                          <span className="text-[2rem] font-semibold text-center mb-6">
                            {item.icons}
                          </span>
                          <span className="text-[2rem] font-semibold text-center mb-6">
                            {item.name}
                          </span>
                          <p className="text-[1.2rem] text-center">
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
      </div>
    </>
  );
}
