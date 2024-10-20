import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { API_options } from '../Utilis.js/constants'
import  addVideoTriler from '../Utilis.js/MovieSlice'

const useMovieTrailer = () => {
       const dispatch=useDispatch()
      //  const [trailerId , setTrailerId]= useState()
        const movievideo= async ()=>{
         const data = await fetch('https://api.themoviedb.org/3/movie/1184918/videos', API_options)
         const json = await data.json()
         console.log(json)
         const trailers = json.results.filter((filter)=>filter.type==="Trailer")
          const trailer = trailers.length?trailers[0]:json.results
          //setTrailerId(trailer.key)
          dispatch(addVideoTriler(trailer.key))
     }
     useEffect(()=>{
         movievideo()
     },[])
  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer