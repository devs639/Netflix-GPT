import React from 'react'

const VideoTitle = (props) => {
    const {title,overview} =props
  return (
    <div className='w-1/2 aspect-video mt-20 pl-24 pt-28  absolute  bg-gradient-to-r from-black'>
        <h1 className='text-3xl text-white font-bold'>{title}</h1>
        <p className=' w-1/2   text-white '>{overview}</p>
        <div className='flex '>
           <button className='w-20 h-7 mx-4 bg-white text-black rounded-md hover:bg-slate-400'>Play</button>
           <button className= 'w-20 h-7  bg-slate-600 opacity-50 rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle