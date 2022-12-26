import React from 'react'
import {useSession,getSession} from 'next-auth/react'
import { Label,TextInput,Checkbox,Button } from "flowbite-react";

import Image from'next/image'

function About() {
  const {data:session}= useSession()
  console.log("this is the profile",session)
  return (
    <div className="container mx-auto   w-full h-screen">
       <p className='text-center text-3xl font-mono'>user information</p>
      <div className='bg-slate-300' > 
      <div className='w-full h-1/2 grid grid-cols-2  p-6 '>
      <div className='w-1/2'>
        <div className="mb-2 block  ">
          <Label
            htmlFor="username"
            value="username"
          />
        </div>
        <TextInput
          id="username"
          type="username"
          placeholder='{session.name}'
          required={true}
          shadow={true}
          disabled={true}
value="hamza mammadi"
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>
      <div className='w-1/2' >
        <div className="mb-2 block ">
          <Label
            htmlFor="email"
            value="your email"
          />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="your email "
          required={true}
          shadow={true}
          disabled={true}
          value='{session.email}'
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>
      <div className='w-1/2'>
        <div className="mb-2 block">
          <Label
            htmlFor="phone"
            value="phone"
          />
        </div>
        <TextInput
          id="phone"
          type="phone"
          placeholder="your name"
          required={true}
          shadow={true}
          disabled={true}
value="ll;k;"
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>


      </div>
<div className='w-full items-center p-2  h-12 flex flex-row-reverse'>
  <Button>save personal information</Button>
</div>
</div>

      <p className='text-center mt-10 bg-blue-400 text-3xl font-mono'>User adress </p>
      <div className='bg-slate-300' > 

      <div className='w-full h-1/2 grid grid-cols-2   p-6 '>
      <div className='w-1/2'>
        <div className="mb-2 block  ">
          <Label
            htmlFor="country"
            value="country"
          />
        </div>
        <TextInput
          id="country"
          type="country"
          placeholder="your country"
          required={true}
          shadow={true}
          disabled={true}
value="i dont know your country"
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>

      <div className='w-1/2' >
        <div className="mb-2 block ">
          <Label
            htmlFor="province"
            value="province"
          />
        </div>
        <TextInput
          id="province"
          type="province"
          placeholder="your province "
          required={true}
          shadow={true}
          disabled={true}
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>

      <div className='w-1/2' >
        <div className="mb-2 block ">
          <Label
            htmlFor="city"
            value="city"
          />
        </div>
        <TextInput
          id="city"
          type="city"
          placeholder="your city "
          required={true}
          shadow={true}
          disabled={true}
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>
      <div className='w-1/2'>
        <div className="mb-2 block">
          <Label
            htmlFor="postal code"
            value="postal code"
          />
        </div>
        <TextInput
          id="postal code"
          type="postal code"
          placeholder="postal code"
          required={true}
          shadow={true}
          disabled={true}
value="postal code"
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>
      <div className='w-1/2'>
        <div className="mb-2 block">
          <Label
            htmlFor="phone"
            value="phone"
          />
        </div>
        <TextInput
          id="phone"
          type="phone"
          placeholder="street,house/apartment/unit*"
          required={true}
          shadow={true}
          disabled={true}
value="phone"
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>

     
    
       


      </div>
      <div className='w-full items-center p-2  h-12 flex flex-row-reverse'>
  <Button>save personal information</Button>
</div>
</div>
    </div>
  )
}
// export async function getServerSideProps({req}){
//   const session = await getSession({req})
  

//   if(!session){ return{
//     redirect: {
//       permanent: false,
//       destination: '/sum',

//   }}
  
// }else{
//   return {
//     props: {
//       session
//     }
//   }
// }
// }
export default About
