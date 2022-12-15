import React from "react";
import { motion } from "framer-motion";

export default function Features({ title, paragraph }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="flex flex-col gap-8"
    >
      <h1 className="text-9xl font-semibold">{title}</h1>
      <p className="text-3xl">
        Purchase a coin for your future
        <br /> and own assets that will provide
        <br />
        generational wealth
      </p>
    </motion.div>
  );
}
