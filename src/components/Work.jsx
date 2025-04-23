import React from 'react'
import { workList } from '../data/workList'
import upArrow from '../assets/upArrow.png'
import downArrow from '../assets/downArrow.png'
import pipeLine from '../assets/pipeLine.png'
import { useRef, useState } from 'react'
import { motion } from "framer-motion"
import Header from './Header'

export default function Work() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickUp = () => {
    if (scrollRef.current && currentIndex > 0) {
      const height = scrollRef.current.getBoundingClientRect().height;
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({
        top: newIndex * height ,
        behavior: 'smooth',
      });
    }
  };

  const handleClickDown = () => {
    if (scrollRef.current && currentIndex < workList.length - 1) {
      const height = scrollRef.current.getBoundingClientRect().height;
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({
        top: newIndex * height,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='w-full h-screen  flex justify-center items-center relative'>
      <div className='absolute top-8 right-0'>
        <Header color={"#051B75"}>Práce</Header>
      </div>
      <div className='flex w-4/5 h-2/3 !overflow-y-auto no-scrollbar shadow-eBox rounded-xl relative'>
      <div className='flex w-5/7  h-full'>
      </div>
      <div className='w-2/7 eLinear p-6 flex justify-center'>
      <div className='bg-white flex justify-center items-center w-26 h-12 absolute bottom-8 rounded-xl shadow-eButton z-50'>
          <motion.img onClick={handleClickUp} 
          className='w-4 cursor-pointer'
          initial={{opacity: 0.5}}
          animate={{
            opacity: currentIndex === 0 ? 0.5 : 1
          }} 
          src={upArrow} alt="up" />
          <img className=' !mx-2.5 h-6' src={pipeLine} />
          <motion.img onClick={handleClickDown} 
          className='w-4 cursor-pointer'
          animate={{
            opacity: currentIndex === workList.length - 1 ? 0.5 : 1
          }}  
          src={downArrow} alt="down" />
        </div>
      </div>
      <div ref={scrollRef} className='flex flex-col w-full h-full !overflow-y-hidden no-scrollbar absolute flex-shrink-0'>
      {workList.map((item, index) => (
        <div key={index} className='flex h-full w-full flex-shrink-0'>
          <div className='w-5/7 h-full'>
            <div className=' min-w-full min-h-full flex justify-center items-center'>
              <img src={item.img} className='object-cover ' alt={item.header} />  
            </div>
          </div>
          <div className='w-2/7 !p-6 flex flex-col items-center'>
          <h3 className='text-4xl font-bold !mt-20 text-white text-center text-shadow-lg'>{item.header}</h3>
        <p className='!my-2 roboto-550 '>{item.year}</p>
        <p className='text-center text-xl w-4/6 funnel-sans-550'>{item.text}</p>
          </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
