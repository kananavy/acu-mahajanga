import { useState } from 'react'
import { useEffect } from 'react'
import './blog.css'
import './blog.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {BsArrowRightShort} from 'react-icons/bs'

//Import images to use =========================>

import img from '../../assets/1674573944logo.jpg'
import img2 from '../../assets/tsangambato40em.jpg'
import img3 from '../../assets/tsangafet.jpg'
import img4 from '../../assets/(10).jpg'

//So guys, here also we are going to use the Map method to display our posts.

const Posts = [
  {
    id:1,
    postImage: img,
    title: 'Famantarana ny ACUMahajanga',
    desc: 'Ity no famantarana voalohany hoany ACUMahajanga na (Logo ACUMahajanga)'
  },
  {
    id:2,
    postImage: img2,
    title: 'Tsangambato 40taona',
    desc: 'Famantarana sy tsangambato ny faha 40 taona ny ACUMahajanga'
  },
  {
    id:3,
    postImage: img3,
    title: 'Tsangambato 20Taona FET',
    desc: ' Tunisia is a small Arab country in North Africa that represent both the aspiration of freedom and struggles against terrorism that roil the region'
  },
  {
    id:4,
    postImage: img4,
    title: 'Best Country in East Africa',
    desc: 'When Kenya claimed its independence from the U.K, in 1963 leader of yhe newly formed republic promoted a sense of national unity using the motto'
  },
]

function blog() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  const [count, setCount] = useState(0)

  return (
   <section className='blog container section' id='Blog'>
      <div className="secContainer">

        <div className="secIntro"><br/>
          <h2 data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible exprince in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({id, postImage,title, desc})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>
  
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="4000">{desc}</p>
                </div>
  
                <a href="#" className='flex' data-aos="fade-up" data-aos-duration="4500">
                  Read More
                  <BsArrowRightShort className='icon'/>
                </a>
            </div>
              )
            })
          }
        </div>
      </div>
   </section>
  )
}

export default blog
