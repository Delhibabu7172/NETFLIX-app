import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute capitalize p-4 flex  items-center justify-between  w-full z-50'>
        <Link to="/">
     <h1 className='text-2xl md:text-3xl lg:text-4xl font-nsans-bold text-red-600'>NETFLIX</h1>
        </Link>
     <div>
      <Link to="/login"><button className='pr-4'>Login</button></Link>
      <Link to="/signup"><button className='bg-red-600 px-1 py-[2px] md:py-1 md:px-2 rounded'>Sign Up</button></Link>
     </div>
    </div>
  )
}

export default Navbar