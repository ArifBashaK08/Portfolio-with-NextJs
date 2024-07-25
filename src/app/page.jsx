"use client"

import Image from "next/image";
import { name, objective } from "./data/page";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";


const Homepage = () => {
  return <motion.div className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:48 items-center">
      {/* IMAGE CONTAINER */}
      <div className="w-full h-1/2 lg:h-3/4 lg:w-1/2 relative lg:flex items-center">
        <Image src={"/hero.png"} alt="" fill className="object-contain w-full" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-3/4 lg:w-1/2 flex flex-col justify-center items-center gap-8">
        {/* TITLE */}
        <h1 className="w-full text-3xl md:text-5xl font-bold lg:text-start">
          Hello there! I&apos;m &nbsp;<strong className="text-4xl md:text-6xl">{name}</strong>
        </h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">{objective}</p>
        <div className="flex justify-evenly w-full">
          <Link href={"/portfolio"} className="font-semibold text-sm bg-black text-white px-5 py-3 rounded-md">View My Works</Link>
          <a href={"/ArifBashaK.pdf"} download className="font-semibold text-sm border border-black px-5 py-3 rounded-md hover:bg-black hover:text-white flex items-center gap-2"><FaDownload size={20} /> My Resume</a>
        </div>
      </div>
    </div>
  </motion.div>
};

export default Homepage;
