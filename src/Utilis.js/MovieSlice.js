import { createSlice } from "@reduxjs/toolkit"
 
const MovieSlice =createSlice({
   name:'Movies',
   initialState:{
      nowPlayingMovies:null,
      videoTrailer:null,
      PopularMovies:null,
      TopRatedMovies:null,
      UpCommingMovies:null
      },
   reducers:{
    addNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovies=action.payload
    },
    addVideoTrailer:(state,action)=>{
        state.videoTrailer=action.payload
    },
    addPopularMovies:(state,action)=>{
        state.PopularMovies=action.payload
    },
    addTopRatedMovies:(state,action)=>{
        state.TopRatedMovies=action.payload
    },
    addUpCommingMovies:(state,action)=>{
        state.UpCommingMovies=action.payload
    }
   }

})
 export const {
    addNowPlayingMovies,
    addVideoTrailer,
    addPopularMovies,
    addTopRatedMovies,
    addUpCommingMovies} = MovieSlice.actions
export default MovieSlice.reducer