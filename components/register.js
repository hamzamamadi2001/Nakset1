import {  Text } from "@nextui-org/react";
import { Label,TextInput,Checkbox,Button,Spinner } from "flowbite-react";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import React,{useState} from 'react'
import {signIn,signOut,useSession} from 'next-auth/react'
import { useRouter } from 'next/router'
  import { BsTwitter } from 'react-icons/bs';

function Register() {
  const [checked, setChecked] = React.useState(false);
  const [existerror, setExistError] = React.useState(false);
  const [sending, setSending] = React.useState(false);


  const handleChange = () => {
    setInput(prev => ({
      ...prev,
      ["condition"]: !input.condition
    }));
    var e ={target:{name:"condition" , value:!input.condition}}
    validateInput(e);

  };
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email:"",
    condition:false,
  });
 
  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email:"",
    condition:"",
  })
  function validateName(name){
    
    if(name == null || name == undefined){
      return false
    }
    name = name.replace( / +/g, ' ')
    if (!name||name.length<4) {
      return false
    }
    return true
  }
  function validatePassword(pass1,pass2){
    if(pass1 == null || pass2==null ||pass1==undefined || pass2 == undefined){
      return false
    }
    pass1 = pass1.replace( / +/g, ' ')
    pass2 = pass2.replace( / +/g, ' ')
    if (checkPassword(pass1)==false || !pass1 || !pass2||pass1!=pass2||pass1.length<8) {
      return false
    }
    return true
  }
  const inputText =()  => {
     if(validateName(input.name)==false||validateEmail(input.email)==false||validatePassword(input.password,input.confirmPassword)==false||input.condition==false){
      return false
     }
     return true
  }
 
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
        case "username":
          if (!value||value.length<4) {
            stateObj[name] = "Please enter Username contain more then 4 characters."; setExistError(true)
          }
          break;

        case "password":
          if (!value || checkPassword(value)==false) {
            stateObj[name] = " password must be at least 8 characters long, contains upper, lower letter and special characters "; setExistError(true)
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match."; setExistError(true)
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword; setExistError(true)
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password."; setExistError(true)
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match."; setExistError(true)
          }
          break;
          case "email":
          if (!value || validateEmail(value)==false) {
            stateObj[name] = "Please enter a valid email."; setExistError(true)
          }  
          break;
          case "condition":
            if (value==false) {
              stateObj[name] = "you must to accepte our conditions"; setExistError(true)
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
      var re = /^(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*$/;
      return re.test(str);
  }
  const validateEmail = (email) => {
    if(email == undefined || email==null) { return false}
          var result = String(email)
      .toLowerCase()
      .match(
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/   );
        if(result==null)  {  return false}
        else{ return true}

  };
  
  const router = useRouter()

async function handelRegister(e){
  setLoading(true);
  if(!inputText() || existerror){
  setSending(true)
  setLoading(false);
  

    return 
  }
  e.preventDefault()
  let user={
    email:input.email,
    password:input.password,
    username:input.username,
  }
  //rememper to replace the url before uploading it to the server https://nakset.vercel.app/api/register
  let response = await fetch("https://nakset.vercel.app/api/register",{method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)});

let commits = await response.json();
console.log("this is the result after the registration operation",commits.result)
if(commits.result.error){
  setError2("this email already exists")
  return
}else{
console.log("this is the result after the registration operation",commits.result.result)
  
  signIn('credentials', { redirect: false, password: input.password,email:input.email}).then((res)=>{console.log(res);if(res.ok){router.push('/')}else{setError("there was a problem")}})
  setLoading(false);

}
 
}
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, rsetPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error2, setError2] = useState("");
 

  const [loading, setLoading] = useState(false);
  return (
    <form className="flex flex-col gap-4 mx-auto w-96   bg-black bg-opacity-20 backdrop-blur-sm p-10">
       <p className='w-full text-lg text-red-700 text-center'>{error2}</p>
       <p className='w-full text-lg text-red-700 text-center'>{(!inputText() || existerror)&&sending ?"you must fill out all fields":"" }</p>
       <input
          type="text"
          name="username"
          placeholder='Enter Username'
          value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.username && <span className='text-red-600 font-bold text-xs'>{error.username}</span>}
 
        <input
          type="password"
          name="password"
          placeholder='Enter Password'
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.password && <span className='text-red-600 font-bold text-xs'>{error.password}</span>}
 
        <input
          type="password"
          name="confirmPassword"
          placeholder='Enter Confirm Password'
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.confirmPassword && <span className='text-red-600 font-bold text-xs'>{error.confirmPassword}</span>}
        <input
          type="email"
          name="email"
          placeholder='Enter your email'
          value={input.email}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.email && <span className='text-red-600 font-bold text-xs'>{error.email}</span>}
      <div className="flex items-center gap-2">
        <Checkbox name="condition" id="agree"  checked={input.condition}
          onChange={handleChange}  />
        

        <Label htmlFor="agree">
          I agree with the{' '}
          <a
            href="/forms"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </Label>
      </div>
      {error.condition && <span className='text-red-600 font-bold text-xs'>{error.condition}</span>}      
      <Button disabled={loading} onClick={ async (e)=>{  handelRegister(e)}}  gradientDuoTone="greenToBlue">
      {loading?<Spinner
    color="info"
    aria-label="Info spinner example"
  />:"Register"}
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

export default Register