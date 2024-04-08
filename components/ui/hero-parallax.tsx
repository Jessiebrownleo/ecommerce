"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/definition";
import { useRouter } from "next/navigation";
import CardProduct from "@/components/card/CardProduct";
export const HeroParallax = ({
  products,
}: {
  products: Product[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const router = useRouter();

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[230vh] py-40  overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product,index) => (
            <CardProduct
            onClick={() => router.push(`/product/${product.id}`)}
            key={index}
            seller={product.seller}
            image={product.image}
            name={product.name}
            price={product.price}
          />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
        {secondRow.map((product,index) => (
            <CardProduct
            onClick={() => router.push(`/product/${product.id}`)}
            key={index}
            seller={product.seller}
            image={product.image}
            name={product.name}
            price={product.price}
          />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
        {thirdRow.map((product,index) => (
            <CardProduct
            onClick={() => router.push(`/product/${product.id}`)}
            key={index}
            seller={product.seller}
            image={product.image}
            name={product.name}
            price={product.price}
          />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        There Are Some Prodcuts That Available
      </h1>
    </div>
  );
};


