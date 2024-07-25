"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { projects } from "../data/page"
import Link from "next/link"
import Image from "next/image"

const Portfolio = () => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({ traget: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["0", "-65%"])
  return <motion.div className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="h-[600vh] relative"
      ref={ref}>
      <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl">My Works</div>
      <div className="sticky top-0 flex h-screen items-center gap-4 overflow-hidden">
        <motion.div className="flex"
          style={{ x }}>
          <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
          {
            projects.map(({ id, title, image, desc, link, color }) => (
              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${color}`} key={id}>
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-lg font-bold md:text-4xl lg:text-6xl xl:text-8xl text-center">{title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] flex justify-center">
                    <Image src={image} alt={title} className="object-cover" width={400} height={100}/>
                  </div>
                  <p className="w-80 md:w-96  lg:w-[500px] xl:w-[600px] lg:text-lg text-justify">{desc}</p>
                  <Link href={link}
                  className="flex justify-center">
                    <button className="px-2 py-1 text-sm md:px-6 md:py-3 md:text-md lg:px-8 lg:py-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded-lg">Visit</button></Link>
                </div>
              </div>
            ))
          }
          <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
        </motion.div>

      </div>
    </div>
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-16 text-center">
      <h1 className="font-medium text-5xl lg:text-6xl xl:text-8xl">Do you have project?</h1>
      <div className="relative">
        <motion.svg viewBox="0 0 300 300"
          className="w-64 h-64 md:w-[400px] md:h-[400px]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity
          }}>
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <text fill="#000">
            <textPath xlinkHref="#circlePath" className="text-xl">Front-end Developer and UI Designer</textPath>
          </text>
        </motion.svg>
        <Link href={"/contact"} className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex justify-center items-center">Contact me</Link>
      </div>
    </div>
  </motion.div>

}
export default Portfolio