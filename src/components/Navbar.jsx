"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { gitHub, linkedIn } from "@/app/data";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const topVariants = {
    closed: { rotate: 0, backgroundColor: "rgb(0,0,0)" },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" }
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 }
  };

  const lastVariants = {
    closed: { rotate: 0, backgroundColor: "rgb(0,0,0)" },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" }
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: { x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
     }
  }
  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 }
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">

      {/* MENU for mid and larger devices */}
      <div className="hidden md:flex gap-4 w-1/3 px-4 py-2">
        {links.map(({ url, title }) => (
          <Link key={url} className={`rounded py-1 px-3 ${pathName === url && "bg-black text-white"}`} href={url}>{title}</Link>
        ))}
      </div>

      {/* LOGO */}
      <div className="lg:flex md:hidden flex gap-4 w-1/2 md:w-1/3 lg:justify-center text-xs">
        <Link href={"/"} className="text-sm bg-black rounded-lg font-semibold p-2 flex gap-2">
          <span className="text-white py-1">Arif</span>
          <span className="bg-white text-black px-2 py-1 rounded-md">Basha K.</span>
        </Link>
      </div>

      {/* SOCIAL MEDIA LINKS */}
      <div className="hidden md:flex justify-end gap-10 w-1/3 px-4 py-2">
        <Link href={gitHub}>
          <img src="/github.png" alt="GitHub" width={25} />
        </Link>
        <Link href={linkedIn}>
          <img src="/linkedin.png" alt="LinkedIn" width={25} />
        </Link>
        <Link href={"/"}>
          <img src="/instagram.png" alt="Instagram" width={25} />
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen(prev => !prev)}>
          <motion.div className="w-10 h-1 bg-black rounded origin-left"
            variants={topVariants}
            animate={open ? "opened" : "closed"} />
          <motion.div className="w-10 h-1 bg-black rounded"
            variants={centerVariants}
            animate={open ? "opened" : "closed"} />
          <motion.div className="w-10 h-1 bg-black rounded origin-left"
            variants={lastVariants}
            animate={open ? "opened" : "closed"} />
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-xl z-40"
            variants={listVariants}
            initial="closed"
            animate="opened">
            {links.map(({ url, title }) => (
              <motion.div className="" key={url} variants={listItemVariants}>
                <Link className={`rounded p-1 ${pathName === url && "bg-black text-white"}`} href={url}>{title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
