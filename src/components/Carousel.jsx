import React from "react";
import { useRef } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import CarouselItemData, {CarouselLength} from "../data/CarouselItemdata";
import { useState, useEffect } from "react";

export default function Carousel() {
  const middle = (CarouselLength * 3) / 2;
  const [clickedImgIndex, setClickedImgIndex] = useState(middle);
  const [imgText, setImgText] = useState("");
  const scrollRef = useRef(null);
  const itemWidth = 192;
  const normalizedIndex = clickedImgIndex % CarouselLength;

  const centerScrollToIndex = (index, behavior = "smooth") => {
    const container = scrollRef.current;
    const containerWidth = container.offsetWidth;
    const centerOffset = (itemWidth * index) - (containerWidth / 2) + (itemWidth / 2);

    container.scrollTo({
      left: centerOffset,
      behavior,
    });
  };

  useEffect(() => {
    centerScrollToIndex(middle, "auto");
    setImgText(CarouselItemData[normalizedIndex].text);
  }, []);

  useEffect(() => {
    const currentScroll = scrollRef.current;

    if (clickedImgIndex < CarouselLength || clickedImgIndex >= CarouselLength * 2) {
      const newIndex = (clickedImgIndex % CarouselLength) + CarouselLength;

      centerScrollToIndex(clickedImgIndex);

      const timeout = setTimeout(() => {
        setClickedImgIndex(newIndex);
        centerScrollToIndex(newIndex, "auto");
      }, 500);

      return () => clearTimeout(timeout);
    }

    setImgText(CarouselItemData[normalizedIndex].text);
    centerScrollToIndex(clickedImgIndex);
  }, [clickedImgIndex]);

  const handleClick = (index) => {
    setClickedImgIndex(index);
  };

  return (
    <div className="w-full h-96 bg-eBlue bg-gradient-to-r from-eYellow flex flex-col items-center justify-center relative">
      <div className="absolute right-0 top-5">
        <Header>O mne</Header>
      </div>
      <div
        ref={scrollRef}
        className="w-full h-5/9 flex !overflow-x-hidden whitespace-nowrap !mx-24 no-scrollbar items-center !mb-10"
      >
        {CarouselItemData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ filter: "blur(3px)", scale: 0.65 }}
            animate={{
              scale: clickedImgIndex === index ? 1.1 : 0.65,
              filter: clickedImgIndex === index ? "blur(0px)" : "blur(3px)",
            }}
            onClick={() => handleClick(index)}
            transition={{ duration: 0.1 }}
            className=" rounded-md overflow-hidden flex-shrink-0 h-48 w-48 flex flex-col justify-center "
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover "
            />
          </motion.div>
        ))}
        {CarouselItemData.map((item, index) => (
          <motion.div
            key={index + CarouselLength}
            initial={{ filter: "blur(3px)", scale: 0.65 }}
            animate={{
              scale: clickedImgIndex === index + CarouselLength ? 1.1 : 0.65,
              filter: clickedImgIndex === index + CarouselLength ? "blur(0px)" : "blur(3px)",
            }}
            onClick={() => handleClick(index + CarouselLength)}
            transition={{ duration: 0.5 }}
            className=" rounded-md overflow-hidden flex-shrink-0 h-48 w-48 flex flex-col justify-center "
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover "
            />
          </motion.div>
        ))}
        {CarouselItemData.map((item, index) => (
          <motion.div
            key={index + (CarouselLength * 2)}
            initial={{ filter: "blur(3px)", scale: 0.65 }}
            animate={{
              scale: clickedImgIndex === index + (CarouselLength * 2) ? 1.1 : 0.65,
              filter: clickedImgIndex === index + (CarouselLength * 2) ? "blur(0px)" : "blur(3px)",
            }}
            onClick={() => handleClick(index + CarouselLength * 2)}
            transition={{ duration: 0.5 }}
            className=" rounded-md overflow-hidden flex-shrink-0 h-48 w-48 flex flex-col justify-center"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="text-white border-white border-2 rounded-xl  !p-2 ">
        {imgText}
      </div>
    </div>
  );
}
