import React, { useRef, useState } from 'react'
import { workList } from '../data/workList'
import upArrow from '../assets/upArrow.png'
import downArrow from '../assets/downArrow.png'
import pipeLine from '../assets/pipeLine.png'
import { motion } from "framer-motion"
import Header from './Header'

export default function Work() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickUp = () => {
    if (scrollRef.current && currentIndex > 0) {
      const itemHeight = scrollRef.current.getBoundingClientRect().height;
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({
        top: newIndex * itemHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleClickDown = () => {
    if (scrollRef.current && currentIndex < workList.length - 1) {
      const itemHeight = scrollRef.current.getBoundingClientRect().height;
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({
        top: newIndex * itemHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center relative'>
      <div className='absolute top-8 right-0'>
        <Header color={"#051B75"}>Práce</Header>
      </div>

      <div className='flex w-4/5 h-2/3 shadow-eBox rounded-xl relative'>
        {/* Left content or preview section */}
        <div className='flex w-5/7 h-full justify-center items-center'>
          {/* You can add something meaningful here if needed */}
          
        </div>

        {/* Right scrollable section */}
        <div className='w-2/7 eLinear !p-6 flex justify-center relative'>
          {/* Navigation Arrows */}
          <div className='bg-white flex justify-center items-center w-26 h-12 absolute bottom-8 rounded-xl shadow-eButton z-50'>
            <motion.img
              onClick={handleClickUp}
              className='w-4 cursor-pointer'
              initial={{ opacity: 0.5 }}
              animate={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
              src={upArrow}
              alt="up"
            />
            <img className='!mx-2.5 h-6' src={pipeLine} />
            <motion.img
              onClick={handleClickDown}
              className='w-4 cursor-pointer'
              animate={{ opacity: currentIndex === workList.length - 1 ? 0.5 : 1 }}
              src={downArrow}
              alt="down"
            />
          </div>
        </div>

        {/* Scrollable work list */}
        <div ref={scrollRef} className='absolute top-0 left-0 w-full h-full overflow-y-hidden no-scrollbar'>
          <div className='flex flex-col w-full h-full'>
            {workList.map((item, index) => (
              <div key={index} className='flex w-full' style={{ height: '100%' }}>
                <div className='w-5/7 h-full flex'>
                  <img src={item.img} className='object-cover w-full h-full' alt={item.header} />
                </div>
                <div className='w-2/7 !p-6 flex flex-col items-center justify-center'>
                  <h3 className='text-4xl font-bold mt-10 text-white text-center text-shadow-lg'>{item.header}</h3>
                  <p className='!my-2 roboto-550 '>{item.year}</p>
                  <p className='text-center text-xl w-4/6 funnel-sans-550'>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
