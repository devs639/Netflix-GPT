import React from 'react'
import MovieCard from './MovieCard'
import usePopularMovies from './hooks/usePopularMovies'

const MovieList = (props) => {
    const {titleName,movies} = props
    //usePopularMovies()
  return (
    <div  className=''>
         <h1 className='font-bold'>{titleName}</h1>
         <div className='flex space-x-1 overflow-x-scroll'>
         {movies?.results?.map((list)=><MovieCard titleName={titleName} key={list.id} movies={list}/>)} 
       
         </div>
    </div>
  )
}

export default MovieList
