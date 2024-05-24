"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ContentBirthdayThree from "./ContentBirthdayThree";
import { userContent } from "@/lib/constant";

const MAX_CANDLE_COUNT = 5;
const containerVariants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    }
  }
};

const ContentBirthday = () => {

  const [candleCount, setCandleCount] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);

  const handleBlowCandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    target.classList.add("opacity-0");

    if (candleCount === MAX_CANDLE_COUNT - 1) setShowContent(true);
    setCandleCount(candleCount + 1);
  };

  return (
    <>
      {!showContent ? (
        <>
          <h1>Thổi {userContent.AGE} cây nến thì mệt quá, thôi thổi tạm {MAX_CANDLE_COUNT} cây thôi nhé! 🤣🎉</h1>
          <motion.div
            variants={containerVariants}
            animate="visible"
            initial="hidden"
            className="w-fit mx-auto flex items-center justify-center mt-3"
          >
            {(() => {
              const content = [];
              for (let i = 0; i < MAX_CANDLE_COUNT; i++) {
                content.push(
                  <Image src="/images/candle.png" alt="Candle" priority width={50} height={100} key={i} className={`trasition-all duration-300`} onClick={(e) => handleBlowCandle(e)} />
                );
              }
              return content;
            })()}
          </motion.div>
        </>
      ) : (
        <ContentBirthdayThree />
      )}
    </>
  )
}

export default ContentBirthday