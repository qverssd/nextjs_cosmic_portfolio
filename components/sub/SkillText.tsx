"use client"

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#4d2ab48b] opacity-[0.9]">
                <SparklesIcon className="text-[#b49ff] mr-[10px] w-5 h-5" />
                <h1 className="Welcome-text text-[15px]">
                Think better with Nextjs 13
                </h1>
            </motion.div>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
                Creating apps using modern technologies
            </motion.div>
            <motion.div
            variants={slideInFromRight(0.7)}
            className="cursive text-[20px] text-center text-gray-200 mb-10 mt-[10px]">
                Nothing ever missed
            </motion.div>
        </div>
    );
};

export default SkillText;