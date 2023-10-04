import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        
        <ul className='flex justify-center gap-2 p-5'>
            <li className='menu'>
                <NavLink to="/">Home</NavLink>
            </li>
            
            <li className='menu'>
                <NavLink to="/highlights">Highlights</NavLink>
            </li>
            
            <li className='menu'>
                <NavLink to="/services">Services</NavLink>
            </li>
            
            <li className='menu'>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            
        </ul>
    </div>
  )
}
