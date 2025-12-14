import React from 'react'
import '../css/Home.css'
import SkillsSection from './SkillsSection'
import MobileSearchBar from './MobileSearchBar'
import Footer from './Footer'

const Home = () => {
  return (

    <section>
      
      <div className='home-container'>
          <img
              src='https://s.udemycdn.com/browse_components/billboard/fallback_banner_image_udlite.jpg'
              alt='image'
              className='home-image'
              />
          <div className='home-text'>
              <h1>Learning that gets you</h1>
              <span>Skills for your present (and your future). Get started with us.</span>
          </div>
      </div>
      <MobileSearchBar/>

      <SkillsSection/>

      <Footer/>

    </section>

  )
}

export default Home