import React from 'react'
import Header from './Header'
import UseNowPlayingMovies from './hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SceondaryContainer from './SceondaryContainer'

const Browser = () => {
  UseNowPlayingMovies()
  return (
    <div>
      <Header/>
       <MainContainer/>
       <SceondaryContainer/>
    </div>
  )
}

export default Browser