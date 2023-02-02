import React ,{useState,} from 'react'
import { Button} from "flowbite-react";
import {useSession,getSession} from 'next-auth/react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import CardBasket from '../components/CartBbasket'
import { useSelector, useDispatch } from 'react-redux'
import { ImLocation2 } from 'react-icons/im';
import { MdVerifiedUser } from 'react-icons/md';
import useTranslation from 'next-translate/useTranslation'


import {Table}from "flowbite-react";

 
 

function About() {
    const {t} = useTranslation()

    const items = useSelector((state) => state.counter.items)
    const symbol = useSelector((state) => state.counter.Symbol)
    const currencyValue = useSelector((state) => state.counter.currencyValue)

    const totalPrice = useSelector((state) => state.counter.totalPrice)


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

    <div className='container mx-auto  grid     min-h-screen grid-cols-1'>
        
  <div  className='flex flex-col  items-center'>
        <div className='flex flex-row justify-center h-5 mt-10 items-center'>
         <p className='text-cneter text-2xl font-mono'>{t("text:Your request has been sent successfully")}</p>
     <MdVerifiedUser color='green' size={100}></MdVerifiedUser>
    
  
</div>
<Button href='/orders' className='mt-10' >My orders</Button>  
     </div> 
{/* <div>
        <Table striped={true}>
  <Table.Head>
  <Table.HeadCell className='text-center'>
      Product image
    </Table.HeadCell>
    <Table.HeadCell className='text-center'>
      Product name
    </Table.HeadCell>
    <Table.HeadCell className='text-center'>
      price
    </Table.HeadCell>
    <Table.HeadCell className='text-center'>
      Category
    </Table.HeadCell>
    <Table.HeadCell className='text-center'>
      subtotal
    </Table.HeadCell>
    <Table.HeadCell className='text-center'>
       Delete
    </Table.HeadCell >
  </Table.Head>
  <Table.Body className="divide-y">  
        {items.map((res,index) => (
<CardBasket key={res.id} src={res.photo}  name={res.name} id={res.id} weight={res.weight} quantity={res.quantity}  price={res.priceUnit} baseQuantity={res.baseQuantity} idx={index} currencyValue={parseFloat(currencyValue)} currency={symbol}></CardBasket>

         
      ))}
         </Table.Body>
         </Table> 
   
        
         </div> */}



  
    </div>
  )
}

export default About
