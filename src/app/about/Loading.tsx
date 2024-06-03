"use client"
import Image from "next/image";
import React from "react";
import LordKrishnaImg from "../../../public/LordKrishna.png";
import MusicTunes from "../../../public/musicNotes.png";
import {easeInOut, motion} from "framer-motion"
const Loading = () => {
  return (
    <div className="flex w-full justify-center ">
      <motion.div
        // initial={{ opacity: 1 }}
        // animate={{ opacity: 0 }}
        // transition={{
        //   duration: 3,
        //   repeat: Infinity,
        //   ease:easeInOut
          
        // }}
        className="absolute left-28 rotate-12 scale-100 ease-in-out animate-accordion-up transition-all repeat-infinite duration-1000"
      >
        <Image src={MusicTunes} width={500} height={5} alt="krishna"></Image>
      </motion.div>
      <div className="relative">
        <Image src={LordKrishnaImg} sizes="fill" alt="krishna"></Image>
      </div>
    </div>
  );
};

export default Loading;
