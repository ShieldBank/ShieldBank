"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../components/header";
import { moneyCota } from "../components/money";
import { AnimationCota } from "../components/animationCota";
import React, { useState, useEffect } from "react";
import { Card } from "@/app/components/ui/card";
import shieldbank from "../assets/shieldbank.png";
import blogInstagram from "../assets/blogInstagram.jpg";
import blogLinkedin from "../assets/blogLinkedin.png";
import blogTiktok from "../assets/blogTiktok.png";
import blogYoutube from "../assets/blogYoutube.png";
import blogInteligenciaTributaria from "../assets/blogInteligenciaTributaria.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";

import {
  fetchTechnologyNews,
  fetchB3News,
  fetchMarketTrendsNews,
} from "../components/news";

import { Footer } from "../components/footer";

const NewsCard = ({ title, description, image, date, category, url }) => {
  return (
    <div className="flex flex-col items-start justify-center text-center px-5">
      {image ? (
        <div className="relative w-full h-[150px] md:h-[225px]  ">
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="object-cover rounded-sm brightness-105 hover:brightness-90 hover:rounded-none"
          />
        </div>
      ) : (
        <p>Sem imagem</p>
      )}

      <div className="flex gap-5 items-start md:items-center md:justify-center py-2">
        <p className="text-[15px] md:text-[20px] font-bold text-[#CCAA76]"> - </p>
        <p className="text-[15px] md:text-[15px] text-white font-semibold">{date}</p>
      </div>

      <p className="text-xl md:text-[15px] line-clamp-2 text-start">{title}</p>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-md md:text-[15px] text-[#CCAA76] hover:underline mt-2">Ler mais</a>
      )}
    </div>
  );
};


