import React from 'react'
import {useSession,getSession} from 'next-auth/react'


function About() {
  return (
    <h1>profile</h1>
  )
}
export async function getServerSideProps({req}){
  const session = await getSession({req})
  

  if(!session){ return{
    redirect: {
      permanent: false,
      destination: '/sum',

  }}
  
}else{
  return {
    props: {
      session
    }
  }
}
}
export default About
