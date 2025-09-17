"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../components/header";
import React, { useState, useEffect } from "react";
import { fetchTechnologyNews, fetchEconomyNews, fetchB3News, fetchMarketTrendsNews} from '../components/news';
import { div } from "motion/react-client";
import shieldbank from "../assets/shieldbank.png";

const PageBlog = () => {
  const [headlines, setHeadlines] = useState({
    tech: null,
    economy: null,
    b3: null,
    trends: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      const tech = await fetchTechnologyNews();
      const economy = await fetchEconomyNews();
      const b3 = await fetchB3News();
      const trends = await fetchMarketTrendsNews();

      setHeadlines({
        tech: tech[0],
        economy: economy[0],
        b3: b3[0],
        trends: trends[0]
      });

      setLoading(false);
    };

    loadNews();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background animate-pulse">
                  <Image src={shieldbank} alt="Shieldbank" width={250} height={70} />
               </div>
    );
  }
      
  return (
    <>

       <Header />
      <div className="bg-background text-white py-40 px-8">
        <motion.div className="max-w-7xl mx-auto text-center mb-10">
         
          <motion.p
              initial={{ opacity: -50, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-center mb-20 mt-15"
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
                {headlines.tech?.publishedAt}
              </span> 
            </div>
            <h2 className="text-4xl md:text-5x1 font-light">
              {headlines.tech?.title}
            </h2>
            <p className="text-gray-300 text-lg line-clamp-3 break-words">
              {headlines.tech?.description}
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
                className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg"
              >
               {headlines.tech?.urlToImage ? (
               <div   className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                  
                   src={headlines.tech.urlToImage}
                   alt={headlines.tech.title}
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
    </>
  );
};

export default PageBlog;
