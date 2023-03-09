import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
// import Home from './components/Home/elio'
import Navbar from './components/Navbar/Navbar'
import Offer from './components/Offers/Offer'
import Popular from './components/Popular/Popular'
// import Popular from './components/Popular/elio'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Popular/>
    <Offer/>
    <About/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
