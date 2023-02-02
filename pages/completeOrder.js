import React ,{useState,} from 'react'
import { Button} from "flowbite-react";
 
import { useSelector, useDispatch } from 'react-redux'
 import { MdVerifiedUser } from 'react-icons/md';
import useTranslation from 'next-translate/useTranslation'


 
 
 

function About() {
    const {t} = useTranslation()
 

 

 

  
  return (

    <div className='container mx-auto  grid     min-h-screen grid-cols-1'>
        
  <div  className='flex flex-col  items-center'>
        <div className='flex flex-row justify-center h-5 mt-10 items-center'>
         <p className='text-cneter text-2xl font-mono'>{t("text:Your request has been sent successfully")}</p>
     <MdVerifiedUser color='green' size={100}></MdVerifiedUser>
    
  
</div>
<Button href='/orders' className='mt-10' >My orders</Button>  
     </div> 
 



  
    </div>
  )
}

export default About
