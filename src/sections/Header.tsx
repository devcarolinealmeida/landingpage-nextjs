"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import { transform } from "next/dist/build/swc";
import { exit } from "process";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1
      },
    },
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1
      },
    },
  };
  const mobileLinkVariants = {
    initial: {
      y: "-30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    animate: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        dutation: 0.7,
      },
    },
  };
  const navItems = [
    { url: "#", title: "About" },
    { url: "#", title: "Features" },
    { url: "#", title: "Customers" },
    { url: "#", title: "Updates" },
    { url: "#", title: "Help" },
  ];
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center gap-3 bg-black text-white py-3 text-sm">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <nav className="_nav-dsk hidden md:flex items-center gap-6 text-black/60">
              {navItems.map((navItem) => {
                return <Link href={navItem.url}>{navItem.title}</Link>;
              })}
              <button className="btn btn-primary">
                <span>Get for free</span>
              </button>
            </nav>
            <MenuIcon className="w-5 h-5 md:hidden" onClick={toggleMenu} />
            <AnimatePresence>
              {open && (
                <motion.div
                  className="_nav-mob md:hidden h-dvh bg-[#183EC2] fixed left-0 right-0 top-[7.5rem] p-8 origin-top"
                  variants={menuVars}
                  initial="initial"
                  animate="animate"
                  exit="exit">
                  <motion.nav
                    variants={containerVars}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    className="flex flex-col items-center gap-6 text-white">
                    {navItems.map((navItem) => {
                      return (
                        <div className="overflow-hidden">
                          <motion.div
                            className="inline-flex"
                            variants={mobileLinkVariants}>
                            <Link href={navItem.url}>{navItem.title}</Link>
                          </motion.div>
                        </div>
                      );
                    })}
                    <div className="overflow-hidden">
                      <motion.button
                        className="btn btn-primary"
                        variants={mobileLinkVariants}>
                        <span>Get for free</span>
                      </motion.button>
                    </div>
                  </motion.nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};
