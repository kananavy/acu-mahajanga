import { useState } from 'react'
import { useEffect } from 'react'
import './footer.css'
import './footer.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'


import {SiYourtraveldottv} from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

function Footer() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  const [count, setCount] = useState(0)

  return (
<div className="footer" id='Footer'>
  <div className="secContainer container grid">
    <div className="logoDIv"> 
      <div data-aos="fade-up" data-aos-duration="2000" className="footerLogo">
        <a href="#" className="logo flex">
         <h1 className='flex'><SiYourtraveldottv className="icon"/>
          Dot</h1>
        </a>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" className="socials flex">
        <ImFacebook className="icon"/>
        <BsTwitter className="icon"/>
        <AiFillInstagram className="icon"/>
      </div>
    </div>
      <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
        <span className="linkTitle">
          Information
        </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
      </div>


      <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
        <span className="linkTitle">
          Helpful Links
        </span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
      </div>


      <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
        <span className="linkTitle">
          Contact Us
        </span>
        <span className="phono">+261 32 7082479</span>
        <span className="email">Kananavymiremby@gmail</span>
      </div>
  </div>
</div>
  )
}

export default Footer
