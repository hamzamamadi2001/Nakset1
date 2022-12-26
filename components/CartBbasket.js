import { DECIMAL } from 'mysql/lib/protocol/constants/types';
import React ,{useState,} from 'react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { adjustQuantity, removeProduct} from '../slices/CounterSlice'
import {Table}from "flowbite-react";


function About({price,src,name,currency,baseQuantity,weight,idx,quantity}) {
    const gprice = useSelector((state) => state.counter.items[idx].price)

   const dispatch = useDispatch()
    const [value, setValue] = useState(quantity);

  const handleChange = event => {
    
    const result = event.target.value.replace(/\D/g, '');
if(Number(result) <=1)
     { setValue(1)
        dispatch(adjustQuantity({quantity:1,idx:idx}))

    }
     else{
        setValue(Number(result));

        dispatch(adjustQuantity({quantity:Number(result),idx:idx}))

     }
   };

 

  // 👇️ validation
  if (value !== '') {
    const num = Number(value);
    // 👉️ submit form
  }
  return (
    


              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell>
     <Image src={src} width="100" height='100'></Image> 
 
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      <p className='text-black text-base text-center '>{name}</p>
      </Table.Cell>
      <Table.Cell>
      <p className='text-black text-2xl    text-center'>{parseFloat(price)+currency+" for "+baseQuantity+" "+weight}</p>

      </Table.Cell>
      <Table.Cell className='flex justify-center  items-center'>
     <AiFillMinusCircle onClick={()=>{if(value-1<1) {setValue(1);dispatch(adjustQuantity({quantity:1,idx:idx})) }else {dispatch(adjustQuantity({quantity:value-1,idx:idx}));setValue(value-1) }}} size={30}></AiFillMinusCircle>
    <input
    className='w-24'
        type="text"
        placeholder="quantity"
        value={value*baseQuantity}
        onChange={handleChange}
      />
      <AiFillPlusCircle onClick={()=>{  dispatch(adjustQuantity({quantity:value+1,idx:idx}));setValue(value+1);}}   size={30}></AiFillPlusCircle>
       </Table.Cell>
      <Table.Cell>
      <p className=' text-black text-2xl  text-center'>{gprice+currency}</p>
      </Table.Cell>
      <Table.Cell className='flex justify-center  items-center   ' >

      <AiFillDelete cursor='pointer'  onClick={()=>dispatch(removeProduct({idx:idx}))} color='red' size={20}></AiFillDelete>

      </Table.Cell>
    </Table.Row>



 


           
           
         
        

 

     
  )
}

export default About
