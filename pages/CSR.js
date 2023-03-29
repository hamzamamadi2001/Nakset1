import React from 'react'
import Image from "next/image"
import Button from '@mui/material/Button';
import ReactPlayer from 'react-player'
import Link from 'next/Link';

function About() {
  return (
    <div className='flex justify-center items-center flex-col'>
 <p className='text-center font-bold text-5xl p-20'>Our CSR policy</p>
 <section className="        grid lg:grid-cols-4 grid-cols-2">
    <Link  className="relative  h-72  overflow-hidden" href="#To our customers">
 
<Image src="/csr2.jpg" className="hover:scale-125 ease-linear duration-100 " fill  ></Image>
 
</Link>



<Link  className="relative   h-72  overflow-hidden" href="#To the environment">

<Image src="/csr1.jpg" className="hover:scale-125 ease-linear duration-100 " fill  ></Image>

</Link>
<Link  className="relative  h-72  overflow-hidden" href="#To the society">

<Image src="/csr3.jpg" className="hover:scale-125 ease-linear duration-100 " fill  ></Image>

</Link>

<Link  className="relative w-64 h-72  overflow-hidden" href="#To our staff">

<Image src="/csr4.jpg" className="hover:scale-125 ease-linear duration-100 " fill  ></Image>

</Link>
</section>




<section id="To our customers" style={{maxWidth:"800px"}} className='flex justify-evenly p-5  items-center flex-col'>
    <p className='text-center text-2xl font-bold p-10'>To our customers</p>
    <p className='break-words font-bold leading-loose '>We believe that our consumers need to be mindful of the safety and quality of the products we’re providing. Hence, we’re putting transparency as our first value, which also represents our first responsibility towards our consumers.
<br/><br/>


We are truly proud of the high-quality brands we provide to our customers, and we work hard to ensure their availability on the European scale, and that people who enjoy our products around Europe have access to them.
<br/><br/>



Since the business environment nowadays is instable more than ever, we’re in constant presence in the market and in a continuous improvement in order to serve the highest standard of products and perfectly answer our consumers’ specific wants. 
<br/><br/>

</p>
</section>





<section id="To the environment" style={{maxWidth:"800px"}} className='flex justify-evenly p-5 items-center flex-col'>
    <p className='text-center text-2xl font-bold p-10'>To our customers</p>
    <p className='break-words font-bold leading-loose '>We believe that our consumers need to be mindful of the safety and quality of the products we’re providing. Hence, we’re putting transparency as our first value, which also represents our first responsibility towards our consumers.
<br/><br/>


We are truly proud of the high-quality brands we provide to our customers, and we work hard to ensure their availability on the European scale, and that people who enjoy our products around Europe have access to them.
<br/><br/>



Since the business environment nowadays is instable more than ever, we’re in constant presence in the market and in a continuous improvement in order to serve the highest standard of products and perfectly answer our consumers’ specific wants. 
<br/><br/>

</p>
</section>



<section id="To the society" style={{maxWidth:"800px"}} className='flex justify-evenly p-5 items-center flex-col'>
    <p className='text-center text-2xl font-bold p-10'>To our customers</p>
    <p className='break-words font-bold leading-loose '>We believe that our consumers need to be mindful of the safety and quality of the products we’re providing. Hence, we’re putting transparency as our first value, which also represents our first responsibility towards our consumers.
<br/><br/>


We are truly proud of the high-quality brands we provide to our customers, and we work hard to ensure their availability on the European scale, and that people who enjoy our products around Europe have access to them.
<br/><br/>



Since the business environment nowadays is instable more than ever, we’re in constant presence in the market and in a continuous improvement in order to serve the highest standard of products and perfectly answer our consumers’ specific wants. 
<br/><br/>

</p>
</section>






<section id="To our staff" style={{maxWidth:"800px"}} className='flex justify-evenly p-5 items-center flex-col'>
    <p className='text-center text-2xl font-bold p-10'>To our customers</p>
    <p className='break-words font-bold leading-loose '>We believe that our consumers need to be mindful of the safety and quality of the products we’re providing. Hence, we’re putting transparency as our first value, which also represents our first responsibility towards our consumers.
    <br/><br/>



We are truly proud of the high-quality brands we provide to our customers, and we work hard to ensure their availability on the European scale, and that people who enjoy our products around Europe have access to them.

<br/><br/>


Since the business environment nowadays is instable more than ever, we’re in constant presence in the market and in a continuous improvement in order to serve the highest standard of products and perfectly answer our consumers’ specific wants.
</p>
</section>

    </div>
  )
}

export default About