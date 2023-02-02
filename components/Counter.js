import React ,{useState,} from 'react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';



function About() {
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
     
<div className='flex flex-row items-center '>
    <AiFillMinusCircle onClick={()=>{if(value<=1) {setValue(1)}else {setValue(value=>value-1)}}} size={30}></AiFillMinusCircle>
    <input
    className='w-24'
        type="text"
        placeholder="quantity"
        value={value}
        onChange={handleChange}
      />
      <AiFillPlusCircle onClick={()=>{console.log(value+1); setValue(value=>value+1)}}   size={30}></AiFillPlusCircle>
</div>

 



       
  )
}

export default About
