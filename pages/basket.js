import React ,{useState,} from 'react'
import {useSession,getSession} from 'next-auth/react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import Counter from '../components/CartBbasket'
import { useSelector, useDispatch } from 'react-redux'


function About() {
    const count = useSelector((state) => state.counter.value)

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
    <div className='container mx-auto grid grid-flow-row grid-cols-3'>
        <div className='bg-red-500 col-span-2 h-screen'> EWSS {count}
        <Counter name="hamza" price={10} currency="$" weight="Kg" baseQuantity="0.5"></Counter>
        <Counter name="hello" price={5} currency="$" weight="g" baseQuantity="1"></Counter>

        </div>
        <div className='bg-blue-500  col-span-1'>this is test</div>




    </div>
  )
}

export default About
