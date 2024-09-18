"use client";
import productImage from "@/assets/product-image.png";
import piramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [250, -250]);
  return (
    <section
      ref={sectionRef}
      className="bg-grafient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} className="mt-10" alt="Product Image" />
          <motion.img
            style={{
              translateY: translateY,
            }}
            src={piramidImage.src}
            height={262}
            width={262}
            className="absolute hidden md:block -right-36 -top-32"
            alt="Piramid Image"
          />
          <motion.img
            style={{
              translateY: translateY,
            }}
            src={tubeImage.src}
            height={248}
            width={248}
            className="absolute hidden md:block bottom-24 -left-36"
            alt="Tube Image"
          />
        </div>
      </div>
    </section>
  );
};
