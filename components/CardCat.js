import React from 'react'
import Link from 'next/link'
 import {Card}from "flowbite-react";
 import { Badge,Navbar,Dropdown,Avatar,Button } from "flowbite-react";

function CardCat({src,title,id}) {
  return (
    <Link href={{pathname:'./Details',query:{id:id}}}>
    <Card className='hover:-translate-y-6 duration-500 mx-3 mb-10  w-64 ' imgSrc={src} >
    <h5 className="text-lg text-center font-bold font-oleo tracking-tight text-gray-900 dark:text-white">
    {title}
    </h5>
    <p className="font-normal text-gray-800 ">
      Here are the discription of the categorie and some names of main products
    </p>
  </Card>
  </Link>
  )
}

export default CardCat
