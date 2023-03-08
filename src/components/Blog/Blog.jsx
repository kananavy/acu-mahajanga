import { useState } from 'react'
import { useEffect } from 'react'
import './blog.css'
import './blog.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {BsArrowRightShort} from 'react-icons/bs'

//Import images to use =========================>

import img from '../../assets/(14).jpg'
import img2 from '../../assets/(12).jpg'
import img3 from '../../assets/(11).jpg'
import img4 from '../../assets/(10).jpg'

//So guys, here also we are going to use the Map method to display our posts.

const Posts = [
  {
    id:1,
    postImage: img,
    title: 'Beautiful Morocco, let us travel!',
    desc: 'The Kingdon of Morocco is a Muslin is a country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea'
  },
  {
    id:2,
    postImage: img2,
    title: 'Romantic moments under Eiffel Tower',
    desc: 'with vast swaths of desert in its east and the rich Nile River Valley at its heart, is site to one of the worlds earliest and greatest civilizations'
  },
  {
    id:3,
    postImage: img3,
    title: 'Let us have an adventure outside Tunisia.',
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
