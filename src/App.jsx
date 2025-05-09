import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel';
import {Suspense, lazy } from 'react'
import './App.css'

const Work = lazy(() => import('./components/Work'));
const Footer = lazy(() => import('./components/Footer'))

function App() {

  return (
    <div className='bg-eGrey'>
      <div>
        <Navbar/>
        <Hero/>
      </div>
        <Carousel/>
        <Suspense>
          <Work/>
          <Footer/>
        </Suspense>
    </div>
  )
}

export default App
