import React ,{useState,useEffect} from 'react'
import { Button} from "flowbite-react";
import {useSession,getSession} from 'next-auth/react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import CardBasket from '../components/CartBbasket'
import { useSelector, useDispatch } from 'react-redux'
import { ImLocation2 } from 'react-icons/im';
import { TbMoodEmpty } from 'react-icons/tb';
import Bay from './pay'
import Image from 'next/image'


import {Table}from "flowbite-react";

 
ImLocation2

function About() {


  const {data:session,status}= useSession()
const [adress, setAdress] = useState([]);

  useEffect(() => {
    

    
   
 
if(session){
  async function fetchText() {
  let response = await fetch('https://nakset.vercel.app/api/useradress',{method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify({id:session.id})});
 

  if (response.status === 200) {
      let data = await response.json();
      setAdress(data)
       
  }
}

fetchText();
}


}, [session]);











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

  console.log(value);
  console.log(typeof value);
  console.log(Number(value));

  // 👇️ validation
  if (value !== '') {
    const num = Number(value);
    // 👉️ submit form
  }
  if(status=="loading"){
    return (
      <div className="flex justify-center items-center animate-bounce h-screen w-screen">      <Image src="/logo.png" width="100"height="100" ></Image>
</div>
    )
  }
  return (
    <>
            <p className='text-center text-8xl font-tar font-black '> your cart </p>

    <div className='container mx-auto mt-20 grid grid-flow-row gap-1 min-h-screen grid-cols-1 md:grid-cols-3'>
        
<div className=' col-span-2 rounded-2xl '> 
                 {items.length>0?(<>
      {session &&  <div>       
        <div className='/*Adress section*/ w-full p-2 border-blue-700 border-solid border-2 rounded-lg  '>
        <p className='text-2xl font-mono font-black '>adress of shipping</p>
        <div className='felx  w-full items-center flex-row'>
             
        <div className='   mb-3 flex justify-between items-center'>
{adress.length>0?(        <p  className='text-base md:text-2xl font-medium'>{adress[0].country+','+adress[0].city+','+adress[0].postal+','+adress[0].street}</p>
):<p>no adress exist go to your profile and add your address first</p>}        <Button href='profile' >
        <ImLocation2 color='red' size={20} />
         change your adress
        </Button>
        </div> 
          
        {/* <Button >
      <ImLocation2 color='red' size={20} />
      change adress
    </Button>   */}
     </div>
        </div> 
       
 </div>  }
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
         </Table> </>):(
<div className='flex flex-col justify-center items-center'>
         <p className='text-cneter text-2xl font-mono'>Your cart is empty</p>
     <TbMoodEmpty color='gray' size={100}></TbMoodEmpty>
     </div>    
         )}
        </div>
        <div className='  col-span-1'>
            <div className='w-full p-4 rounded-2xl bg-slate-400'>
                <p className='text-center text-white text-2xl'>Summary</p>
               <div className='px-4  mb-3 flex justify-between items-center'><p  className='text-2xl font-medium'>subtotal:</p><p>{(Math.round( totalPrice*currencyValue * 100) / 100).toFixed(2)+" "+symbol}</p></div> 
               <div className=' px-4 mb-3 flex justify-between items-center'> <p  className='text-2xl font-medium'>Delivery:</p><p>{totalPrice*currencyValue+" "+symbol}</p></div>
                <hr className='bg-gray-500 w-full h-1' ></hr>


                <div className=' px-4 mb-3 flex justify-between items-center'> <p>Total amount:</p><p className='text-2xl font-medium'>{(Math.round( totalPrice*currencyValue * 100) / 100).toFixed(2)+symbol }</p></div>
            </div>
            <div className='w-full p-4 mt-5 rounded-2xl bg-slate-500'>
             {session&&adress.length>0&&<Bay ></Bay>}
            </div>
            

            
             </div>




    </div>
    </>
  )
}

export default About
 