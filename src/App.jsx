import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useState, Suspense, lazy } from 'react'
import './App.css'

const Carousel = lazy(() => import('./components/Carousel'));
const Work = lazy(() => import('./components/Work'));
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [carouselLoaded, setCarouselLoaded] = useState(false);

  return (
    <>
      <div className='bg-eGrey'>
        <Navbar/>
        <Hero/>
      </div>

      <Suspense>
        <div style={{height:'70vh'}}>
        <Carousel onLoad={() => setCarouselLoaded(true)}/>
        </div>
      </Suspense>
      {carouselLoaded && (
        <Suspense>
          <Work/>
          <Footer/>
        </Suspense>
      )}
    </>
  )
}

export default App
