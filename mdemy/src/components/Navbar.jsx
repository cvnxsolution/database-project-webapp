import React, { useState } from 'react'
import { FaSearch, FaShoppingCart} from 'react-icons/fa'
import { LuChevronUp, LuMenu } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [keyword, setKeyword] = useState("");
  const [menuOpen,setMenuOpen] = useState(false)
  const navigate = useNavigate();

  const handleSearch = (e) => {
  if (e.key === "Enter") {
    navigate(`/courses?keyword=${encodeURIComponent(keyword)}`);
    setMenuOpen(false)
  }
};


  return (
    <nav className='navbar'>
      <div className='navbar-inner'>

        <div className='nav-left'>
          <LuMenu 
            className='menu-icon' 
            onClick={()=>setMenuOpen(!menuOpen)}
          />
          <h1 className='logo'><span>m</span>demy</h1>
          <a href="#" className='explore'>Explore</a>
        </div>

        <div className='nav-search'>
          <input 
            type="text" 
            value={keyword}
            onChange={(e)=>setKeyword(e.target.value)}
            onKeyDown={handleSearch}
          />
          <FaSearch className='search-icon'/>
        </div>

        <div className={`nav-right ${menuOpen ? "active" : ""} `}>
          <a href="#" className='nav-links'>Plans & Pricing</a>
          <a href="#" className='nav-links'>Mdemy Business</a>
          <a href="#" className='nav-links tech'>Teach on Mdemy</a>
          <FaShoppingCart className='cart-icon'/>
          <button className="login-btn">Log in</button>
          <button 
            className="signup-btn"
          >
            Sign up
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;
