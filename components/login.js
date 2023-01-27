import React,{useState} from 'react'
 import { Label,TextInput,Checkbox,Button,Tabs,Spinner } from "flowbite-react";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import {signIn,signOut} from 'next-auth/react'
import { useRouter } from 'next/router'

function About() {
  const router = useRouter()

  
  const [loading, setLoading] = useState(false);
  const [error2, setError2] = useState(false);
  const [sending, setSending] = React.useState(false);

 
  const [existerror, setExistError] = React.useState(false);


  
  const [input, setInput] = useState({
     password: '',
     email:"",
   });
 
  const [error, setError] = useState({
     password: '',
     email:"",
   })
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
      setExistError(false)
      switch (name) {
        

        case "password":
          if (!value || checkPassword(value)==false) {
            stateObj[name] = " password must be at least 8 characters long, contains upper, lower letter and special characters "; setExistError(true)
          }  
          break;
 
         
          case "email":
          if (!value || validateEmail(value)==false) {
            stateObj[name] = "Please enter a valid email."; setExistError(true)
          }  
          break;
         
 
        default:
          break;
      }
 
      return stateObj;
    });
  }
  function checkPassword(str)
  {

    if(str==null || str==undefined){
      return false
    }
    str = str.replace( / +/g, ' ')

      var re = /^(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*$/;
      return re.test(str);
  }
  const validateEmail = (email) => {
    if(email==null || email==undefined) {
      return false
    }
    email = email.replace( / +/g, ' ')

    var result = String(email)
      .toLowerCase()
      .match(
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/   );
        if(result==null)  {  return false}
        else{ return true}

  };
  const inputText =()  => {
    if(validateEmail(input.email)==false||checkPassword(input.password)==false){
     return false
    }
    return true
 }
  return (
    
  <form className="flex flex-col gap-4 mx-auto w-96   bg-black bg-opacity-20 backdrop-blur-sm p-10">
 <p className='w-full text-lg text-red-700 text-center'>{error2}</p>
 <p className='w-full text-lg text-red-700 text-center'>{(!inputText() || existerror)&&sending ?"you must fill out all fields correctly":"" }</p>

  
    <div className="mb-2 block">
      <Label
        htmlFor="email2"
        value="Your email"
      />
    </div>
    <input
          type="email"
          name="email"
          placeholder='Enter your email'
          value={input.email}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.email && <span className='text-red-600 font-bold text-xs'>{error.email}</span>}
   
   
    <div className="mb-2 block">
      <Label
        htmlFor="password2"
        value="Your password"
      />
    </div>
    <input
          type="password"
          name="password"
          placeholder='Enter Password'
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.password && <span className='text-red-600 font-bold text-xs'>{error.password}</span>}
 
  
  <Button onClick={async ()=>{
    
    if(!inputText() || existerror){
    
      setSending(true)
      setLoading(false);
      
    
        return 
      }
    setLoading(true);if(existerror){return}signIn('credentials', { redirect: false, password: input.password,email: input.email}).then((res)=>{if(res.ok){router.push('/'); }else{setError2(true)}})
}} disabled={loading} gradientDuoTone="greenToBlue">
     {loading?<Spinner
    color="info"
    aria-label="Info spinner example"
  />:"Login"}
    </Button>

  <div className='flex justify-center items-center w-full'>
    <hr className='bg-black h-1 w-full'></hr>
     <p className='font-paris'>or</p>
     <hr className='bg-black h-1 w-full'></hr>

  </div>
 


  <Button   onClick={async (e)=>{ e.preventDefault(); signIn("google",{callbackUrl:"https://nakset.vercel.app"}).then((res)=>{console.log(res)})}} className='flex flex-row-reverse justify-around items-center w-full' outline={true}
      color="light">
    <FcGoogle  className="mr-2"></FcGoogle>
     <p>Google</p>
    </Button>

    <Button onClick={async (e)=>{ e.preventDefault(); signIn("twitter",{callbackUrl:"https://nakset.vercel.app"}).then((res)=>{console.log(res)})}}  className='flex flex-row-reverse justify-around items-center w-full' outline={true}
     color="light">
<BsTwitter color='#1d9bf0' className="mr-2" ></BsTwitter>
<p>twitter</p>

    </Button>
  <Button onClick={async (e)=>{ e.preventDefault(); signIn("facebook",{callbackUrl:"https://nakset.vercel.app"}).then((res)=>{console.log(res)})}} className='flex flex-row-reverse justify-around items-center w-full' outline={true}
      color="light">
<BsFacebook color='blue' className="mr-2" ></BsFacebook>
<p>Facebook</p>

    </Button>
  
</form>
 
  )
}

export default About