"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dash from "../assets/dash.png";
export function Content() {
  return (
    <>
      <div className=" w-full bg-amber-50  h-full flex  ">
        <motion.div className="mt-10 ">
          <div className="text-black ">
            <div
              className="flex justify-center
            "
            >
              <h2 className="">MOBILIDADE</h2>
            </div>
            <div
              className="flex justify-center
            "
            >
              <Image src={dash} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
