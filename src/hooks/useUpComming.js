import React, { useEffect } from 'react'
import { API_options } from '../Utilis.js/constants'
import { useDispatch } from 'react-redux'
import { addUpCommingMovies } from '../Utilis.js/MovieSlice'

const UseUpComming = () => {

      const dispatch = useDispatch()

  const getUpCommingMovies =async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_options)
    const json = await data.json()
     dispatch(addUpCommingMovies(json))
  }
  useEffect(()=>
    getUpCommingMovies,
   [])
  return (
    <div>upComming</div>
  )
}

export default UseUpComming