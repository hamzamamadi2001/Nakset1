import React ,{useState,} from 'react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/CounterSlice'


function About({price,name,currency,baseQuantity,weight}) {
    const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
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
  return (
    <div >
        
        <div className='bg-white h-96 w-full flex flex-row rounded-2xl'>
            <div className='h-full w-1/3 bg-black'>this is for photo</div>
            <div className='relative h-full w-2/3 bg-green-500'>
<p className='text-black text-6xl mb-5'>{price+currency+" for "+baseQuantity+" "+weight}</p>
<p className='text-black text-6xl'>{name}</p>

<div className='w-full flex justify-center items-center'>
    <AiFillMinusCircle onClick={()=>{if(value<=1) {setValue(1)}else { dispatch(decrement())}}} size={30}></AiFillMinusCircle>
    <input
    className='w-24'
        type="text"
        placeholder="quantity"
        value={value}
        onChange={handleChange}
      />
      <AiFillPlusCircle onClick={()=>{console.log(value+1);  dispatch(increment())}}   size={30}></AiFillPlusCircle>
</div>

 
<p className=' text-black text-4xl mb-5 absolute right-1 bottom-0'>price {value*price+" "+currency}</p>


            </div>
         </div>
         
        

<hr className='bg-gray-500 w-full h-1' ></hr>


    </div>
  )
}

export default About
