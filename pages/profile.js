import React from 'react'
import {useSession,getSession} from 'next-auth/react'
import Image from'next/image'

function About() {
  const {data:session}= useSession()
  console.log("this is the session",session)
  return (
    <div className="container mx-auto bg-slate-600 w-full h-screen">
      {/* <div className='w-full flex justify-center items-center'><Image src={sess}></Image></div> */}



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
