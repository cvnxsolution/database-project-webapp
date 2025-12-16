import React, { useState } from 'react'
import '../css/Footer.css'
import {footerData,footerImage,footerItem } from '../data/footerData'
import { FaGlobe } from 'react-icons/fa'

const Footer = () => {

  const [openIndex,setOpenIndex] = useState(null)

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index?null : index)
  }

  return (
    <footer className='footer'>
        
        <div className='footer-top'>
          <div className='footer-partners'>
            <span>Top companies choose <a href="#"> Mdemy Business</a> to build in-demand career skills.</span>
              <div>
                {footerImage.map((img)=>(
              <img 
                key={img.id}
                src={img.image}
                alt='image'
                className='footer-image'
              />
            ))}
              </div>
          </div>

          <h3>Explore top skills and certifications</h3>
          <div className='footer-grid'>
            {
              footerData.map((section,index)=>(
                <div className='footer-section' key={section.title}>
                  
                  <button
                    className='footer-heading'
                    onClick={()=>toggleSection(index)}
                  >
                    {section.title}
                    <span className={`arrow ${openIndex === index ? 'open' : ''}`}>
                      ▾
                    </span>
                  </button>

                  <ul className={`footer-list ${openIndex === index ? 'show' : ''}`}>
                    {section.items.map((item)=>(
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </div>

        </div>

        <div className='footer-center'>
          {footerItem.map((section)=>(
            <div key={section.title}>
              <h4>{section.title}</h4>
              <ul className='footer-center-list'>
                {section.data.map((item)=>(
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </footer>
  )
}

export default Footer