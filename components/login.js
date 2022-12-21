import React,{useState} from 'react'
import {  Text } from "@nextui-org/react";
import { Label,TextInput,Checkbox,Button,Tabs } from "flowbite-react";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import {signIn,signOut} from 'next-auth/react'
import { useRouter } from 'next/router'

function About() {
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    
  <form className="flex flex-col gap-4 mx-auto w-96   bg-black bg-opacity-20 backdrop-blur-sm p-10">
 <p className='w-full text-lg text-red-700 text-center'>{error}</p>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email2"
        value="Your email"
      />
    </div>
    <TextInput
      id="email"
      type="email"
      placeholder="name@flowbite.com"
      required={true}
      shadow={true}
      onChange={event => setEmail(event.target.value)}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password2"
        value="Your password"
      />
    </div>
    <TextInput
      id="password"
      type="password"
      required={true}
      shadow={true}
      onChange={event => setPassword(event.target.value)}

    />
  </div>
  <Button onClick={async ()=>{signIn('credentials', { redirect: false, password: password,email: email}).then((res)=>{if(res.ok){router.push('/'); }else{setError("wrong email or password")}})
}}  gradientDuoTone="greenToBlue">
      Login
    </Button>

  <div className='flex justify-center items-center w-full'>
    <hr className='bg-black h-1 w-full'></hr>
     <p className='font-paris'>or</p>
     <hr className='bg-black h-1 w-full'></hr>

  </div>
 


  <Button   onClick={async (e)=>{ e.preventDefault(); signIn("google",{callbackUrl:"https://nakset.vercel.app"}).then((res)=>{console.log(res)})}} className='flex flex-row-reverse justify-around items-center w-full' gradientDuoTone="greenToBlue">
    <FcGoogle  className="mr-2"></FcGoogle>
     <p>Google</p>
    </Button>

    <Button   className='flex flex-row-reverse justify-around items-center w-full' gradientDuoTone="greenToBlue">
<BsApple color='black' className="mr-2" ></BsApple>
<p>Apple</p>

    </Button>
  <Button onClick={async (e)=>{ e.preventDefault(); signIn("facebook",{callbackUrl:"https://nakset.vercel.app"}).then((res)=>{console.log(res)})}} className='flex flex-row-reverse justify-around items-center w-full' gradientDuoTone="greenToBlue">
<BsFacebook color='blue' className="mr-2" ></BsFacebook>
<p>Facebook</p>

    </Button>
  
</form>
 
  )
}

export default About