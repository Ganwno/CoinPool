import React from "react";
import { motion } from "framer-motion";

export default function Features({ title, paragraph }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="flex flex-col sm:gap-8 gap-5"
    >
      <h1 className="sm:text-9xl text-7xl font-semibold">{title}</h1>
      <p className="sm:text-3xl text-2xl">
        Purchase a coin for your future
        <br /> and own assets that will provide
        <br />
        generational wealth
      </p>
    </motion.div>
  );
}
