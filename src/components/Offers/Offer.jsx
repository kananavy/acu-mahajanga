import { useState } from 'react'
import { useEffect } from 'react'
import './offer.css'
import './offer.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {MdBathtub, MdKingBed} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

  //Let us import images ====================>
import img6 from '../../assets/(6).jpg'
import img7 from '../../assets/(7).jpg'
import img8 from '../../assets/(8).jpg'

// SO since we have finished styling every content,
//Let us also use the some heigh order array methos (MAP)
//to List our offers.


const Offers =[

{
  id:1,
  imgSrc: img8,
  destTitle: 'Machu Picchu',
  location:'Peru',
  price: '$7,452',
},
{
  id:2,
  imgSrc: img6,
  destTitle: 'Gianajuto',
  location:'Mexico',
  price: '$2,452',
},
{
  id:3,
  imgSrc: img7,
  destTitle: 'Angkor wat',
  location:'colombia',
  price: '$4,400',
},
]



function Offer() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  const [count, setCount] = useState(0)

  return (
   <section className='offer connaitre section' id='Offer'>
     <div className="secContainer">
      <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle" >
            Special Offers
          </h2>
            <p>
              From historical cities to naturel spectuculars, come see the best of 
              the word!
            </p>
        </div>
        <div className="mainContent grid">

          {
            Offers.map(({id, imgSrc, destTitle, location, price})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt={destTitle} />
                    <span className='discount'>
                      30% Off
                    </span>
                  </div>
        <div className="offerBody">
          <div className="price flex">
            <h4>
              {price}
            </h4>
            <span className="status">
              For Rent
            </span>
          </div>
        <div className="amenities flex">  
           <div className="singleAminity flex">
              <MdKingBed className="icon"/>
              <small>1 Beds</small>
            </div>
            <div className="singleAminity flex">
              <MdBathtub className="icon"/>
              <small>2 Beds</small>
            </div>
            <div className="singleAminity flex">
              <FaWifi className="icon"/>
              <small>Wi-fi</small>
            </div>
            <div className="singleAminity flex">
              <MdAirportShuttle className="icon"/>
              <small>Shutlle</small>
            </div>
            <div className="location flex">
              <MdLocationOn className="icon"/>
              <small>450 Vine #310, {location}</small>
            </div>
            <button className="btn flex">
            View Details
            <BsArrowRightShort className="icon"/>
            </button>
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

export default Offer
