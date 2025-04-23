import React from 'react'
import { workList } from '../data/workList'
import upArrow from '../assets/upArrow.png'
import downArrow from '../assets/downArrow.png'
import pipeLine from '../assets/pipeLine.png'
import { useRef } from 'react'

export default function Work() {
  const scrollRef = useRef(null);
  let distance = 0

  const handleClickUp = (index) => {
    if (scrollRef.current) {
      const containerHeight = scrollRef.current.clientHeight;
      const distance = (index - 1) * containerHeight;
  
      scrollRef.current.scrollTo({
        top: distance,
        behavior: "smooth",
      });
    }
  };
  
  const handleClickDown = (index) => {
    if (scrollRef.current) {
      const containerHeight = scrollRef.current.clientHeight;
      const distance = (index + 1) * containerHeight;
  
      scrollRef.current.scrollTo({
        top: distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='w-full h-screen  flex justify-center items-center'>
      <div ref={scrollRef} className='flex flex-col w-4/5 h-2/3 overflow-y-auto  no-scrollbar shadow-eBox rounded-xl'>
        {workList.map((item, index) => (
          <div key={index} className='w-full h-full flex-shrink-0 flex relative '>
            <div className='flex w-5/7  h-full justify-center items-center' >
                 <img src={item.img} className='object-cover ' alt={item.header} />
            </div>
              <div className='w-2/7 eLinear p-6 flex flex-col items-center'>
                <h3 className='text-4xl font-bold !mt-40 text-white text-center text-shadow-lg'>{item.header}</h3>
                <p className='!my-2 roboto-550 '>{item.year}</p>
                <p className='text-center text-xl w-4/6 funnel-sans-550'>{item.text}</p>
                
                <div className='bg-white flex justify-center items-center w-26 h-9 absolute bottom-8 rounded-xl shadow-eButton'>
                  <img onClick={() => handleClickUp(index)} 
                  className='w-4' 
                  src={upArrow} alt="up" />
                  <img className=' !mx-2.5 h-6' src={pipeLine} />
                  <img onClick={() => handleClickDown(index)} className='w-4' src={downArrow} alt="" />
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}