import React, { useEffect, useState } from 'react'
import { API_options } from './Utilis.js/constants'
import { useDispatch, useSelector } from 'react-redux'
import addVideoTrailer from './Utilis.js/MovieSlice'

const VideoBackground = ({movieid}) => {
       const dispatch=useDispatch()
      // const selector= useSelector((store)=>store?.movies?.)
       const [trailerId ,setTrailerId]= useState()
    const movievideo= async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos', API_options)
        const json = await data.json()
        console.log(json)

        const trailers = json.results.filter((filter)=>filter.type==="Trailer")
         const trailer = trailers.length?trailers[0]:json.results
         setTrailerId(trailer.key)
         //dispatch(addVideoTrailer(trailer.key))
    }
    useEffect(()=>{
        movievideo()
    },[])

  return (
    <div className='bg-slate-600 w-full '>
     <iframe className='w-screen aspect-video '
        src={"https://www.youtube.com/embed/" + trailerId +'?&autoplay=1&mute=1'}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" 
        >
     </iframe>
    </div>
  )
}

export default VideoBackground