"use client";

import { motion } from "framer-motion";
import { Header } from "../components/header";

export function App() {
  return (
    <>
      <div className="px-20">
        <motion.div>
          <div className="w-60">
            <h2>
              Elevamos o padrão no setor de
              <b> private banking</b>
              proporcionando uma
              <b>experiência única</b>
            </h2>
          </div>
        </motion.div>
        <motion.div>Hello</motion.div>
        <motion.div>Hello</motion.div>
      </div>
    </>
  );
}
