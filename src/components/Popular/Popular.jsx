import React, {useState,  Component } from "react";
import { useEffect } from 'react'
import Slider from "react-slick";
import Datas from './data'

import './popular.css'
import './popular.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import { BsArrowLeftShort, BsDot, BsArrowRightShort  } from 'react-icons/bs'


const Popular = () => {
  
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])


 const [state, setState] = useState(Datas)


  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    slickNext:true,
    slickPrev:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return(
    <div>

      <section className='popular section container' id='Popular'>
        <div className="secContainer">
          <div className="secHeader flex">
            <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
              <h2 className="secTitle">Birao Mandrafitra azy</h2>
              <p>Ireo birao mandrafitra ny fitondrana ny ACUMahajanga</p>
            </div>

            {/* <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
             <BsArrowLeftShort data-role="none" className="icon leftIcon" />
    

              <BsArrowRightShort className="icon"/>
            </div> */}

            </div>
            <Slider {...settings}>        
              {
                Datas.map((Data, index) => {
                  const {id, imgSrc, destTitle, location, grade} = Data
                  return (
                    <div className="mainContent grid"  >  
                    <div data-aos="fade-up" className="singleDestination" key={index}>
                      <div className="destImage" id="img">

                        <img src={imgSrc} alt="Image title" />

                        <div className="overlayInfo">
                          <h3>{destTitle}</h3>
                          <p>
                            {location}
                          </p>

                          <BsArrowRightShort className='icon' />

                        </div>
                      </div>

                      <div className="destFooter">
                        <div className="number">
                          0{id}
                        </div>
                        <div className="destText flex">
                          <h6>
                            {grade}
                          </h6>
                          <span className='flex'>
                            <span className="dot">
                              <BsDot className="icon" />
                            </span>
                            ACUMg
                          </span>
                        </div>
                      </div>

                    </div>
               </div>
                  )
                })
              }
            </Slider>
        </div>
      </section>

    </div>
  )
}

export default Popular