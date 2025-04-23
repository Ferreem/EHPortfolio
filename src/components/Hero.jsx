import React from 'react'
import Spline from '@splinetool/react-spline';

const handleClick = () => {
  const link = document.createElement('a');
  link.href = '../data/EHCV.pdf'; // Can be a local/public file or URL
  link.download = 'Eliska_Havelkova_CV.pdf'; // Set the filename
  link.click();
}

export default function Hero() {
  return (
    <div className='flex h-11/12 bg-eGrey'>
      <div className='bg-eGrey w-64 h-24 absolute z-40 bottom-0 right-0'></div>
      
      <Spline 
        className='absolute inset-0 w-full h-full object-cover z-10' 
        scene="https://prod.spline.design/FTC2pROX4WVyEOrs/scene.splinecode"
      />
      
      <div className='relative z-10 flex h-full w-full'>
        <div className='w-3/5 flex justify-center items-center flex-col'>
          <div className='w-4/6 relative px-8'>
            <div className='relative bg-eGrey h-16'>
            </div>
            <div className='!py-2 !px-1 !mb-16 w-4/6 flex flex-col relative'>
            <div className='h-16 relative'>
                <h2 className='text-5xl absolute left-0 -bottom-2 z-50'>Hello, I'm</h2>
                <h4 className='text-3xl absolute right-0 -bottom-2 z-50'>UX / UI designer</h4>
              </div>
              <h1 className='3xl:text-8xl 2xl:text-6xl lg:text-5xl md:text-4xl text-eYellow border-6 text-center !py-2 !px-1 relative'>Eliška Havelková</h1>
            </div>
            <h5 className='text-xl text-eBlue mb-3'>Jsem <span className='italic'>grafická designérka a UX / UI designérka</span></h5><br />
            <p className='text-xl text-eBlue font-thin'>
              V současnosti studuji výtvarnou výchovu. Můj přístup k designu spojuje analytické myšlení s kreativním přístupem, což mi umožňuje vytvářet funkční a vizuálně působivé digitální produkty. Jsem komunikativní a flexibilní, ráda pracuji v týmu a podílím se na projektech, které mě posouvají dál. Jsem otevřená novým výzvám a neustálému profesnímu rozvoji.
              <br /><br />
              Ve volném čase ráda hraji počítačové i deskové hry, sportuji s přáteli – momentálně badminton a jumping – a věnuji se svým dvěma ragdoll kočkám. Kromě těchto aktivit i ráda peču, ochutnávám nová jídla nebo prozkoumávám okolí.
            </p>
            <button onClick={handleClick} className='text-eBlue border-2 !px-4 rounded-md absolute right-8 cursor-pointer'>Zivotopis.pdf</button>
          </div>
        </div>
        
     
        <div className='w-2/5'></div>
      </div>
    </div>
   
  )
}
