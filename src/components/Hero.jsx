import React, { useEffect, useState, useRef } from 'react'
import Spline from '@splinetool/react-spline';
import { motion } from 'motion/react';



export default function Hero() {
  const [flag, setFlag] = useState(false);
  const flagRef = useRef(flag); // holds the latest value

  useEffect(() => {
    flagRef.current = flag; // update ref whenever state changes
  }, [flag]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = !flagRef.current;
      setFlag(newValue);
      flagRef.current = newValue; // update ref immediately

    },5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex md:flex-col h-screen bg-eGrey relative'>
      <div className='bg-eGrey w-[100vw] h-[20vh] sm:w-[26vw] sm:h-[20vh] md:w-[21vw] md:h-[20vh] absolute z-40 bottom-0 right-0 rounded-full '></div>
      
      <Spline 
        className='absolute inset-0 w-full h-full object-cover z-10' 
        scene="https://prod.spline.design/FTC2pROX4WVyEOrs/scene.splinecode"
      />
      
      <div className='relative z-10 flex h-full w-full'>
        <div className='w-3/5 h-full flex justify-center items-center'>
          <div className='w-4/6 relative px-8'>
            <div className='relative bg-eGrey h-16'>
            </div>
            <div className=' mb-4 w-4/6 flex flex-col relative'>
            <div className='h-16 relative'>
                <h2 className='text-xl lg:text-5xl absolute left-0 -bottom-2 z-50'>Hello, I'm</h2>
                <motion.h4 className='text-md lg:text-4xl absolute right-0 -bottom-2 z-50'
                
                animate={{
                  opacity: flag ? 1 : 0 
                }}
                transition={{duration: 0.3
                   }}
                >

                  UX / UI designer</motion.h4>
                <motion.h4 className='text-md lg:text-4xl absolute right-0 -bottom-2 z-50'
                
                animate={{
                  opacity: flag ? 0 : 1 
                }}
                transition={{duration: 0.3}}
               >

                  Graphic Designer</motion.h4>
              </div>
              <h1 className='3xl:text-8xl 2xl:text-6xl lg:text-5xl md:text-4xl text-eYellow border-6 text-center !py-2 !px-1 relative'>Eliška Havelková</h1>
            </div>
            <div style={{ direction: 'rtl' }} className='h-full flex  items-center  overflow-y-auto flex-col flex-shrink-0  text-left'>
            <h5 className='lg:text-xl text-sm text-eBlue lg:mb-3'>Jsem <span className='italic'>grafická designérka a UX / UI designérka</span></h5><br />
            <p className='lg:text-xl text-sm text-eBlue font-thin'>
              V současnosti studuji výtvarnou výchovu. Můj přístup k designu spojuje analytické myšlení s kreativním přístupem, což mi umožňuje vytvářet funkční a vizuálně působivé digitální produkty. Jsem komunikativní a flexibilní, ráda pracuji v týmu a podílím se na projektech, které mě posouvají dál. Jsem otevřená novým výzvám a neustálému profesnímu rozvoji.
              <br /><br />
              Ve volném čase ráda hraji počítačové i deskové hry, sportuji s přáteli – momentálně badminton a jumping – a věnuji se svým dvěma ragdoll kočkám. Kromě těchto aktivit i ráda peču, ochutnávám nová jídla nebo prozkoumávám okolí.
            </p>
            </div>
          </div>
        </div>
        
     
        <div className='w-2/5'></div>
      </div>
    </div>
   
  )
}
