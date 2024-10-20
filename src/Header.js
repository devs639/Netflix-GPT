import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Netflix_LOGO,Netflix_USERLOGO } from './Utilis.js/constants'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './Utilis.js/FireBase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from './Utilis.js/userSlice'

const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user= useSelector((store)=>store.user)
  const handleSignOut=()=>{
    
    signOut(auth).then(() => {
      // Sign-out successful.
         navigate('/')
    }).catch((error) => {
      '// An error happened.'
    });
  }
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log(user )
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoUrl}=user
        dispatch(
          addUser({
            uid:uid,
             email:email, 
             displayName:displayName ,
             photoUrl:photoUrl
            })
          )
          navigate('/browser')
      } else {
        // User is signed out
        dispatch(
          removeUser()
        )
        navigate('/login')
      }
    });
     return ()=>unsubscribe()
  },[])
  return (
    <div className='absolute z-10 w-screen flex justify-between'>
      <div>
         <img className='w-40 px-8 py-2  bg-gradient-to-b from-black' src={Netflix_LOGO} alt='logo'/>
      </div>
        <Link to={'/login'}><div>Login</div> </Link> 
        <Link to={'/browser'}> <div>Browser</div></Link>
        <div className='flex'>
          <img className='w-10 h-10 ' src={user?.photoURL} alt='netfilx-userlogo'/>
          <button onClick={handleSignOut}>(SignOut)</button>
        </div>
    </div>
  )
}

export default Header