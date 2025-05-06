import React from "react";
import { useRef } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import CarouselItemData, { CarouselLength } from "../data/CarouselItemdata";
import { useState, useEffect, useMemo } from "react";

export default function Carousel() {
  const middle = (CarouselLength * 3) / 2;
  const [clickedImgIndex, setClickedImgIndex] = useState(middle);
  const [imgText, setImgText] = useState("");
  const scrollRef = useRef(null);
  const itemWidth = 256;
  const normalizedIndex = clickedImgIndex % CarouselLength;
  const isFirstRender = useRef(true);
  const isOutOfBounds = clickedImgIndex < CarouselLength || clickedImgIndex >= CarouselLength * 2;
  const isAnimating = useRef(false);
  

  const centerScrollToIndex = (index, behavior = "smooth") => {
    const container = scrollRef.current;
    const containerWidth = container.offsetWidth;
    const centerOffset = itemWidth * index - containerWidth / 2 + itemWidth / 2;
    container.scrollTo({
      left: centerOffset,
      behavior,
    });
  };
  useEffect(() => {
    console.log(!isOutOfBounds);
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isOutOfBounds) {
      const newIndex = (clickedImgIndex % CarouselLength) + CarouselLength;

      centerScrollToIndex(clickedImgIndex); // animate scroll before reset
      const timeout = setTimeout(() => {
        setClickedImgIndex(newIndex);
        centerScrollToIndex(newIndex, "auto"); // instant reset
      }, 450);
      return () => clearTimeout(timeout);
    }

    // In bounds: update text and scroll smoothly
    setImgText(CarouselItemData[normalizedIndex].text);
    centerScrollToIndex(clickedImgIndex);
  }, [clickedImgIndex]);

  const handleClick = (index) => {
    if (isAnimating.current || index === clickedImgIndex) return;
    isAnimating.current = true;
    setClickedImgIndex(index);
    setTimeout(() => {
      isAnimating.current = false;
    }, 400);
  };

  const repeatedData = useMemo(() => {
    return Array(3)
      .fill(0)
      .flatMap((_, i) =>
        CarouselItemData.map((item, index) => ({
          ...item,
          carouselIndex: index + i * CarouselLength,
        }))
      );
  }, []);

  return (
    <div className="w-full h-full bgLinear flex flex-col items-center justify-center relative">
      <div className="absolute right-0 top-5">
        <Header color={"#ffffff"}>Momentky</Header>
      </div>
      <div
        ref={scrollRef}
        className="w-full h-5/9 flex !overflow-x-hidden whitespace-nowrap  no-scrollbar items-center !mb-10"
      >
        {repeatedData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ filter: "blur(3px)", scale: 0.65 }}
            animate={{
              scale: normalizedIndex === index % CarouselLength ? 1.1 : 0.65,
              filter: normalizedIndex === index % CarouselLength ? "blur(0px)" : "blur(3px)",
            }}
            onClick={() => handleClick(index)}
            transition={{ duration: 0.4 }}
            className=" rounded-md overflow-hidden flex-shrink-0 size-64 flex flex-col justify-center "
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover "
            />
          </motion.div>
        ))}
      </div>
      <div className="text-white border-white border-2 rounded-xl text-2xl !p-2 ">
        {imgText}
      </div>
    </div>
  );
}
