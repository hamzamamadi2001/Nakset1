
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState, useEffect } from "react";

import {  Text } from "@nextui-org/react";
import { Button,TextInput,Carousel,Footer } from "flowbite-react";
import { SocialIcon } from 'react-social-icons';

import Card from '../components/CardCat'
import Image from 'next/image'
import {useSession} from 'next-auth/react'
import { Result } from "postcss";



export default function Home({result}) 
{
  const [EmailList, setEmailList] = useState("");
console.log("this is result",result)
  

  // useEffect(() => {

 
   
  // },[]);

  const {data:session}= useSession()
  console.log(session)
  return(
<div>

  {/*
<div className='flex flex-wrap relative  mx-auto'>
  <div className=' m-auto w-full h-full sm:w-full sm:max-w-5xl'>
  <Image src='/Nakseth.png' className='w-full h-full' width={700} height={700}   />
  </div> 
  <div className='sm:absolute sm:left-1/2 sm:bottom-1/2 sm:translate-y-1/2 sm:-translate-x-1/2 backdrop-filter backdrop-blur-sm  w-full bg-zinc-800 bg-opacity-30 h-full   m-auto flex  flex-wrap md:flex-col justify-center content-center items-center'>
   <Image src='/logo.png'  width={300} height={300}   /> 
  <div className='bg-black bg-opacity-60 rounded-md w-full pb-4 flex flex-col justify-center items-center'> 
   <Text
    className='text-base sm:text-2xl lg:text-4xl bg-slate-50 font-rubik' 
     h6
     size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        The place where you find
      </Text>
       
      <Text

className='text-lg sm:text-4xl font-rubik '
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        HALAL food
      </Text>
      </div>
      <div className='flex'>

          <Link href='Products'><Button
      size="xl"
      className='m-3'
      outline={true}
      
      gradientDuoTone="purpleToBlue"
    >
       <Text className='text-xl font-lor  '>Order now</Text>
    </Button ></Link>
    <Link href='Products'><Button
      size="xl"
      className='m-3 hover:text-white'
      outline={true}
      
      gradientDuoTone="purpleToBlue"
    >
    <Text className='text-xl font-lor   '>More about us</Text>
    </Button></Link>
    
      </div>
    
      
  </div>
</div>
*/}

<div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={400}>
  <Image src='/2.jpg'   width={1000} height={300}  loading="lazy" />
  <Image src='/3.jpg'  width={1000} height={300}  loading="lazy" />
   <Image src='/1.jpg'   width={1000} height={300} loading="lazy"  />
  </Carousel>
</div>
 






<section className='container mx-auto flex flex-col justify-between items-center  text-center '>
<div className='text-center mt-10 mb-10 flex flex-col justify-center items-center'>
<p className= 'text-5xl md:text-8xl font-tar  my-2  border-solid border-black border-b-4 w-fit rounded-xl'>How it works</p>
</div>

<div className='flex flex-col sm:flex-row container mx-auto justify-center items-center align-middle '>
      <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>
     
      <div className='flex flex-col justify-center items-center'>
      <Image src='/lahm.svg' width={100} height={100}   />
      <p className='text-3xl text-center text-red-800'>Choose Your Favorite</p>

     
      </div>
      <div className='w-1/2'>
    <p className='text-2xl text-gray-700'>Choose your favorite Hala food and order online </p>
      </div>
    </div>

    <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>
     
      <div className='flex flex-col justify-center items-center'>
      <Image src='/deliv.svg' width={100} height={100}    />
      <p className='text-3xl text-center text-red-800'>We Deliver Your Meals</p>

     
      </div>
      <div className='w-1/2'>
    <p className='text-2xl text-gray-700'>We prepared and delivered meals arrive at your door.</p>
      </div>
    </div>

    <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>
     
      <div className='flex flex-col justify-center items-center'>
      <Image src='/grill.svg' width={100} height={100}     />
      <p className='text-3xl text-center text-red-800'>Enjoy Halal food</p>

     
      </div>
      <div className='w-1/2'>
    <p className='text-2xl text-gray-700'>Enjoy with the best Halal food in europe and order more</p>
      </div>
    </div>
</div>

</section>


<section className='bg-gray-300   mx-auto break-all  '>
<div className='text-center mt-10 mb-10 flex flex-col justify-center items-center'>
<p className='text-5xl md:text-8xl font-tar  my-2  border-solid border-black border-b-4 w-fit rounded-xl'>Our categories</p>
</div>
<div className='flex w-full flex-row sm:flex-row-reverse flex-wrap justify-evenly items-center'>
  
{result.map((res) => (
<Card key={res.id} src={res.photo}  title={res.name} id={res.id}></Card>

         
      ))}
</div>
</section>

<section className='bg-gray-100     break-all  '>
<div className='text-center   flex flex-col justify-center items-center'>
<p className='text-5xl md:text-8xl font-tar  my-2  border-solid border-black border-b-4 w-fit rounded-xl'>Our Mailing List</p>
</div>
<p className="text-center text-gray-600">Be the first to hear about pormotions, upcaming sales, and product events</p>
 <div className="flex-col flex-wrap container mx-auto mt-10  2/4 flex md:flex-row justify-center">
         
        <TextInput
        className="md:w-1/2"
          id="Email"
          type="Email"
          placeholder="your Email"
          required={true}
          shadow={true}
          onChange={(e)=>{setEmailList(e.target.value)}}
        />      <Button   className=''  >
 <p>Join now</p>

    </Button>
      </div>

 </section>


 <section className='bg-white   mx-auto break-all  '>
<div className='text-center   flex flex-col justify-center items-center'>
<p className='text-5xl md:text-8xl font-tar  my-2  border-solid border-black border-b-4 w-fit rounded-xl'>Social</p>
</div>
<p className="text-center text-gray-600">you can find us here </p>
          
 <div className="  flex flex-wrap  content-center place-items-center self-center justify-center   sm:mt-0 sm:justify-center items-center  ">
         <SocialIcon className="m-3" url="https://twitter.com" ></SocialIcon>
         <SocialIcon className="m-3" url="https://facebook.com" ></SocialIcon>
         <SocialIcon className="m-3" url="https://www.linkedin.com/in/hamza-mammadi-303a35247/" ></SocialIcon>
         <SocialIcon className="m-3" url="https://www.instagram.com" ></SocialIcon>
         <SocialIcon  className="m-3" url="https://www.tiktok.com" ></SocialIcon>
         <SocialIcon className="m-3" url="https://hu.pinterest.com/" ></SocialIcon>
         <SocialIcon className="m-3" url="https://www.twitch.com/" ></SocialIcon>
         <SocialIcon className="m-3" url="https://www.whatsapp.com/" ></SocialIcon>







       </div>

 </section>

</div>
       
        )
}
export async function getServerSideProps(context) {
  //replace the url with this before uploading it to  the server "https://nakset.vercel.app/api/listCategories"
    let response = await fetch("https://nakset.vercel.app/api/listCategories")

let result = await response.json()
 console.log(result)
 

return {
  props: { result }, // will be passed to the page component as props
}

}
