import React from 'react'
import { workList } from '../data/workList'
import upArrow from '../assets/upArrow.png'
import downArrow from '../assets/downArrow.png'
import pipeLine from '../assets/pipeLine.png'

export default function Work() {
  return (
    <div className='w-full h-screen  flex justify-center items-center'>
      <div className='flex flex-col w-4/5 h-2/3 overflow-y-auto scrollbar-hide'>
        {workList.map((item, index) => (
          <div key={index} className='w-full h-full flex-shrink-0 flex relative'>
            <div className='flex w-5/7  h-full justify-center items-center' >
                 <img src={item.img} className='object-cover ' alt={item.header} />
            </div>
              <div className='w-2/7 bg-white bg-gradient-to-b from-eBlue p-6 flex flex-col items-center'>
                <h3 className='text-2xl font-bold !mt-18 text-white'>{item.header}</h3>
                <p className='!my-2 roboto-550'>{item.year}</p>
                <p className='text-center text-sm w-4/6 funnel-sans-550'>{item.text}</p>
                
                <div className='bg-white flex justify-center items-center w-24 h-8 absolute bottom-8 rounded-xl'>
                  <img className='w-4' src={upArrow} alt="" />
                  <img className=' !mx-1.5 h-6' src={pipeLine} />
                  <img className='w-4' src={downArrow} alt="" />
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}