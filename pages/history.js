import React from 'react'
import Image from "next/image"
import Button from '@mui/material/Button';
import ReactPlayer from 'react-player'

function About() {
  return (
    <div>

<section className='container mx-auto  '>
<p className='text-center font-bold text-3xl  p-20'>Our history</p>
<section className='grid lg:grid-cols-3 '>
<div className='lg:col-span-2 p-10 order-2 lg:order-1 ' >
  <div className='flex justify-start items-center'>
    <p className='text-black font-bold text-5xl'>Additional Information</p>
  </div>
   
    <p className='break-words space-y-3 text-lg mt-10'>
    This is a long form text area designed for your content that you can fill up with as many words as your heart desires. You can write articles, long mission statements, company policies, executive profiles, company awards/distinctions, office locations, shareholder reports,–<br/> whitepapers, media mentions and other pieces of content that don’t fit into a shorter, more succinct space.

    –<br/>–<br/>
Articles – Good topics for articles include anything related to your company –<br/> recent changes to operations, the latest company softball game – or the industry you’re in. General business trends (think national and even international) are great article fodder, too.
–<br/>–<br/>


Mission statements – You can tell a lot about a company by its mission statement. Don’t have one? Now might be a good time to create one and post it here. A good mission statement tells you what drives a company to do what it does.

–<br/>–<br/>

Company policies – Are there company policies that are particularly important to –<br/> your business? Perhaps your unlimited paternity/maternity leave policy has endeared you to employees across the company. This is a good place to talk about that.

–<br/>–<br/>

Executive profiles – A company is only as strong as its executive leadership. This is a good place to show off who’s occupying the corner offices. Write a nice bio about each executive that includes what they do, how long they’ve been at it, and what got them to where they are.
    </p>
  

</div>

<div className='lg:col-span-1 relative order-1 lg:w-96 lg:h-1/2     w-full h-screen '>
    <Image src='/rs=w_400,cg_true,m.webp' className='p-10'  fill></Image>
 </div>



</section>





<section>

<section className='flex flex-wrap flex-row'>
  
<img src='/11.jpg' className='p-40 '></img>
  

  <div className='flex flex-col w-full justify-center items-center'>
<p className='font-bold text-4xl text-black text-center'>2013</p>
<p className='text-2xl text-black text-center'>what is the point of your commerce offers</p>
  </div>
</section>


<section className='flex flex-wrap flex-row-reverse'>
  <div>
<img src='/22.jpg' className='p-40 '></img>
  </div>

  <div className='flex flex-col  w-full justify-center items-center'>
<p className='font-bold text-4xl text-black text-center'>2015</p>
<p className='text-2xl text-black text-center'>what is the point of your commerce offers</p>
  </div>
</section>

<section className='flex mb-10 flex-wrap flex-row '>
  <div>
<img src='/33.jpg' className='p-40 '></img>
  </div>

  <div className='flex flex-col w-full justify-center items-center'>
<p className='font-bold text-4xl text-black text-center'>2017</p>
<p className='text-2xl text-black text-center'>what is the point of your commerce offers</p>
  </div>
</section>

 

</section>


{/* 
<p className='text-center text-black font-bold text-4xl'>Video</p>
<div className='my-20'>
<ReactPlayer width="100%"   url='https://www.youtube.com/watch?v=wWgIAphfn2U' />

</div> */}

</section>


<section className='w-full p-20 bg-black'>
  <div className='flex flex-col'>
    <p className='flex justify-start text-3xl items-center text-start text-white'>© 2023 Nakset.  All rights reserved.</p>
    <p className=' text-center text-2xl text-white'>privacy policy</p>

  </div>
</section>






















    </div>
  )
}

export default About