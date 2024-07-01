"use client"

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
            <div className="h-full w-full flex flex-col gap-5 jsutify-center m-auto text-start">
                <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#6034e58b] opacity-[0.7]">
                    <SparklesIcon className="text-[#9b82e7] mr-[10px] w-5 h-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Fullstack Developer Portfolio
                    </h1>
                </motion.div>

                <motion.div
                variants={slideInFromLeft(0.5)}
                className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
                    <span>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-400">
                            {" "}
                            best{" "}
                        </span>
                        project experience
                    </span>
                </motion.div>

                <motion.p
                variants={slideInFromLeft(0.7)}
                className="text-lg text-gray-700 my-5 max-w-[600px]">
                    A Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
                </motion.p>
                <motion.a
                variants={slideInFromLeft(1)}
                className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
                    Learn More!
                </motion.a>
            </div>

            <motion.div 
            variants={slideInFromRight(0.9)}
            className="w-full h-full flex justify-center items-center">
                <Image
                src="/mainIconsdark.svg"
                alt="Work icons"
                width={650}
                height={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;