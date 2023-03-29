
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState, useEffect } from "react";
import useTranslation from 'next-translate/useTranslation'
 import {  Carousel,Textarea } from "flowbite-react";
import { SocialIcon } from 'react-social-icons';
  import Image from 'next/image'
import {useSession} from 'next-auth/react'
import Button from '@mui/material/Button';
 import ReactPlayer from 'react-player'

export default function Home({result})
{
    const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const {t} = useTranslation()

 
  
  const validName = (name) => {
    var name = name.replace(/^[ ]+/g, "");
    if(name.length==0 || name=="" || name==null || name==undefined ||   name==" " ) {return false}
    return true
  };
  
  const validMessage = (message) => {
    var name = message.replace(/^[ ]+/g, "");
    if(name.length==0 || name=="" || name==null || name==undefined ||   name==" " ) {return false}
    return true

  };
  const sendMessage =async () => {

    if(!validateEmail(email)||!validName(name)||!validMessage(message))
    {
      return 
    }
          
          let response = await fetch("https://nakset1.vercel.app/api/sendMessage",{method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({email:email,name:name,message:message})});
               let result = await response.json(response);
     
        };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 
 


  const validateEmail = (email) => {
    var result = String(email)
      .toLowerCase()
      .match(
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/   );
        if(result==null)  {   return false}
        else{ return true}

  };
  
   
    
 
  



   const [email, setEmailList] = useState("");


 

  // useEffect(() => {



  // },[]);

  const {data:session}= useSession()
   return(
<div>
 
<Carousel slideInterval={5000} className="relative"

leftControl=" "
rightControl=" "

indicators={false}


>

<div   className=" relative   flex justify-center items-center">

  
    <img src="./testing11.jpg" style={{height:"100"}} height="500"className="w-full h-1/2 md:h-screen  "      />
<div className="absolute w-full h-full flex justify-end  items-start m-10 flex-col backdrop-filter b     bg-black  bg-opacity-30     ">
 <div className=" absolute bottom-20 left-72">
 <p className="   text-white font-bold text-base sm:text-5xl md:text-7xl ">"A taste felt in hearts"</p>

 </div>

  
  
</div >
 

</div>


<div   className=" relative   flex justify-center items-center">

  
    <img src="./5.jpg" style={{height:"100"}} height="500"className="w-full h-1/2 md:h-screen  "      />
<div className="absolute w-full h-full flex justify-end  items-start m-10 flex-col backdrop-filter b     bg-black  bg-opacity-60     ">
<div className=" absolute bottom-20 left-72">
 <p className="   text-white font-bold text-base sm:text-5xl md:text-7xl ">"A taste felt in hearts"</p>

 </div> 

  
  
</div >
 

</div>




<div   className=" relative   flex justify-center items-center">

  
    <img src="./3.jpg" style={{height:"100"}} height="500"className="w-full h-1/2 md:h-screen  "      />
<div className="absolute w-full h-full flex justify-end  items-start m-10 flex-col backdrop-filter b     bg-black  bg-opacity-60     ">
<div className=" absolute bottom-20 left-72">
 <p className="   text-white font-bold text-base sm:text-5xl md:text-7xl ">"A taste felt in hearts"</p>

 </div> 
  
  
</div >
 

</div>



<div   className=" relative   flex justify-center items-center">

  
    <img src="./1.jpg" style={{height:"100"}} height="500"className="w-full h-1/2 md:h-screen  "      />
<div className="absolute w-full h-full flex justify-end  items-start m-10 flex-col backdrop-filter b     bg-black  bg-opacity-60     ">
<div className=" absolute bottom-20 left-72">
 <p className="   text-white font-bold text-base sm:text-5xl md:text-7xl ">"A taste felt in hearts"</p>

 </div> 
  
  
</div >
 

</div>
</Carousel>

<section className="flex justify-center items-center">

  <iframe src="https://player.vimeo.com/video/805646193?h=bed2fe7405&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className="w-96   md:h-screen md:p-32  md:w-screen  h-96" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Nakset Video.mp4"></iframe>
 </section>

<section className="">
<div    className=" relative w-full h-96  flex justify-center items-center">

  
     <Image src="/ourProducts.jpg" fill ></Image>
 
<div className="absolute w-full h-full flex justify-center flex-col items-center backdrop-filter b     bg-black  bg-opacity-40     ">
<p className="  text-center text-white font-bold text-3xl sm:text-5xl md:text-5xl w-1/2">Are your cravings calling ?</p>
<button      className="bg-white mt-5 flex items-center justify-center text-black md:w-1/5 w-1/2 h-10 md:text-3xl font-bold font-titan rounded-full p-10">See our products</button>




</div >


</div>
 </section>

<section className=" mt-20 mx-20   flex justify-center items-center flex-wrap gap-10">
<div className="   overflow-hidden">
<Image src="/nakset.jpeg" className="hover:scale-125 ease-linear duration-100 " width="300" height="200"  ></Image>

</div>
<div className="    overflow-hidden">
<Image src="/nakset.jpeg" className="hover:scale-125 ease-linear duration-100 " width="300" height="200"  ></Image>

</div>
</section>
<section className="flex justify-center items-center">
<div className=" mt-20 mx-20 w-1/2 h-96 lg:h-screen relative  flex justify-center items-center flex-wrap gap-10">
<Image src="/network.webp"  fill  ></Image>

</div>
</section>

 
 {/* <section className='container mx-auto flex flex-col justify-between items-center  text-center mt-48'>
<div className='text-center mt-10 mb-10 flex flex-col justify-center items-center'>
<p className= 'text-5xl md:text-8xl font-tar  my-2  border-solid border-black border-b-4 w-fit rounded-xl'>Our goals</p>
</div>

<div className='flex flex-col sm:flex-row container mx-auto justify-center items-center align-middle '>
      <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <Image src='/mission.png' width={150} height={150}   />
      <p className='text-3xl text-center text-black'>Mission</p>


      </div>
      <div className='w-1/2'>
    <p className='text-2xl text-gray-700'>{t("text:P-choose your favorite")}</p>
      </div>
    </div>

    <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <Image src='/values.png' width={150} height={150}    />
      <p className='text-3xl text-center text-black'>Values</p>


      </div>
      <div className='w-1/2'>
    <p className='text-2xl text-gray-700'>{t("text:P-we deliver your meals")}</p>
      </div>
    </div>

    <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <Image src='/vision.png' width={150} height={150}     />
      <p className='text-3xl text-center text-black'>Vision</p>


      </div>
      <div className='w-1/2'>
    <p className='text-2xl text-gray-700'>{t("text:P-enjoy halal food")}</p>
      </div>
    </div>
</div>

</section> */}



{/* <section className='bg-gray-100     break-all  '>
<div className='text-center   flex flex-col justify-center items-center'>
<p className='text-5xl md:text-8xl font-tar  my-2  border-solid border-black border-b-4 w-fit rounded-xl'>{t("text:our mailing list")}</p>
</div>
<p className="text-center text-gray-600">{t("text:P-our mailing list")}</p>
 <div className="flex-col flex-wrap container mx-auto mt-10  2/4 flex md:flex-row justify-center">

        <TextInput
        className="md:w-1/2"
          id="Email"
          type="Email"
          placeholder="your Email"
          required={true}
          shadow={true}
          onChange={(e)=>{setEmailList(e.target.value)}}
        />      <Button variant="contained" className="bg-pink-900 mx-5"  onClick={()=>{handelEmail()}}  >
 <p>{t("text:join now")}</p>

    </Button>
      </div>
{emailError?<p className="bg-gray-300 text-red-700 my-10 font-bold text-center ">wrong email address </p>:(<></>)}
 </section> */}


 <section className="flex justify-center  flex-row flex-wrap items-center    ">

 <div id="contact" className="flex flex-row  flex-wrap justify-center items-end md:w-1/2 lg:mt-48 mt-10 col-span-3">
      
<p className='text-center text-black text-5xl md:text-8xl font-tar    '>{t("text:contact us")}</p>
  
         
          <input
                   style={{borderTop:"0px solid white",borderBottom:"1px solid black",borderRight:"0px solid white",borderLeft:"0px solid white",}}
                   className= "mb-5 w-full "
           id="Email"
           type="text"
           placeholder={t("text:your name")}
           required={true}
           shadow={true}
           onChange={(e)=>{setName(e.target.value)}}
         />
         <input
                   style={{borderTop:"0px solid white",borderBottom:"1px solid black",borderRight:"0px solid white",borderLeft:"0px solid white",}}

         className= "mb-5 w-full"
           id="Email"
           type="Email"
           placeholder={t("text:your email")}
           required={true}
           shadow={true}
           onChange={(e)=>{setEmailList(e.target.value)}}
         />
       <textarea
    id="comment"
    style={{borderTop:"0px solid white",borderBottom:"1px solid black",borderRight:"0px solid white",borderLeft:"0px solid white",}}

    rows={4} 
    cols={40}
    className="mb-5 w-full"
    placeholder={t("text:write message")}
    required={true}
    onChange={(e)=>{setMessage(e.target.value)}}

   
  />


           <div className="w-full flex justify-center items-center  p-5">
  {/* <Button variant="outlined" onClick={async()=>{await sendMessage()}} style={{borderColor:"black",color:"black",borderRadius:"30%",letterSpacing:"5px",marginTop:"5px",width:"100%"}}   className="bg-white text-blue-50">Send message</Button> */}
  <button    onClick={async()=>{await sendMessage()}}   className="bg-black mt-2 flex items-center justify-center text-white md:w-1/5 w-1/2 h-10 md:text-3xl font-bold font-titan rounded-full p-10">Send</button>

</div>

 

      </div>
      <div className="col-span-3 flex justify-center items-center flex-col">
      <p className="text-center text-2xl mb-10">Better yet, see us in person!</p>
      <p className="text-center text-lg mb-10">We love our customers, so feel free to visit during normal business hours.</p>
      <p className="text-center text-2xl mb-10">Nakset</p>


          <p className="text-yellow-500 mb-5">{t("text:hours of work")}</p>
 
          <lu>
            <li className="text-black">Mon 08:00 – 15:30</li>
            <li className="text-black">Tue

08:00 – 15:30</li>
            <li className="text-black">Wed

08:00 – 15:30</li>
            <li className="text-black">Thu

08:00 – 15:30</li>
            <li className="text-black">Fri

08:00 – 15:30</li>
<li className="text-black">closeed</li>
<li className="text-black">closed</li>


          </lu>
        
      </div>
       </section>

{/* 
      <section className='bg-white   mx-auto break-all mt-48 '>
<div className='text-center   flex flex-col justify-center items-center'>
<p className='text-5xl md:text-8xl font-tar  my-2  border-solid border-black border-b-4 w-fit rounded-xl'>Social</p>
</div>
<p className="text-center text-gray-600">{t("text:social")}</p>

 <div className="  flex flex-wrap  content-center place-items-center self-center justify-center   sm:mt-0 sm:justify-center items-center  ">
          <SocialIcon className="m-3" url="https://www.facebook.com/TheNakset" ></SocialIcon>
         <SocialIcon className="m-3" url="https://www.linkedin.com/company/nakset/" ></SocialIcon>
         <SocialIcon className="m-3" url="https://www.instagram.com/nakset_kft/" ></SocialIcon>
          <SocialIcon className="m-3" url="https://www.whatsapp.com/" ></SocialIcon>







       </div>

 </section> */}
</div>

        )
}
export async function getServerSideProps(context) {
 // console.log("this is context",context.req.headers.cookie)
  //replace the url with this before uploading it to  the server "https://nakset.vercel.app/api/listCategories"
//     let response = await fetch("https://nakset.vercel.app/api/listCategories")


// let result2 = await response.json()
// console.log(result2)
 
 

return {
  props: {  }, // will be passed to the page component as props
}

}
