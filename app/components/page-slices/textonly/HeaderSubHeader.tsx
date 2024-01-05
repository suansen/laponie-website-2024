import { motion } from "framer-motion";
import React from "react";
import TextSplit from "@/utils/sanity/TextSplit";

type Props = {
  header: string;
  subheader?: string;
  text?: string;
  textAlign: string;
  variant: string;
};

const HeaderSubHeader = ({
  header,
  subheader,
  text,
  textAlign,
  variant,
}: Props) => {
  return (
    <>
      <section
        className={`mx-auto flex max-w-lg flex-col items-center justify-center px-4 py-8 md:px-4 md:py-16 ${
          variant === "full" ? "md:min-h-[calc(100vh-64px)]" : null
        } ${
          textAlign === "left"
            ? "text-left"
            : textAlign === "right"
              ? "text-right"
              : "text-center"
        } md:px-0`}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0, ease: "easeOut" }}
          className="text-h4 uppercase text-tw-black md:pb-4 md:text-h3"
        >
          {header}
        </motion.h2>
        {subheader && (
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className="pb-2 text-sh2 uppercase text-tw-black/70 md:pb-6 md:text-sh1"
          >
            {subheader}
          </motion.h3>
        )}

        {text && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
            className="whitespace-line text-center font-secondary text-p-sm leading-relaxed text-tw-black/80 md:text-p"
          >
            <TextSplit text={text} />
          </motion.div>
        )}
      </section>
    </>
  );
};

export default HeaderSubHeader;
