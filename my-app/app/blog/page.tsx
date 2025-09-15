"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../components/header";
import { moneyCota } from "../components/money";
import { AnimationCota } from "../components/animationCota";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import shieldbank from "../assets/shieldbank.png";
import blogEscritorio from "../assets/blogEscritorio.png";

import {
  fetchTechnologyNews,
  fetchPixNews,
  fetchEconomyNews,
  fetchB3News,
  fetchMarketTrendsNews,
} from "../components/news";

const NewsCard = ({ title, description, image, date, category, url }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-5">
      {image ? (
        <div className="relative w-full h-[225px] rounded-lg shadow-lg">
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      ) : (
        <p>Sem imagem</p>
      )}

      <div className="flex gap-5 items-center justify-center py-2">
        <h4 className="uppercase">{category}</h4>
        <p className="text-gray-400">{date}</p>
      </div>

      <p className="text-1xl md:text-1x1 line-clamp-2 text-start">{title}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#CCAA76] hover:underline mt-2"
        >
          Ler mais
        </a>
      )}
    </div>
  );
};


const PageBlog = () => {
  const [headlines, setHeadlines] = useState({
    tech: [],
    pix: [],
    economy: [],
    b3: [],
    trends: [],
    moneyDay: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [tech, pix, economy, b3, trends, moneyDay] = await Promise.all([
          fetchTechnologyNews(),
          fetchPixNews(),
          fetchEconomyNews(),
          fetchB3News(),
          fetchMarketTrendsNews(),
          moneyCota(),
        ]);

        setHeadlines({
          tech: tech || [],
          pix: pix || [],
          economy: economy || [],
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background animate-pulse">
        <Image src={shieldbank} alt="Shieldbank" width={250} height={70} />
      </div>
    );
  }

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
      <body>


        <Header />
        <AnimationCota moneyDay={headlines.moneyDay} />

        
        <div className="bg-background text-white">
          <motion.div className="max-w-7xl mx-auto text-center mb-10 mt-10">
            <motion.p
              initial={{ opacity: -50, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-center mb-20"
            >
              Domine o mercado financeiro: Informações que dão a{" "}
              <strong>sua empresa</strong> a vantagem competitiva que ela{" "}
              <strong>precisa</strong>
            </motion.p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-25 items-center">
            {headlines.economy?.[0] && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 text-sm uppercase tracking-wide">
                    <span className="text-[#CCAA76] font-semibold">
                      últimas Notícias
                    </span>
                    <span className="text-gray-400">
                      {formatarData(headlines.tech[0]?.publishedAt)}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5x1 font-light">
                    {headlines.tech[0]?.title}
                  </h2>
                  <p className="text-gray-300 text-lg line-clamp-3 break-words">
                    {headlines.tech[0]?.description}
                  </p>
                  <motion.a
                    href={headlines.tech[0]?.url}
                    className="inline-block text-white font-semibold py-2 hover:text-[#CCAA76] border-b border-white pb-1 hover:border-[#CCAA76]"
                  >
                    Saiba Mais
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all"
                >
                  {headlines.tech[0]?.urlToImage ? (
                    <Image
                      src={headlines.tech[0].urlToImage}
                      alt={headlines.tech[0].title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  ) : (
                    <p>Sem imagem</p>
                  )}
                </motion.div>
              </>
            )}
          </div>
        </div>

        
        <div className="bg-background text-white py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 items-center">
            {headlines.b3?.slice(0, 3).map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.urlToImage}
                date={formatarData(item.publishedAt)}
                category="BOLSA DE VALORES"
                url={item.url}
              />
            ))}
          </div>
        </div>
                
        <div className="bg-background text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 items-center">
            {headlines.pix?.slice(0, 3).map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.urlToImage}
                date={formatarData(item.publishedAt)}
                category="PIX"
                url={item.url}
              />
            ))}
          </div>
        </div>

        <div className="bg-background text-white py-20">
  <h2 className="text-3xl font-semibold max-w-7xl mx-auto mb-10">
    Conheça Nossos Conteúdos
  </h2>

  <motion.div
    className="max-w-7xl mx-auto grid md:grid-cols-5 gap-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    
    <Card className="relative overflow-hidden rounded-lg shadow-lg bg-background">
      <div className="absolute top-2 left-2 text-sm font-medium text-white flex gap-2 ">
        <span className="text-[#CCAA76]">|</span> ESG
      </div>
      <CardContent className="p-0">
        <Image
          src={blogEscritorio}
          alt="Mulher segurando a Máquina da Shield Bank"
          width={300}
          height={600}
          className="object-cover w-full h-full"
        />
      </CardContent>
    </Card>

      <Card className="relative overflow-hidden rounded-lg shadow-lg bg-background">
      <div className="absolute top-2 left-2 text-sm font-medium text-white flex gap-2 ">
        <span className="text-[#CCAA76]">|</span> ESG
      </div>
      <CardContent className="p-0">
        <Image
          src={blogEscritorio}
          alt="Mulher segurando a Máquina da Shield Bank"
          width={300}
          height={600}
          className="object-cover w-full h-full"
        />
      </CardContent>
    </Card>

    
    <Card className="relative overflow-hidden rounded-lg shadow-lg bg-background">
      <div className="absolute top-2 left-2 text-sm font-medium text-white flex gap-2 ">
        <span className="text-[#CCAA76]">|</span> ESG
      </div>
      <CardContent className="p-0">
        <Image
          src={blogEscritorio}
          alt="Mulher segurando a Máquina da Shield Bank"
          width={300}
          height={500}
          className="object-cover w-full h-full"
        />
      </CardContent>
    </Card>

    
    <Card className="relative overflow-hidden rounded-lg shadow-lg bg-background">
      <div className="absolute top-2 left-2 text-sm font-medium text-white flex gap-2 ">
        <span className="text-[#CCAA76]">|</span> ESG
      </div>
      <CardContent className="p-0">
        <Image
          src={blogEscritorio}
          alt="Mulher segurando a Máquina da Shield Bank"
          width={300}
          height={600}
          className="object-cover w-full h-full"
        />
      </CardContent>
    </Card>

    
    <Card className="relative overflow-hidden rounded-lg shadow-lg bg-background">
      <div className="absolute top-2 left-2 z-10 text-sm font-medium text-white flex gap-2">
        <span className="text-[#CCAA76]">|</span> ESG
      </div>
      <CardContent className="p-0">
        <Image
          src={blogEscritorio}
          alt="Mulher segurando a Máquina da Shield Bank"
          width={300}
          height={600}
          className="object-cover w-full h-full"
        />
      </CardContent>
     </Card>
    
  </motion.div>
</div>

      </body>
    </>
  );
};

export default PageBlog;
