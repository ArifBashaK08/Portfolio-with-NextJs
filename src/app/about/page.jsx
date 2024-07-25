"use client"
import { motion, useInView, useScroll } from "framer-motion"
import { skills, experience } from "../data/page"
import MyBrain from "@/components/MyBrain"
import { useRef } from "react"
import { objective } from "../data/page"
import Image from "next/image"

const About = () => {

  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ container: containerRef })

  const skillRef = useRef()
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" })

  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" })

  return <motion.div className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: 0 }}
    transition={{ duration: 1 }}
  >

    {/* CONTAINER */}
    <div className="h-full overflow-x-hidden overflow-y-scroll lg:flex" ref={containerRef}>
      {/* TEXT CONTAINER */}
      <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
        {/* BIOGRAPHY */}
        <div className="flex flex-col gap-12 justify-center">
          {/* TITLE */}
          <h1 className="font-semibold text-2xl">ABOUT</h1>
          {/* DESCRIPTION */}
          <p className="">{objective}
          </p>
          {/* SIGNATURE */}
            <Image src="/Sign.png" alt="Signature" className="w-1/4 self-end" width={500} height={250}/>
          {/* SCROLL SVG */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{
              repeat: Infinity,
              duration: 2, ease: "easeInOut"
            }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path
              d="M15 11L12 14L9 11"
              stroke="#000000"
              strokeWidth="1"
            ></path>
          </motion.svg>
        </div>
        {/* SKILLS */}
        <div className="flex flex-col gap-12 justify-center" ref={skillRef} >
          {/* SKILLS TITLE */}
          <motion.h1 className="font-semibold text-2xl"
            initial={{ x: "-300px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            transition={{ delay: .2 }}>SKILLS</motion.h1>
          {/* SKILLS LIST */}
          <motion.div className="flex gap-4 flex-wrap"
            initial={{ x: "-300px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            transition={{ delay: .2 }}>
            {
              skills.map(({ id, icon, skill }) => (
                <div className="rounded p-2 text-sm bg-black text-white hover:bg-white
                   hover:text-black flex items-center gap-2" key={id}>
                  <span className="">{icon}</span>{skill}</div>
              ))
            }
          </motion.div>
          {/* SCROLL SVG */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{
              repeat: Infinity,
              duration: 3, ease: "easeInOut"
            }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path
              d="M15 11L12 14L9 11"
              stroke="#000000"
              strokeWidth="1"
            ></path>
          </motion.svg>
        </div>
        {/* EXPERIENCE */}
        <div className="flex flex-col justify-center gap-12"
          ref={experienceRef}>
          {/* EXPERIENCE TITLE */}
          <motion.h1 className="font-semibold text-2xl"
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: 0 } : {}}
            transition={{ delay: .2 }}>EXPERIENCE</motion.h1>
          <motion.div className=""
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: 0 } : {}}
            transition={{ delay: .2 }}>
            {/* EXPERIENCE LIST */}
            {
              experience.map(({ id, company, role, desc, period }) => (
                <>
                  <div className={`flex justify-between h-48 ${id % 2 === 0 ? "flex-row-reverse" : "flex-row"}`} key={id}>
                    {/* LEFT */}
                    <div className="w-2/5">
                      {/* JOB TITLE */}
                      <h1 className="font-semibold text-sm bg-white rounded-b-lg rounded-s-lg p-3">{role}</h1>
                      {/* JOB Desc */}
                      <p className="text-xs p-3 italic">{desc}</p>
                      {/* JOB Company */}
                      <p className="p-3 rounded bg-white text-sm font-semibold w-fit">{company}</p>
                      {/* JOB Period */}
                      <p className="text-sm p-3 text-red-400 font-semibold">{period}</p>
                    </div>
                    {/* CENTER */}
                    <div className="w-1/5 flex justify-center">
                      {/* LINE */}
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        {/* CIRCLE */}
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-2/5"></div>
                  </div>
                </>
              ))
            }
          </motion.div>
        </div>
      </div>
      {/* SVG CONTAINER */}
      <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
        <MyBrain scrollYProgress={scrollYProgress} />
      </div>
    </div>

  </motion.div>

}
export default About