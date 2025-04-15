import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Work from './components/Work'
import Carousel from './components/Carousel'
import './App.css'

function App() {


  return (
    <>
      <div className='h-lvh'>
        <Navbar/>
        <Hero/>
      </div>
      <Carousel/>
      <Work/>
      <Footer/>
    </>
  )
}

export default App
