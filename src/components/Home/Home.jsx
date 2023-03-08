import { useState } from 'react'
import { useEffect } from 'react'
import './home.css'
import './home.scss'


import Aos from 'aos'
import 'aos/dist/aos.css'

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
              <a href="#">Tsara ho fantatra</a>
            </button>
        </div>

        <div className="homeCard grid">

          <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
            <label htmlFor="location">Faritra</label>
            <h3>Mahajanga</h3>
          </div>
          

          <div  data-aos="fade-right" data-aos-duration="2500" className="distDiv">
            <label htmlFor="distance">Toerana</label>
            <h3>Ambondrona</h3>
          </div>

          <div  data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
            <label htmlFor="price">halavirana</label>
            <h3>10km miala eo amin'ny Cathedral</h3>
          </div>

          {/* <button className="btn">
            Search
          </button> */}


        </div>

      </div>
    </section>
  )
}

export default Home
