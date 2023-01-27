import React from 'react'
import {  TextInput } from "flowbite-react";
import { BiSearchAlt } from 'react-icons/bi';
  import  Card from '../components/CardPro'
   
function About({result}) {
 
  return (
 
    
    <div className='container  mx-auto bg-slate-400'>
    
    <div className='w-full h-60 bg-red-600'></div>
    <div className= 'bg-green-600 flex justify-center items-center '>
     
 
  <TextInput
  className='max-w-md w-full m-10 '
  
    id="email4"
    type="email"
    placeholder="search for a product"
    required={true}
    icon={BiSearchAlt}
  />
    </div>

    <div className='w-full h-screen bg-white-600 md:grid gap-0 md:grid-cols-3 grid grid-cols-1'>
    <div className='w-full  bg-yellow-600 h-full'>
      <p>filter section</p>
    </div>
    <div className='w-full h-full bg-black col-span-2 gap-0 '>

    <div className='flex flex-col sm:flex-row-reverse flex-wrap justify-evenly items-center'>
  
  {result.map((res) => (
  <Card key={res.id} src={res.photo}  title={res.name} unit={res.unit} price={res.price} id={res.id} baseQuantity={res.baseQuantity}></Card>
  
           
        ))}
  </div>
     
    </div>
    
    </div>

    </div>
   )
}
 
export default About