import React from 'react'
import { NavLink, useNavigation } from 'react-router-dom'
import { menus } from '../menu'

export const Header = () => {
  let routes = useNavigation()  
  return (
    <div>
        
        <ul className='w-[800px] mx-auto flex justify-center p-6'>
            
            {menus?.map(menu => (
            <li className={`menu`}>
                <NavLink className={`${routes.isActive === menu.path ? 'active': 'in-active'}`} to={`${menu.path}`}>{menu.name}</NavLink>
            </li>
            ))}

        </ul>
    </div>
  )
}
