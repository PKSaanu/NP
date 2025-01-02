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
import "swiper/css";


export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  const CardContent = () => (
    <>
      <Image
        src={product.thumbnail}
        height="600"
        width="650"
        className="object-contain object-left-top absolute h-full w-full inset-0 rounded-md"
        alt={product.title}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
      {product.title}
      </h2>
    </>
  );

  const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 overflow-hidden rounded-md"
    >
      {children}
    </motion.div>
  );

  if (product.link === '#') {
    return (
      <MotionWrapper>
        <div className="w-full h-full">
          <CardContent />
        </div>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper>
      <Link href={product.link} target="_blank" className="block w-full h-full">
        <CardContent />
      </Link>
    </MotionWrapper>
  );
};

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end 80%"],
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 300]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
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
      className="h-[300vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        {/* First Row with horizontal swipe */}
        <motion.div className="flex space-x-20 mb-10 overflow-x-auto no-scrollbar">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Second Row with horizontal swipe */}
        <motion.div className="flex space-x-20 mb-10 overflow-x-auto no-scrollbar">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Third Row with horizontal swipe */}
        <motion.div className="flex space-x-20 mb-10 overflow-x-auto no-scrollbar">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};


export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-purple-700 dark:text-purple-300">
        Academic Excellence and <br /> Research Innovation
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        As a passionate educator and researcher, I aim to inspire students and collaborate with fellow scholars. With a focus on cutting-edge technologies, I strive to contribute to the academic community and share my knowledge through research, teaching, and mentorship.
      </p>
    </div>
  );
};