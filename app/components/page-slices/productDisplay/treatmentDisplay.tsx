import { Treatment } from "@/typings";
import React from "react";
import { motion } from "framer-motion";
import TreatmentCardVar2 from "./treatmentCardVar2";

type Props = {
  treatments: Treatment[];
  params?: { brandId: string; productId?: string; treatmentId?: string };
  heading?: string;
  subheading?: string;
  languageSelected: string;
};

const TreatmentDisplay = ({
  treatments,
  params,
  heading,
  subheading,
  languageSelected,
}: Props) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 lg:px-8">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0, ease: "easeOut" }}
          className="text-h4 uppercase text-tw-black md:pb-4 md:text-h3"
        >
          {heading}
        </motion.h2>
        {subheading && (
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className="pb-2 text-sh2 uppercase text-tw-black/70 md:pb-6 md:text-sh1"
          >
            {subheading}
          </motion.h3>
        )}
      </div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className=" mx-auto grid grid-cols-3 gap-4"
      >
        {treatments.map((treatment, index) => (
          <TreatmentCardVar2
            languageSelected={languageSelected}
            key={index}
            treatment={treatment}
            link={`/brands/${params?.brandId}/treatments/${treatment.slug.current}`}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default TreatmentDisplay;
