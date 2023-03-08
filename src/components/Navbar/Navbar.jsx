import { useState } from 'react'
import './navbar.css'
import "./navbar.scss"
import {BiChurch} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

function Navbar() {
  //code to togle /show navBar
  const [active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  //code tb remove Navbar
  const removeNav = ()=>{
    setActive('navBar')
  }


//code to add background color the header
const[transparent, setTransparent] = useState('header')
const addBg = ()=>{
  if(window,scrollY >=10){
    setTransparent('header activeHeader')
  }
  else{
    setTransparent('header')
  }
}
window.addEventListener('scroll', addBg)


  return (
   <section className='navBarSection'>
    <div className={transparent}>
      
      <div className="logoDiv">
        <a href="#" className="logo">
          <h1 className='flex'><BiChurch className="icon"/>
            ACUMg
          </h1>
        </a>
      
      </div>
      <div className={active}>
          <ul className="navLists flex">
            

            <li className="navItem">
              <a href="#Home" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#Popular" className="navLink">Products</a>
            </li>
            <li className="navItem">
              <a href="#Offer" className="navLink">Resources</a>
            </li>
            <li className="navItem">
              <a href="#About" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#Blog" className="navLink">Blog</a>
            </li>
            <li className="navItem">
              <a href="#Footer" className="navLink">Contacts</a>
            </li>
            <div className="headerBtns flex">
              <button className="btn loginBtn">
                  <a href="#">Login</a>
              </button>
              <button className="btn">
                  <a href="#">Sign-up</a>
              </button>
            </div>

          </ul>

        <div onClick={removeNav} className="closeNavbar">
          <AiFillCloseCircle className="icon"/>
        </div>


        </div>
    
      <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className="icon" />
      </div>
    
    </div>
   </section>
  )
}

export default Navbar
