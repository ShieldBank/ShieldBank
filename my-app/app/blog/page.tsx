"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../components/header";
import { moneyCota } from "../components/money";
import loboShield from "../assets/loboShield.png";
import React, { useState, useEffect } from "react";
import { fetchTechnologyNews, fetchShieldBankNews,  fetchEconomyNews, fetchB3News, fetchMarketTrendsNews} from '../components/news';
import { div } from "motion/react-client";
import { FaDollarSign, FaEuroSign, FaBitcoin } from 'react-icons/fa';
import shieldbank from "../assets/shieldbank.png";

const PageBlog = () => {

  const [headlines, setHeadlines] = useState({
    tech: null,
    shield: null,
    economy: null,
    b3: null,
    trends: null,
    moneyDay: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData= async () => {
      const tech = await fetchTechnologyNews();
      const shield = await fetchShieldBankNews();
      const economy = await fetchEconomyNews();
      const b3 = await fetchB3News();
      const trends = await fetchMarketTrendsNews();
      const moneyDay = await moneyCota();

      setHeadlines({
        tech: tech[1],
        shield: shield[1],
        economy: economy[1],
        b3: b3[1],
        trends: trends[1],
        moneyDay: moneyDay || null,
      });

      setLoading(false);
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
    if (!dataString) return '';
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
  };

     const formatarDinheiro = (valor) => {
     if (valor === null || valor === undefined) return 'N/A';
     const valorNumerico = parseFloat(valor);
     return valorNumerico.toLocaleString('pt-BR', {
     style: 'currency',
     currency: 'BRL',
    });
  };

  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'], 
      transition: {
        x: {
          repeat: Infinity, 
          repeatType: "loop", 
          duration: 60, 
          ease: "linear", 
        },
      },
    },
  };
      
  return (
    <>
    <body>
      
    <div className="absolute bottom-0 left-0 w-full z-10 bg-background text-white font-light text-[15px] px-8 py-3 flex justify-center items-center overflow-hidden">
          <motion.div
          variants={marqueeVariants} 
          animate="animate" 
          className="flex w-full min-w-[200%] justify-between" 
        >
         
        <div className="flex items-center gap-2 flex-shrink-0">
          <FaDollarSign className="text-[#CCAA76]" size={15} />
        <p className="font-light">{formatarDinheiro(headlines.moneyDay?.USDBRL?.bid)}</p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <FaEuroSign className="text-[#CCAA76]" size={15} />
         <p className="font-light">{formatarDinheiro(headlines.moneyDay?.EURBRL?.bid)}</p>
        </div>

         <div className="flex items-center gap-2 flex-shrink-0">
          <FaBitcoin className="text-[#CCAA76]" size={15} />
          <p className="font-light">{formatarDinheiro(headlines.moneyDay?.BTCBRL?.bid)}</p>
         </div>

         <div className="flex items-center gap-2 flex-shrink-0">
           <FaDollarSign className="text-[#CCAA76]" size={15} />
           <p className="font-light">{formatarDinheiro(headlines.moneyDay?.USDBRL?.bid)}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
            <FaEuroSign className="text-[#CCAA76]" size={15} />
            <p className="font-light">{formatarDinheiro(headlines.moneyDay?.EURBRL?.bid)}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
            <FaBitcoin className="text-[#CCAA76]" size={15} />
             <p className="font-light">{formatarDinheiro(headlines.moneyDay?.BTCBRL?.bid)}</p>
            </div>
            </motion.div>
        </div>

       <Header />

      <div className="bg-background text-white">
        <motion.div className="max-w-7xl mx-auto text-center mb-10 mt-10">
         
          <motion.p
              initial={{ opacity: -50, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-center mb-20"
            >
           Domine o mercado financeiro: Informações que dão a <strong>sua
            empresa</strong> a vantagem competitiva que ela <strong>precisa</strong>
          </motion.p>
        

        </motion.div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-25 items-center">
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
                {formatarData(headlines.economy?.publishedAt)}
              </span> 
            </div>
            <h2 className="text-4xl md:text-5x1 font-light">
              {headlines.economy?.title}
            </h2>
            <p className="text-gray-300 text-lg line-clamp-3 break-words">
              {headlines.economy?.description}
            </p>
            <motion.a
              href="#aqui o link da primeira noticia"
              className="inline-block text-white font-semibold py-2 hover:text-[#CCAA76] border-b border-white pb-1 hover:border-[#CCAA76]"
            >
              Saiba Mais
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                
                className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all"
              >
               {headlines.economy?.urlToImage ? (
               <div   className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                  
                   src={headlines.economy.urlToImage}
                   alt={headlines.economy.title}
                   fill
                   unoptimized // Não apagar -> evita precisar liberar domínios
                   className="object-cover"
                 />
               </div>
  ) : (
    <p>Sem imagem</p>
  )}
</motion.div>

        </div>
      </div>
      </body>
    </>
    
  );
};

export default PageBlog;
