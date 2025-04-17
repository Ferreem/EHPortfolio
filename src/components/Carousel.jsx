import React from 'react'
import { useRef } from 'react';
import Header from './Header';

import CarouselItemData from '../data/CarouselItemdata';

export default function Carousel() {
  
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -250,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 250,
      behavior: 'smooth',
    });
  };

  return (
    <div className='w-full h-96 bg-eBlue bg-gradient-to-r from-eYellow flex items-center relative'>
      
      <Header>O mne</Header> 
      <div className='w-full h-2/5 flex overflow-x-auto whitespace-nowrap scrollbar-hide !mx-32 no-scrollbar'>
      {CarouselItemData.map((item, index) =>(
        <img className='!mr-6 rounded-2xl blur-xs' src={item.image} alt="" />
      ))}
      </div>
    </div>
  )
}
