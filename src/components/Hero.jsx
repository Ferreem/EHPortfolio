import React from 'react'
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className='flex h-11/12 bg-eGrey'>
      <div className='bg-eGrey w-64 h-24 absolute z-40 bottom-0 right-0'></div>
      
      {/* Spline as background - positioned absolute to fill the container */}
      <Spline 
        className='absolute inset-0 w-full h-full object-cover z-10' 
        scene="https://prod.spline.design/FTC2pROX4WVyEOrs/scene.splinecode"
      />
      
      {/* Content overlay */}
      <div className='relative z-10 flex h-full w-full'>
        <div className='w-3/5 flex justify-center items-center flex-col'>
          <div className='w-4/6 relative px-8'>
            <div className='relative'>
              <h2 className='text-7xl'>Hello, I'm</h2>
              <h4 className='text-4xl absolute right-32 top-6'>UX / UI designer</h4>
            </div>
            <h1 className='text-8xl text-eYellow border-6 flex justify-center py-6 mb-20 w-5/6'>Eliška Havelková</h1>
            <h5 className='text-xl text-eBlue mb-3'>Jsem <span className='italic'>grafická designérka a UX / UI designérka</span></h5>
            <p className='text-xl text-eBlue font-thin'>
              V současnosti studuji výtvarnou výchovu. Můj přístup k designu spojuje analytické myšlení s kreativním přístupem, což mi umožňuje vytvářet funkční a vizuálně působivé digitální produkty. Jsem komunikativní a flexibilní, ráda pracuji v týmu a podílím se na projektech, které mě posouvají dál. Jsem otevřená novým výzvám a neustálému profesnímu rozvoji.
              <br /><br />
              Ve volném čase ráda hraji počítačové i deskové hry, sportuji s přáteli – momentálně badminton a jumping – a věnuji se svým dvěma ragdoll kočkám. Kromě těchto aktivit i ráda peču, ochutnávám nová jídla nebo prozkoumávám okolí.
            </p>
          </div>
        </div>
        
        {/* Right side space */}
        <div className='w-2/5'></div>
      </div>
    </div>
   
  )
}
