import React from "react";
import { motion } from "framer-motion";

type Props = { header: string; subheader: string; description: string };

function HeaderLeftTextRight({ header, subheader, description }: Props) {
  return (
    <section className=" grid grid-cols-1 place-content-center px-4 py-12 text-tw-text-black md:grid-cols-2 md:place-items-center lg:px-16 lg:py-36">
      <div className="pb-8 md:pb-0 md:pr-4">
        <h2>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-h4 uppercase leading-tight md:text-h3 lg:text-h2 lg:leading-snug"
          >
            {header}
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-h5 uppercase leading-snug md:text-h4 lg:text-h3 lg:leading-none"
          >
            {subheader}
          </motion.div>
        </h2>
      </div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="lg:pl-4"
      >
        <p className="max-w-2xl font-secondary text-p">{description}</p>
      </motion.div>
    </section>
  );
}

export default HeaderLeftTextRight;
