import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movieitem from './Movieitem'

const Movierow = ({title,url}) => {

const [moviedata,setMovieData]=useState([])

    useEffect(()=>{
        async function apis(){
          try{
            let {data}=await axios.get(url)
            setMovieData(data.results)
          }
          catch(error){
            if (error.response && error.response.status === 404) {
              console.log('Resource not found',error.message);
            } else {
              console.error('An error occurred:', error.message);
            }
          }
        }
        apis()
    },[url])

console.log(moviedata);

  return (
    <>
      <h2 className='p-4 capitalize md:text-xl font-nsans-bold '>{title}</h2>

      <div className='relative flex items-center'>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
         {moviedata.map(({backdrop_path,title,id,poster_path}) => {
          return <Movieitem image={backdrop_path} title={title} key={id} altimg={poster_path}/>
         })}
        </div>
      </div>
    </>
  )
}

export default Movierow