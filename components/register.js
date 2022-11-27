import {  Text } from "@nextui-org/react";
import { Label,TextInput,Checkbox,Button } from "flowbite-react";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import React,{useState} from 'react'
import {signIn,signOut,useSession} from 'next-auth/react'
import { useRouter } from 'next/router'


function register() {
  
  const router = useRouter()

async function handelRegister(e){
  e.preventDefault()
  let user={
    email:email,
    password:password,
    username:username,
  }
  let response = await fetch("http://localhost:3000/api/auth/register",{method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)});

let commits = await response.json();
console.log("this is the result after the registration operation",commits.result)
if(commits.result.error){
  setError("this email already exists")
  return
}else{
console.log("this is the result after the registration operation",commits.result.result)
  
  signIn('credentials', { redirect: false, password: commits.result.result.password,email:commits.result.result.email}).then((res)=>{console.log(res);if(res.ok){router.push('/')}else{setError("there was a problem")}})
}
 
}
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, rsetPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  return (
    <form className="flex flex-col gap-4 mx-auto w-96   bg-black bg-opacity-20 backdrop-blur-sm p-10">
       <p className='w-full text-lg text-red-700 text-center'>{error}</p>

    <div>
        <div className="mb-2 block">
          <Label
            htmlFor="username"
            value="username"
          />
        </div>
        <TextInput
          id="username"
          type="username"
          placeholder="your name"
          required={true}
          shadow={true}
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email"
            value="Your email"
          />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="email@example.com"
          required={true}
          shadow={true}
          onChange={(e)=>{setEmail(e.target.value)}}

        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password"
            value="Your password"
          />
        </div>
        <TextInput
          id="password"
          type="password"
          required={true}
          shadow={true}
          onChange={(e)=>{setPassword(e.target.value)}}

        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="repeat-password"
            value="Repeat password"
          />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          required={true}
          shadow={true}
          onChange={(e)=>{rsetPassword(e.target.value)}}

        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
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
      <div className='flex justify-center items-center w-full'>
    <hr className='bg-black h-1 w-full'></hr>
     <p className='font-paris'>or</p>
     <hr className='bg-black h-1 w-full'></hr>

  </div>
 
  <Button onClick={ (e)=>{handelRegister(e)}}  gradientDuoTone="greenToBlue">
      Login
    </Button>

  <Button onClick={async (e)=>{ e.preventDefault(); signIn("google").then((res)=>{console.log(res)})}} className='flex flex-row-reverse justify-around items-center w-full' gradientDuoTone="greenToBlue">
    <FcGoogle  className="mr-2"></FcGoogle>
     <p>Google</p>
    </Button>

    <Button  className='flex flex-row-reverse justify-around items-center w-full' gradientDuoTone="greenToBlue">
<BsApple color='black' className="mr-2" ></BsApple>
<p>Apple</p>

    </Button>
  <Button  className='flex flex-row-reverse justify-around items-center w-full' gradientDuoTone="greenToBlue">
<BsFacebook color='blue' className="mr-2" ></BsFacebook>
<p>Facebook</p>

    </Button>
    </form>
  )
}

export default register