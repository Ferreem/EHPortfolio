import Ahrefs from './components/Ahrefs';
import Header from './components/Header';
import Hero from './components/Hero'
import Carousel from './components/Carousel';
import {Suspense, lazy } from 'react'
import './App.css'

const Work = lazy(() => import('./components/Work'));
const Footer = lazy(() => import('./components/Footer'))

function Navbar() {
  return(
    <div className="w-full h-16 bgLinear flex items-center justify-between relative z-50">
      <Ahrefs />
      <Header color={"#ffffff"} >Úvod</Header>
    </div>
  )
}

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
