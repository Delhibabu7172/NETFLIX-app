import React from 'react'
import { createimage } from '../MovieSerives'

const Movieitem = ({title,image,altimg}) => {
  return (
    <div className='relative m-2 inline-block w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] rounded-lg'>
        <img className='' 
        src={createimage("original",image ?? altimg)}  alt={title} />
        {/* <h2>{title}</h2> */}
    </div>
  )
}

export default Movieitem