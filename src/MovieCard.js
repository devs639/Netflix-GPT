import React from 'react'
import { TMDB_Poster } from './Utilis.js/constants'

const MovieCard = ({movies}) => {
    const {poster_path,title}=movies
  return (
    <div className=''>
       <h1 className='h-2 absolute text-white'>{title}</h1>
       <div className=' w-40 '>
       <img className=' w-full h-28 rounded-md' src={TMDB_Poster+poster_path} alt='poster'></img>
    </div>
    </div>
  )
}

export default MovieCard