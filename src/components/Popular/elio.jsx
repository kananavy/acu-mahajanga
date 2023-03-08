import { useState } from 'react'
import React, { Component } from "react";
import Slider from "react-slick";

import './popular.css'
import './popular.scss'


import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

//Import the images=======================>
import img2 from '../../assets/(2).jpg'
import img5 from '../../assets/(5).jpg'
import img7 from '../../assets/(7).jpg'
import img9 from '../../assets/(9).jpg'
import img17 from '../../assets/ame.jpg'
import img16 from '../../assets/kenji.jpg'
import img18 from '../../assets/(7).jpg'
import img19 from '../../assets/(9).jpg'

//So now we are join to use a high order array method to 
//display all the destination using Map. To do so we need to
//list all the destination in one array "Data" and Later we
//shall call each destination by index/id


const Data =[
  {
    id:1,
    imgSrc: img2,
    destTitle: 'MAMY Wildinique Nico',
    location:'MIEC',
    grade: 'Filoha voalohany',
  },
  {
    id:2,
    imgSrc: img5,
    destTitle: 'JAONA Aldo',
    location:'F.E.T',
    grade: 'Filoha lefitra',
  },
  {
    id:3,
    imgSrc: img7,
    destTitle: 'RAVELOARISON Antonio',
    location:'FUJM',
    grade: 'Filoha lefitra',
  },
  {
    id:4,
    imgSrc: img9,
    destTitle: 'GERIANNE',
    location:'Ovienda',
    grade: 'Mpitan-tsoratra',
  },



  // =========================================================


  {
    id:5,
    imgSrc: img17,
    destTitle: 'RAZANAHITA Amélie',
    location:'JUDFRA',
    grade: 'Mpitan-tsoratra',
  },
  {
    id:6,
    imgSrc: img16,
    destTitle: 'BEFENO Fairlin Kendjy',
    location:'JUDFRA',
    grade: 'Mpitam-bola',
  },
  {
    id:7,
    imgSrc: img18,
    destTitle: 'RAVELOARISON Antonio',
    location:'FUJM',
    grade: 'Filoha lefitra',
  },
  {
    id:8,
    imgSrc: img19,
    destTitle: 'GERIANNE',
    location:'Ovienda',
    grade: 'Mpitan-tsoratra',
  },


  // ==============================================

  
]


function Popular() {
  const [count, setCount] = useState(0)



  return (
              <section className='popular section container' id='Popular'>
              <div className="secContainer">
              <div className="secHeader flex">
              <div className="textDiv">
              <h2 className="secTitle">
              Birao Mandrafitra azy
              </h2>
              <p>
              Ireo birao mandrafitra ny fitondrana ny ACUMahajanga
              </p>
              </div>

              <div className="iconsDiv flex">
              <BsArrowLeftShort className="icon leftIcon" />
              <a href="#section2"><BsArrowRightShort className="icon"/></a>
              </div>

              </div>

              <div className="mainContent grid">

              {
                Data.map(({id,imgSrc,destTitle,location,grade}) => {
                  return(
                    <div className="singleDestination">
                      <div className="destImage">

                          <img src={imgSrc} alt="Image title"/>

                          <div className="overlayInfo">
                            <h3>{destTitle}</h3>
                            <p>
                             {location}
                            </p>

                            <BsArrowRightShort className='icon'/>

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
                    <BsDot className="icon"/>
                  </span>
                  ACUMg
                </span>
              </div>
              </div>

              </div>
          )
        })
      }
      </div>
    </div>
 
     </section>

)
}

export default Popular
    