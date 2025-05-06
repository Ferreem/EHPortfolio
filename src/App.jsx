import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Work from './components/Work'
import Carousel from './components/Carousel'
import './App.css'

function App() {


  return (
    <>
      <div className='bg-eGrey'>
        <Navbar/>
        <Hero/>
      </div>
      <div style={{height:'70vh'}}>
      <Carousel/>
      </div>
      <Work/>
      <Footer/>
    </>
  )
}

export default App
