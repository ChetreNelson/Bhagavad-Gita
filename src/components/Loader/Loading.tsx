"use client";
import Image from "next/image";
import React from "react";
import LordKrishnaImg from "../../../public/LordKrishna.png";
import { motion } from "framer-motion";
import Notes from "../atoms/Notes";

const notes = [
  { fill: "#0eb567", width: 8, top: "58%", left: "44%" },
  { fill: "#0c8891", width: 10, top: "55%", left: "40%" },
  { fill: "#16527a", width: 20, top: "51%", left: "37%" },
  { fill: "#0c1291", width: 30, top: "51.5%", left: "28%" },
  { fill: "#510eb5", width: 40, top: "52%", left: "20%" },
  { fill: "#7e0eb5", width: 45, top: "50%", left: "10%" },
  { fill: "#b50eb2", width: 50, top: "42%", left: "5%" },
  { fill: "#b50e75", width: 55, top: "30%", left: "0%" },
];

const noteVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: [0, 1, 1, 0],
    y: [20, 0, 0, -20],
    transition: {
      delay: i * 0.5,
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: notes.length * 0.5,
    },
  }),
};

const Loader = () => {
  return (
    <div className="flex w-full justify-around relative">
      {/* Container for the image and notes */}
      <div className="relative pl-60">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              top: note.top,
              left: note.left,
              transform: "rotate(12deg)",
            }}
            custom={index}
            variants={noteVariants}
            initial="initial"
            animate="animate"
          >
            <Notes fill={note.fill} width={`${note.width}`} />
          </motion.div>
        ))}
        {/* Image */}
        <motion.div className="relative">
          <Image src={LordKrishnaImg} sizes="fill" alt="krishna" />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
