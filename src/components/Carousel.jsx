import React from "react";
import { useRef } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import CarouselItemData, {CarouselLength} from "../data/CarouselItemdata";
import { useState, useEffect } from "react";

export default function Carousel() {
  let middle = (CarouselLength * 3) / 2
  let [clickedImgIndex, setClickedImgIndex] = useState(middle);
  const [imgText, setImgText] = useState("");
  const scrollRef = useRef(null);
  const itemWidth = 192;
  const normalizedIndex = clickedImgIndex % CarouselLength;


  useEffect(() => {
    scrollRef.current.scrollLeft = (middle - 4) * itemWidth;
    CarouselItemData.forEach((index) => {

      console.log(`text set for index: ${index} picture`);
      setImgText(CarouselItemData[normalizedIndex].text);
    
  });
    
  },[]);

  useEffect(() => {
    const currentScroll = scrollRef.current;
  
    if (clickedImgIndex < CarouselLength || clickedImgIndex >= CarouselLength * 2) {
      // Store newIndex that we want to jump to
      const newIndex = (clickedImgIndex % CarouselLength) + CarouselLength;
  
      // First: animate scroll to the clicked index normally
      const distance = (clickedImgIndex - 4) * itemWidth;
      currentScroll.scrollTo({
        left: distance,
        behavior: "smooth"
      });
  
      // Then: after animation ends, instantly snap to newIndex
      const timeout = setTimeout(() => {
        setClickedImgIndex(newIndex); // triggers this useEffect again but now in middle section
        currentScroll.scrollTo({
          left: (newIndex - 4) * itemWidth,
          behavior: "auto" // no animation — it's a jump
        });
      }, 500); // delay should match scroll smooth duration
  
      return () => clearTimeout(timeout); // cleanup
    }

    setImgText(CarouselItemData[normalizedIndex].text);
  }, [clickedImgIndex]);

  const handleClick = (index) => {
    let distance = 0;
    distance = index - clickedImgIndex;

    scrollRef.current.scrollBy({
      left: itemWidth * distance,
      behavior: "smooth",
      transition: 1,
    });
    setClickedImgIndex(index);
    console.log(`distance: ${distance}`);
  };

  return (
    <div className="w-full h-96 bg-eBlue bg-gradient-to-r from-eYellow flex flex-col items-center justify-center relative">
      <div className="absolute right-0 top-5">
        <Header>O mne</Header>
      </div>
      <div
        ref={scrollRef}
        className="w-full h-5/9 flex overflow-x-auto whitespace-nowrap scrollbar-hide !mx-24 no-scrollbar items-center !mb-10"
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
