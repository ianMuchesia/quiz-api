import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <header>
        <nav className='px-6 py-4 border border-b-2 shadow-lg'>
          <div>
            <img />
          </div>
          <ul className='flex justify-evenly text-2xl font-semibold '>
            <li className='hover:text-red-200 cursor-pointer'>
            <Link to="/">Home</Link>
            </li>
            <li className='hover:text-red-200 cursor-pointer'>
            <Link to="Stats">Stats</Link>
            </li>
            
          </ul>
          
        </nav>
      </header>
  )
}

export default Header