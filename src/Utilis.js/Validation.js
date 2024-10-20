
const handleValidation = (email , password,name)=>{
  
    const validateEmail= /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)
    
    const validatePassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)
    const validateName =/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name)


    if (!validateEmail)
        return "not valid emailid"
    if(!validatePassword)
        return 'not valid password' 
    if(!validateName)
     return 'not valid name'

   return "please proceed"

}

export default handleValidation;