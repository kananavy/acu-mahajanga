import { useState } from 'react'
import { useEffect } from 'react'
import './home.css'
import './home.scss'

import {GoLocation} from 'react-icons/go'
import {GiAfrica} from 'react-icons/gi'
import {RiPinDistanceFill} from 'react-icons/ri'


import Aos from 'aos'
import 'aos/dist/aos.css'
import img2 from '../../assets/logo.jpg'
import audio from '../../assets/40emAcumg.mp3'
function Home() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='home' id='Home'>
      <div className="secContainer container">


        <div className="homeText">

            <h1 data-aos="fade-up" className="title">
            {/* <h1 data-aos="fade-up" className="title"> */}
              ACUM<sub>ahajanga</sub>
            </h1>

            <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
          Aumonerie Catholique Universite de Mahajanga
            </p>

            <button data-aos="fade-up" data-aos-duration="3000" className="btn">
              <a href="http://127.0.0.1:5500/src/components/Home/elio.html">Tsara ho fantatra</a>
            </button>
        </div>

        <div className="homeCard grid">

          <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
          <GiAfrica className="icon"/><label htmlFor="location">Faritra</label>
            <h3>Mahajanga</h3>
          </div>
          

          <div  data-aos="fade-right" data-aos-duration="2500" className="distDiv">
          <GoLocation className='icon'/><label htmlFor="distance">Toerana</label>
            <h3>Ambondrona</h3>
          </div>

          <div  data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
            <RiPinDistanceFill className='iconDistance'/><label htmlFor="price">halavirana</label>
            <h3>10km miala eo amin'ny Cathedral</h3>
          </div>

          {/* <button className="btn1">
            Search
          </button> */}
          <img className='btn1' data-aos="fade-right" data-aos-duration="3500" src={img2}/>

        </div>

      </div>

      {/* <iframe src={audio} autoplay type='audio/mpeg' id="mon_iframe"></iframe> */}

        

    </section>
  )
}

export default Home
