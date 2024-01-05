import React from "react";
import { motion } from "framer-motion";
import { Highlight } from "@/typings";
import Image from "next/image";
import { urlFor } from "@/utils/sanity/client";
import {
  Modal,
  ModalContent,
  // ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ArrowUpRightIcon from "@/app/icons/ArrowUpRight";

type Props = {
  item: Highlight;
  languageSelected: string;
};

export default function HighlightCard({ item, languageSelected }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const highlightItem = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={highlightItem}
      className="group relative flex min-h-[28rem] w-72 flex-col gap-8 overflow-hidden rounded-2xl bg-tw-light-pink px-10 pb-16 pt-36"
    >
      <Image
        className="absolute left-0 top-0"
        src={urlFor(item.mainImage).width(288).height(448).url()}
        width={288}
        height={448}
        alt={`Image of ${item.title.en}`}
      />
      <div className="absolute -bottom-2 -right-4 h-4/5 w-52 origin-bottom-right -rotate-[60deg]  rounded-t-full bg-gradient-to-b from-tw-primary-pink via-tw-primary-pink/90 to-tw-primary-pink/30 transition-all duration-300 ease-in group-hover:rotate-0 group-hover:scale-[1.8] group-hover:bg-gradient-to-t group-hover:via-tw-primary-pink group-hover:to-tw-primary-pink/90"></div>
      {/* <div className=" absolute top-0 left-0 h-full w-full bg-white opacity-40 " /> */}

      {/* <div className="absolute left-0 top-0 h-full w-full origin-bottom scale-y-0 rounded-t-large bg-gradient-to-br from-tw-primary to-tw-primary/50 transition-all duration-300 group-hover:scale-y-[0.76]" /> */}
      <h3 className="absolute left-6 top-[86%] z-10 line-clamp-2 max-w-36 origin-left text-sh1 leading-6 tracking-tight text-tw-white-off transition duration-150 ease-in group-hover:opacity-0 ">
        {languageSelected === "en" ? item.title.en : item.title.cn}
      </h3>

      <p className=" z-10 line-clamp-7 min-h-[120px] text-left font-secondary text-[1.25rem] text-tw-white-off opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100">
        {languageSelected === "en" ? item.description.en : item.description.cn}
      </p>
      <Button
        onPress={onOpen}
        className="absolute right-8 top-8 min-h-12 min-w-12 rounded-full border-2 border-white bg-white px-0 uppercase text-tw-primary-pink opacity-0 transition-opacity duration-300 ease-in hover:animate-none  hover:bg-transparent hover:text-white group-hover:animate-pulse group-hover:opacity-100"
      >
        <ArrowUpRightIcon />
      </Button>

      <Modal
        // Modal
        classNames={{
          closeButton:
            "m-4 bg-tw-primary-pink hover:bg-white hover:text-tw-primary-pink text-white",
        }}
        className="bg-tw-primary-light"
        isKeyboardDismissDisabled
        backdrop="blur"
        isOpen={isOpen}
        size="xl"
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="pt-8 text-[2.2rem] font-normal">
                {languageSelected === "en"
                  ? item.title.en
                  : item.title.cn || item.title.en}
              </ModalHeader> */}
              <ModalBody className="px-0 pt-0">
                <Image
                  className="max-h-[448px] w-full rounded-xl bg-tw-pink object-contain "
                  width={576}
                  height={448}
                  src={urlFor(item.mainImage).width(576).height(448).url()}
                  alt={`Image of ${
                    languageSelected === "en"
                      ? item.title.en
                      : item.title.cn || item.title.en
                  }`}
                />
                <div className="px-8 py-4">
                  <div className="text-[2.2rem] text-tw-logo">
                    {languageSelected === "en"
                      ? item.title.en
                      : item.title.cn || item.title.en}
                  </div>
                  <p className="max-w-md  pt-4 text-p text-black/80">
                    {languageSelected === "en"
                      ? item.description.en
                      : item.description.cn || item.description.en}
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                {" "}
                <Button
                  color="warning"
                  variant="shadow"
                  onPress={onClose}
                  className="text-white"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </motion.div>
  );
}
