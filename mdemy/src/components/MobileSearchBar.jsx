import React from 'react'
import { FaSearch } from 'react-icons/fa'

const MobileSearchBar = () => {
  return (
    <div className='mobile-search'>
        <input 
            type="text" 
            placeholder='What do you want to learn ....?'
            aria-label='Search courses'
        />
    </div>
  )
}

export default MobileSearchBar