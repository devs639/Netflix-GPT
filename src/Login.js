import React, {  useRef, useState } from 'react'
import Header from './Header'
import {Background_IMG} from './Utilis.js/constants'
import handleValidation from './Utilis.js/Validation'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from './Utilis.js/FireBase'
import {user_LOGO} from './Utilis.js/constants'
import { useDispatch } from 'react-redux';
import { addUser } from './Utilis.js/userSlice';


const Login = () => {
 
  const [signIn , setSignIn]= useState(true)
  const [error,setError]=useState(null)
   
    const name=useRef(null)
    const email=useRef(null)
    const password=useRef(null)
    const dispatch= useDispatch()
  
    const handleSubmit=()=>{
      const verify=handleValidation(email.current.value , password.current.value )
      setError(verify)
      // console.log("in handlesubmit")
      // if (verify) return;
      
      if(!signIn){
        //console.log('!signin')
        signInWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value)
          .then((userCredential) => {
    // Signed in 
         const user = userCredential.user;
        // console.log(user)
      })
        .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setError(errorCode+errorMessage)
         
       });
        } else {
          
createUserWithEmailAndPassword(auth,
  email.current.value,
  password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    updateProfile(user, {
      displayName: name.current.value,
       photoURL:'https://lh3.googleusercontent.com/a/ACg8ocKvzIz5m0qKYv_tGvkvXBEHC9ZOWEwwgkxjwkqruKypIj6c1udu=s432-c-no'
    })
    .then(() => {
      // Profile updated!
      const {uid,email,displayName,photoUrl}=auth.currentUser
      dispatch(
        addUser({
          uid:uid,
           email:email, 
           displayName:displayName ,
           photoUrl:photoUrl
          })
        )
    }).catch((error) => {
      // An error occurred
      setError(error.message)
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   // console.log(errorCode)
    // ..
  });

         
        }
     }
  const handleSignIn=(e)=>{
    e.preventDefault()
    setSignIn(!signIn)
  }
  
  return (
    <div className='border-solid '>
      
      <Header/>
          <div className=' border-solid border-2 border-red-600'>
             <img className='absolute h-auto ' src={Background_IMG} alt='background_Img'></img>
          </div>
          <div className='relative bg-black w-3/12 mx-80  rounded-md opacity-75 text-white'>
          <h1 className=' ml-6 mt-8 pt-6 text-white font-bold'>{signIn ? 'SignUp' :'SignIn'}</h1>
          <form className='  pt-12 flex flex-col'onSubmit={(e)=>e.preventDefault()}>
         {signIn && <input className='mx-5 h-14 rounded-md bg-slate-500'
             ref={name}
          type='text'
           placeholder='enter your name'/>}<br></br>
            <input className='mx-5 h-14 rounded-md bg-slate-500' 
             ref={email}
            type='email' 
            placeholder='enter email or mobile number'/>
            <br></br>
            <input className=' mx-5 h-14 rounded-md bg-slate-500' 
           ref={password}
           type='password' 
            placeholder='enter your password'/>
            <br></br>
            <p className='text-red-600 font-bold'>{error}</p>
            <button className='mx-5 h-10 rounded-md border bg-red-700 ' 
            type='submit' 
            onClick={()=>handleSubmit()}
            >Sign In</button>
            <p className='cursor-pointer pt-3 'onClick={(e)=>handleSignIn(e)}>{signIn ? 'Already registered signIn' :'if new user please Signup'}</p>
           </form>
          </div>
    </div>  
  )
}
export default Login