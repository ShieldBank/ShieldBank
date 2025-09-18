import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { useEffect, useState } from "react";

import { Button } from "../components/ui/button";

export function Bank() {
  return (
    <div className=" h-[25rem] grid grid-cols-2 bg-[url('/home.png')] bg-cover bg-center ">
      <div className="">
        <h1 className="text-5xl text-center font-light mt-20 px-20">
          A <strong className="text-[#CCAA76]">Inteligência Financeira:</strong>{" "}
          O poder em suas mãos.
        </h1>
        <div className="flex justify-center mt-20 ">
          <Button
            asChild
            variant={"outline"}
            className="text-2xl p-6 hover:bg-[#CCAA76] hover:border-0 hover:animate-pulse  hover:text-foreground"
          >
            <a href="https://efici-ncia-tribut-ria.vercel.app/" target="_blank">
              Sua nova realidade
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
