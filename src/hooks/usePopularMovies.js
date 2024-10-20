import React, { useEffect } from 'react'
import { API_options } from '../Utilis.js/constants'
import { useDispatch } from 'react-redux'
import {addPopularMovies} from '../Utilis.js/MovieSlice'

const usePopularMovies = () => {
 
    const  dispatch = useDispatch()
    const getPopularMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options)
        const json = await data.json()
        dispatch(addPopularMovies(json))
        console.log(json)
    
    }
    useEffect(()=>
      getPopularMovies
    ,[])
  
}

export default usePopularMovies