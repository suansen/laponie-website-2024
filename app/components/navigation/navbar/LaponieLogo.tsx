import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

function LaponieLogo() {
  const logo = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  return (
    <motion.div variants={logo}>
      <Link
        href="/"
        className=" uppercase text-tw-logo text-logo font-laponie hover:opacity-70"
      >
        Laponie
      </Link>
    </motion.div>
  )
}

export default LaponieLogo
