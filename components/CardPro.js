import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

 import {Card}from "flowbite-react";
 import { Badge,Navbar,Dropdown,Avatar,Button } from "flowbite-react";

function CardCat({src,title,id,price,unit}) {
  return (
    <Link href={{pathname:'./Details',query:{id:id}}}>
      
     <div className='hover:-translate-y-6 duration-500 mx-3   bg-white flex flex-col justify-center items-center rounded-lg' >
      <Image src={src} width={150} height={200}></Image>
    <h5 className="text-lg text-center font-bold font-oleo tracking-tight text-gray-900 dark:text-white">
    {title}
    </h5>
    <p className="font-normal text-center text-gray-800  ">
      price{price}HUF for {unit}
    </p>
  </div>
  </Link>
  )
}

export default CardCat