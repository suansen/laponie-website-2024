import React from "react";
import { motion } from "framer-motion";
import { TeamMember } from "@/typings";
import { urlFor } from "@/utils/sanity/client";
import Link from "next/link";
import Image from "next/image";

type Props = {
  teamMember: TeamMember;
  languageSelected: string;
};

const TeamCard = ({ teamMember, languageSelected }: Props) => {
  return (
    <>
      {teamMember && (
        <Link href="/about-us" className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="group relative flex h-48 w-48 items-center overflow-hidden rounded-lg bg-tw-primary-pink p-4 md:h-80 md:w-52 md:items-end md:rounded-full md:rounded-b-full md:rounded-t-full"
          >
            <Image
              className="transition-scale absolute left-0 top-0 h-full w-full object-cover duration-300 ease-in group-hover:scale-105"
              src={urlFor(teamMember.mainImage).width(210).height(325).url()}
              width={210}
              height={325}
              alt={`Image of a team member in Laponie - ${teamMember.teamMemberName.en}`}
            />
          </motion.div>
          <div className="z-10 max-w-52 py-3 text-center transition-all duration-300 ease-out md:space-y-2 md:py-6">
            <h3 className="text-xl leading-none text-black md:text-sh1">
              {languageSelected === "en"
                ? teamMember?.teamMemberName?.en
                : teamMember?.teamMemberName?.cn ||
                  teamMember?.teamMemberName?.en}
            </h3>
            <div className="font-secondary text-[0.85rem] font-light uppercase text-black opacity-80 md:text-base">
              {languageSelected === "en"
                ? teamMember?.title?.en
                : teamMember?.title?.cn || teamMember?.title?.en}
            </div>
            {teamMember?.description ? (
              <p className=" font-secondary text-[0.7rem] font-light leading-snug text-black/50 opacity-80 md:text-[0.9rem]">
                {languageSelected === "en"
                  ? teamMember?.description?.en
                  : teamMember?.description?.cn || teamMember?.description?.en}
              </p>
            ) : null}
          </div>
        </Link>
      )}
    </>
  );
};

export default TeamCard;
