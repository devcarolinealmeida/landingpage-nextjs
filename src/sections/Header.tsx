"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [isActive, setActive] = useState(false);
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
            <Image
              src={Logo}
              alt="Saas Logo"
              height={40}
              width={40}
            />
            <nav className="_nav-dsk hidden md:flex items-center gap-6 text-black/60">
              {navItems.map((navItem) => {
                return <Link href={navItem.url}>{navItem.title}</Link>;
              })}
              <button className="btn btn-primary"><span>Get for free</span></button>
            </nav>
            <MenuIcon className="w-5 h-5 md:hidden" onClick={() => setActive(!isActive)}/>
            {isActive && (
              <motion.div className="_nav-mob md:hidden h-dvh bg-purple-800 fixed left-0 right-0 top-[7.5rem] p-8">
                <nav className="flex flex-col items-center gap-4">
                  {navItems.map((navItem) => {
                    return <Link href={navItem.url}>{navItem.title}</Link>;
                  })}
                  <button className="btn btn-primary"><span>Get for free</span></button>
                </nav>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
