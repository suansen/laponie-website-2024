import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

type Props = {
  header: string;
  subheader: string;
  form: string;
  languageSelected: string;
};

const Form = ({ header, subheader, form, languageSelected }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="w-full max-w-[620px] px-4 "
    >
      <div className=" w-full text-center">
        {header && (
          <h2 className=" pb-2 text-h4 uppercase leading-tight text-tw-text-black">
            {header}
          </h2>
        )}

        {subheader && (
          <p className="pb-4 text-sh1 uppercase  leading-tight text-tw-black/70">
            {subheader}
          </p>
        )}
      </div>
      <div>
        {form === "contact" ? (
          <ContactForm languageSelected={languageSelected} />
        ) : null}
      </div>
    </motion.section>
  );
};

export default Form;
