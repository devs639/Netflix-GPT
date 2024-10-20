import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from './hooks/usePopularMovies'
import UseTopRated from './hooks/useTopRated'
import UseUpComming from './hooks/useUpComming'

function SceondaryContainer() {

     const selector = useSelector((store)=>store?.movies)
       usePopularMovies()
       UseTopRated()
       UseUpComming()
      const moviesList= selector?.nowPlayingMovies
      const PopularMovies = selector?.PopularMovies
      const topRatedMovies = selector?.TopRatedMovies 
      const upCommingMovies = selector?.UpCommingMovies
       return (
    <div>
        <MovieList titleName={"Now Playing"} movies={moviesList}/>
        <MovieList titleName={"Popular "} movies={PopularMovies}/>
        <MovieList titleName={"TopRated "} movies={topRatedMovies}/>
        <MovieList titleName={"UpComming "} movies={upCommingMovies}/>

    </div>
  )
}
export default SceondaryContainer