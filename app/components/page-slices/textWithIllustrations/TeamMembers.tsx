import React from "react";
import { TeamMember } from "@/typings";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

type Props = {
  header: string;
  subheader: string;
  teamMembers: TeamMember[];
  languageSelected: string;
};

const TeamMembers = ({
  header,
  subheader,
  teamMembers,
  languageSelected,
}: Props) => {
  const teams = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        bounce: 0,
      },
    },
  };
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16">
      <div className=" space-y-2 pb-4 md:pb-8">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 100, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className=" max-w-lg text-center text-h5 uppercase leading-tight text-tw-black md:min-w-[512px] md:text-h3"
        >
          {header}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 100, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className=" max-w-lg text-center text-p text-tw-black/80 md:min-w-[512px] md:text-sh1"
        >
          {subheader}
        </motion.p>
      </div>

      <motion.div
        variants={teams}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:flex-grow lg:grid-cols-3 xl:grid-cols-4 "
      >
        {teamMembers.map((teamMember, i) => (
          <TeamCard
            key={i}
            teamMember={teamMember}
            languageSelected={languageSelected}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default TeamMembers;
