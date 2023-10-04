import React from 'react'
import logo from '../assets/rohit-img.png'

export const Home = () => {
  return (
    <div className='w-1/2 mx-auto'>
        <div className='flex gap-8 justify-center p-4'>
            <div className='overflow-hidden w-36'>
                <img src={logo} alt="rohit-logo" className='rounded-full shadow-lg'/>
            </div>
            <div className='pt-8 text-center'>
               <h1 className='text-3xl underline text-black shadow-xl'>Rohit Singh Rajput</h1> 
               <h2 className='text-md'> MERN Fullstack Software Engineer</h2>
               <h2 className='text-md'> singh.rohit33178@gmail.com</h2>
               <h2 className='text-md'> +91 9953933178</h2>
            </div>
        </div>
    </div>
  )
}
