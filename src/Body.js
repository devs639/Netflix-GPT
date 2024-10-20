import React from 'react'
import { createBrowserRouter,Outlet } from 'react-router-dom'
import Login from './Login'
import Browser from './Browser'
import Error from './Error'
//import Header from './Header'



const Body = () => {
  
  return (
    <div>Body
        <Outlet/>
    </div>
  )
}
export const appRouter= createBrowserRouter ([
   {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/browser',
        element:<Browser/>
    },
   ],
   errorElement:<Error/>
   }
])


export default Body