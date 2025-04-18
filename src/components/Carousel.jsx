import React from 'react'
import { useRef } from 'react';
import Header from './Header';
import { motion } from "framer-motion"; 
import CarouselItemData from '../data/CarouselItemdata';
import { useState, useEffect } from 'react';

export default function Carousel() {
  let [clickedImgIndex, setClickedImgIndex] = useState(4);
  const [imgText, setImgText] = useState("")
  const scrollRef = useRef(null);

  const handleClick = (item, index) => {
    console.log(`was: ${clickedImgIndex} now: ${index}`)
    let distance = 0;
    console.log(`index: ${index}`)
    const itemWidth = 192;
    distance = index - clickedImgIndex;
  
    scrollRef.current.scrollBy({
      left: itemWidth * distance,
      behavior: 'smooth',
      transition: 2,
    });
    // I want to set scale to 1 to item
    setClickedImgIndex(index);
    console.log(`distance: ${distance}`);
  };

  useEffect(() =>{
    CarouselItemData.forEach((item, index) => {
      if(clickedImgIndex === index){
        console.log(`Uve clicked ${index} picture`);
        setImgText(item.text);
      }
    })
  },[clickedImgIndex])

  return (
    <div className='w-full h-96 bg-eBlue bg-gradient-to-r from-eYellow flex flex-col items-center justify-center relative'>
      <div className='absolute right-0 top-5'>
        <Header>O mne</Header> 
      </div>
      <div ref={scrollRef} className='w-full h-5/9 flex overflow-x-auto whitespace-nowrap scrollbar-hide !mx-24 no-scrollbar items-center'>
      {CarouselItemData.map((item, index) => (
          
          <motion.div
            key={index}
            initial={{ filter: 'blur(3px)', scale: 0.65, }}
            animate={{ 
              scale: clickedImgIndex === index ? 1 : 0.65,
              filter: clickedImgIndex === index ? 'blur(0px)' : 'blur(3px)'
              
            }}
            onClick={() => handleClick(item, index)}
            transition={{ duration: 1 }}
            className=" rounded-md overflow-hidden flex-shrink-0 h-48 w-48 flex flex-col justify-center "
          >
          <img 
            src={item.image} 
            alt="" 
            className='w-full h-full object-cover'
          />
          </motion.div>
          
        ))}
      </div>
      <div className='text-white border-white border-2 rounded-xl !mt-2 !p-2 '>{imgText}</div>

    </div>
  )
}
