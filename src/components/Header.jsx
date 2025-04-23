import React from 'react'

export default function Header({children, color}) {
  const textStyle = color ? { color } : {};
  const barStyle = color ? { background: color } : {};


  return (
    <div className="flex h-10 w-30 justify-end items-center">   
      <div className='relative w-30'>
        <h1 style={textStyle} className="!mr-2  text-2xl absolute -top-4 right-14">{children}</h1>
        <div style={barStyle} className=" h-1.5 w-14 absolute right-0"></div>
      </div>
    </div>
  )
}
