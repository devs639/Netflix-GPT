 import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_options } from '../Utilis.js/constants'
import {addTopRatedMovies} from '../Utilis.js/MovieSlice'
 
 const UseTopRated = () => {
    const dispatch= useDispatch()

    const getTopRatedMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_options)
        const json = await data.json()
        dispatch(addTopRatedMovies(json))
    }
    useEffect(()=>
        getTopRatedMovies
    ,[])
   return (
     <div>useTopRated</div>
   )
 }
 
 export default UseTopRated