import React from 'react'
import { FaSearch,FaShoppingCart,FaGlobe } from 'react-icons/fa'
import { LuChevronUp } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className='navbar'>
    
          <div className='nav-left'>
            <LuChevronUp className='up-icon'/>
            <div className='logo'>mdemy</div>
            <a href="#" className='explore'>Explore</a>
          </div>
    
          <div className='nav-search'>
            <input type="text" placeholder='Search for anything'/>
            <FaSearch className='search-icon'/>
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