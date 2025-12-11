import React, { useState } from 'react'
import { FaSearch,FaShoppingCart,FaGlobe } from 'react-icons/fa'
import { LuChevronUp } from "react-icons/lu";
import { Navigate } from 'react-router-dom';

const Navbar = () => {
  const [keyword,setKeyword] = useState('')
  const navigate = Navigate()

  const handleIconClick = () => {
    navigate(`/courses?keyword=`)
  }

  return (
    <nav className='navbar'>
    
          <div className='nav-left'>
            <LuChevronUp className='up-icon'/>
            <div className='logo'>mdemy</div>
            <a href="#" className='explore'>Explore</a>
          </div>
    
          <div className='nav-search'>
            <input 
              type="text" 
              placeholder='Search for anything'
              value={keyboard}
              onChange={(e)=>setKeyboard(e.target.value)}
            />
            <FaSearch className='search-icon' onClick={handleIconClick}/>
          </div>
    
          <div className='nav-right'>
              <a href="#" className='nav-links'>Plans & Pricing</a>
              <a href="#" className='nav-links'>Mdemy Business</a>
              <a href="#" className='nav-links'>Teach on Mdemy</a>
    
            <FaShoppingCart className='cart-icon'/>
    
            <button>Log in</button>
            <button>Sign up</button>
    
             <FaGlobe className='world-icon'/>
          </div>
        </nav>
  )
}

export default Navbar