const PageBlog = () => {
  const [headlines, setHeadlines] = useState({
    tech: [],
    b3: [],
    trends: [],
    moneyDay: null,
  });
  const [loading, setLoading] = useState(true);

  {/* api data */}
  useEffect(() => {
    const loadData = async () => {
      try {
        const [tech, b3, trends, moneyDay] = await Promise.all([
          fetchTechnologyNews(),
          fetchB3News(),
          fetchMarketTrendsNews(),
          moneyCota(),
        ]);

        setHeadlines({
          tech: tech || [],
          b3: b3 || [],
          trends: trends || [],
          moneyDay: moneyDay || null,
        });
      } catch (error) {
        console.error("Falha ao carregar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  {/* screen of loading */}
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background animate-pulse ">
        <Image src={shieldbank} alt="Shieldbank" className="w-50 h-50  md:w-[250] md:h-[250]"/>
      </div>
    );
  }

  {/* function formatar date */}
  const formatarData = (dataString) => {
    if (!dataString) return "";
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Header />

      <div className="w-full h-full py-42">
        

        {/* Mensage Home */}
        <div className="bg-background text-white ">
          <motion.div className="max-w-7xl mx-auto text-center mb-10 ">
            <motion.p
              initial={{ opacity: -50, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="px-4 text-center mb-10 md:mb-20 text-md md:text-[1rem]"
            >
              Domine o mercado financeiro: Informações que dão a{" "}
              <strong>sua empresa</strong> a vantagem competitiva que ela{" "}
              <strong>precisa</strong>
            </motion.p>
          </motion.div>

          {/* Home One session News  */}
          <div className="max-w-[414] md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[40px] items-center px-4">
    {headlines.tech?.[0] && (
        <>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className="space-y-3 md:space-y-4 order-2 md:order-1"
            >
                <div className="flex items-center gap-3 text-[14px] md:text-[15px] uppercase tracking-wide">
                    <span className="text-[#CCAA76] font-semibold">
                       | Últimas Notícias
                    </span>
                    <span className="text-gray-400 font-light">
                        {formatarData(headlines.tech[0]?.publishedAt)}
                    </span>
                </div>
                <h2 className="text-4xl md:text-4xl font-semibold md:font-light">
                    {headlines.tech[0]?.title}
                </h2>
                <p className=" text-gray-300 text-md font-semibold  md:font-normal md:text-lg line-clamp-2 md:line-clamp-3 break-words">
                    {headlines.tech[0]?.description}
                </p>
                <motion.a
                    href={headlines.tech[0]?.url} target="_blank"
                    className="inline-block text-md md:text-[20px] text-white font-semibold py-2 hover:text-[#CCAA76] border-b border-white pb-1 hover:border-[#CCAA76]"
                >
                    Ler mais
                </motion.a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className="relative w-full md:w-150 h-[200px] md:h-[300px] rounded-sm overflow-hidden shadow-lg hover:scale-99 transition-all order-1 md:order-2 hover:rounded-none"
            >
                {headlines.tech[0]?.urlToImage ? (
                    <Image
                        src={headlines.tech[0].urlToImage}
                        alt={headlines.tech[0].title}
                        fill
                        unoptimized
                        className="object-cover brightness-105 hover:brightness-90 "
                    />
                ) : (
                    <p>Sem imagem</p>
                )}
            </motion.div>
        </>
    )}
          </div>

        </div>

        

        {/* Two session News  */}
        <div className="bg-background text-white mt-20 mb-10"> 
          <div className="max-w-7xl md:max-w-7xl mx-auto items-start py-10 px-5 text-3xl font-semibold md:font-light text-[#CCAA76]" >| Destaques </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
            {headlines.b3?.slice(0, 3).map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.urlToImage}
                date={formatarData(item.publishedAt)}
                url={item.url}
              />
            ))}
          </div>
        </div>

        {/* Three session News  */}
        <div className="bg-background text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
            {headlines.tech?.slice(1, 4).map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.urlToImage}
                date={formatarData(item.publishedAt)}
                url={item.url}
              />
            ))}
          </div>
        </div>

        {/* Carousel - Discover Our Content */}
        <div className="max-w-[414] md:max-w-7xl mx-auto items-center px-5 mt-20">
          <h2 className="text-3xl font-semibold text-[#CCAA76]  md:text-3xl md:font-light max-w-7xl mx-auto mb-10">
           | Nossos Conteúdos
          </h2>

          <motion.div
            className="max-w-[414] md:max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Carousel
              className="max-w-[300] md:max-w-full  mx-auto  "
              opts={{
                loop: true,
              }}
            >
              <CarouselContent className="max-w-[414] mx-auto md:max-w-7xl r">
                <CarouselItem className=" basis-1/1 sm:basis-1/1 lg:basis-1/4">
                  <Card className="relative overflow-hidden rounded-sm shadow-lg bg-background h-90 border-0 transition-all duration-300 hover:rounded-none items-cente">
                    <a
                      href="https://www.instagram.com/shield_bank"
                      target="_blank"
                    >
                      <Image
                        src={blogInstagram}
                        alt="Finanças"
                        className="absolute inset-0 w-[300] md:w-full md:h-full object-cover transition-all duration-300 hover:brightness-50"
                      />
                    </a>
                    <div className="absolute top-2 left-2 text-sm font-semibold text-white flex gap-2 drop-shadow-md">
                      <span className="text-[#CCAA76]">|</span> Instagram
                    </div>
                  </Card>
                </CarouselItem>
                <CarouselItem className=" basis-1/1 sm:basis-1/2 lg:basis-1/4">
                  <Card className="relative overflow-hidden rounded-sm shadow-lg bg-background h-90 border-0 transition-all duration-300 hover:rounded-none">
                    <a
                      href="https://www.linkedin.com/company/shield-bank/posts/?feedView=all"
                      target="_blank"
                    >
                      <Image
                        src={blogLinkedin}
                        alt="Finanças"
                        className="absolute inset-0 w-[300] md:w-full md:h-full object-cover transition-all duration-300 hover:brightness-50"
                      />
                    </a>
                    <div className="absolute top-2 left-2 text-sm font-semibold text-white flex gap-2 drop-shadow-md">
                      <span className="text-[#CCAA76]">|</span> Linkedin
                    </div>
                  </Card>
                </CarouselItem>

                <CarouselItem className=" basis-1/1 sm:basis-1/2 lg:basis-1/4">
                  <Card className="relative overflow-hidden rounded-sm shadow-lg bg-background h-90 border-0 transition-all duration-300 hover:rounded-none">
                    <a
                      href="https://www.tiktok.com/search?q=shield%20bank&t=1758038399624"
                      target="_blank"
                    >
                      <Image
                        src={blogTiktok}
                        alt="Finanças"
                        className="absolute inset-0 w-[300] md:w-full md:h-full object-cover transition-all duration-300 hover:brightness-50"
                      />
                    </a>
                    <div className="absolute top-2 left-2 text-sm font-semibold text-white flex gap-2 drop-shadow-md">
                      <span className="text-[#CCAA76]">|</span> TikTok
                    </div>
                  </Card>
                </CarouselItem>

                <CarouselItem className=" basis-1/1 sm:basis-1/2 lg:basis-1/4">
                  <Card className="relative overflow-hidden rounded-sm shadow-lg bg-background h-90 border-0 transition-all duration-300 hover:rounded-none">
                    <a
                      href="https://www.youtube.com/@shield_bank"
                      target="_blank"
                    >
                      <Image
                        src={blogYoutube}
                        alt="Finanças"
                        className="absolute inset-0 w-[300] md:w-full md:h-full object-cover transition-all duration-300 hover:brightness-50"
                      />
                    </a>
                    <div className="absolute top-2 left-2 text-sm font-semibold text-white flex gap-2 drop-shadow-md">
                      <span className="text-[#CCAA76]">|</span> YouTube
                    </div>
                  </Card>
                </CarouselItem>

                <CarouselItem className=" basis-1/1 sm:basis-1/2 lg:basis-1/4">
                  <Card className="relative overflow-hidden rounded-sm shadow-lg bg-background h-90 border-0 transition-all duration-300 hover:rounded-none">
                    <a
                      href="https://efici-ncia-tribut-ria.vercel.app"
                      target="_blank"
                    >
                      <Image
                        src={blogInteligenciaTributaria}
                        alt="Finanças"
                        className="absolute inset-0 w-[300] md:w-full md:h-full object-cover transition-all duration-300 hover:brightness-50"
                      />
                    </a>
                    <div className="absolute top-2 left-2 text-sm font-semibold text-white flex gap-2 drop-shadow-md">
                      <span className="text-[#CCAA76]">|</span> Inteligência
                      Tributária
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious className="text-[#CCAA76] border-[#CCAA76] bg-background hover:text-white hover:border-white hover:bg-background" />
              <CarouselNext className="text-[#CCAA76] border-[#CCAA76] bg-background hover:text-white hover:border-white hover:bg-background"/>
            </Carousel>
          </motion.div>
        </div>

        
        {/* Footer */}
        <Footer />
      </div>
      <AnimationCota moneyDay={headlines.moneyDay} />
      
    </>
  );
};

export default PageBlog;
