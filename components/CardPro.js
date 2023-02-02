import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import { MdAddShoppingCart } from 'react-icons/md';

 import { useSelector, useDispatch } from 'react-redux'
import { addProduct, adjustQuantity,removeProduct } from '../slices/CounterSlice'


 import {Card}from "flowbite-react";
 import { Badge,Navbar,Dropdown,Avatar,Button } from "flowbite-react";

function CardCat({src,title,id,price,unit,baseQuantity}) {
   const dispatch = useDispatch()
  const items = useSelector((state) => state.counter)
  
  const [value, setValue] = useState(1);

  const handleChange = event => {
    
    const result = event.target.value.replace(/\D/g, '');
if(Number(result) <=1)
     { setValue(1)}
     else{
        setValue(Number(result));
     }
    
  };

  
  // 👇️ validation
  if (value !== '') {
    const num = Number(value);
    // 👉️ submit form
  }
  return (
     
      
     <div className=' w-26 m-auto   my-4 border-black border-2 shadow-sm-light shadow-black  bg-white flex flex-col justify-center items-center rounded-lg' >
      <Image src={src} width={100} height={150}></Image>
    <h6 className="text-lg text-center font-bold font-oleo tracking-tight text-gray-900 dark:text-white">
    {title}
    </h6>
     
    <h4>{(Math.round( price*parseFloat(items.currencyValue)* 100) / 100).toFixed(2)+" "+items.Symbol}</h4>
    <p className="font-normal text-center text-gray-800  ">
      for {baseQuantity} {unit}
    </p>
    <div className='w-full flex justify-center items-center'>
    <AiFillMinusCircle onClick={()=>{if(value<=1) {setValue(1)}else { setValue(value=>value-1)}}} size={30}></AiFillMinusCircle>
    <input
    className='w-24'
        type="text"
        placeholder="quantity"
        value={(Math.round( value*parseFloat(baseQuantity)* 100) / 100).toFixed(2)}
        onChange={handleChange}
      />
      <AiFillPlusCircle onClick={()=>{   setValue(value=>value+1)}}   size={30}></AiFillPlusCircle>
</div>
<Button onClick={()=>{dispatch(addProduct({id:id,price:price*value,name:title,weight:unit,photo:src,quantity:value,priceUnit:price,baseQuantity:baseQuantity}))}}  className='m-2' >
      <MdAddShoppingCart   />
      Add to cart
    </Button>
  </div>
   )
}

export default CardCat