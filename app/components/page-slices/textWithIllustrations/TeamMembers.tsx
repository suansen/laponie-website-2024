import React from "react"
import { TeamMember } from "@/typings"
import { motion } from "framer-motion"
import TeamCard from "./TeamCard"

type Props = {
  header: string
  subheader: string
  teamMembers: TeamMember[]
  languageSelected: string
}

const TeamMembers = ({
  header,
  subheader,
  teamMembers,
  languageSelected
}: Props) => {
  const teams = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        bounce: 0
      }
    }
  }
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16">
      <div className=" space-y-2 pb-4 md:pb-8">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 100, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className=" uppercase text-h5 md:text-h3 text-tw-black max-w-lg text-center leading-tight md:min-w-[512px]"
        >
          {header}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 100, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className=" text-p md:text-sh1 text-tw-black/80 max-w-lg text-center md:min-w-[512px]"
        >
          {subheader}
        </motion.p>
      </div>

      <motion.div
        variants={teams}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="grid grid-cols-1 gap-y-8 gap-x-4 lg:flex-grow md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
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
  )
}

export default TeamMembers
