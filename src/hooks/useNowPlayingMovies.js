import { useDispatch } from "react-redux";
import { API_options } from "../Utilis.js/constants";
import { addNowPlayingMovies } from "../Utilis.js/MovieSlice";
import { useEffect } from "react";

const UseNowPlayingMovies =()=>{
    const dispatch =useDispatch()

  const getNowPlayingMovies=async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_options);
   const json = await data.json()
   //console.log(json)
   dispatch(addNowPlayingMovies(json))
  }

  useEffect(()=>
    getNowPlayingMovies,
   [])
}

export default UseNowPlayingMovies;