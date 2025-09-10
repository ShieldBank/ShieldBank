"use client";

import { motion } from "framer-motion";
import { Header } from "../components/header";
import React, { useState, useEffect } from 'react';
import { CurrentDate } from "../components/date";



const PageBlog = () => {
  return (
    <>
    <Header />
      <div className=" w-full  h-full sem  overflow-hidden bg-cover bg-center ">
        <motion.div className="h-full flex items-center p-20 bg-background ">
          <div className="w-3xl">
            <h2 className="text-[20px]">
              Últimas Notícias
              <br />
              <CurrentDate />
              <br />
            </h2>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default PageBlog;