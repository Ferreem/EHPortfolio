import { div } from 'motion/react-client'
import React from 'react'

export default function Header({children}) {
  return (
    <div className='absolute'>
      <div className='relative w-30'>
        <h1 className="!mr-2 text-white text-2xl absolute -top-4 right-14">{children}</h1>
        <div className="bg-white h-1.5 w-14 absolute right-0"></div>
      </div>
    </div>
  )
}
