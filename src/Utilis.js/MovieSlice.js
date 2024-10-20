import { createSlice } from "@reduxjs/toolkit"
 
const MovieSlice =createSlice({
   name:'Movies',
   initialState:{
    nowPlayingMovies:null,
    videoTrailer:null,
   },
   reducers:{
    addNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovies=action.payload
    },
    addVideoTrailer:(state,action)=>{
        state.videoTrailer=action.payload
    }
   }

})
 export const {addNowPlayingMovies} = MovieSlice.actions
export default MovieSlice.reducer