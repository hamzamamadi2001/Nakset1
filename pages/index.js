
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
 
<Carousel slideInterval={5000}>
<div   className=" relative   flex justify-center items-center">

  
    <img src="./4.jpg" style={{height:"100"}} height="500"className="w-full h-1/2 md:h-screen  "      />
<div className="absolute w-full h-full flex justify-center flex-col items-center backdrop-filter b     bg-blue-900  bg-opacity-60     ">
<p className="  text-center text-white font-bold text-base sm:text-5xl md:text-7xl w-1/2">Delivering from producers to your home</p>
<p className="  text-center text-yellow-400  font-bold text-sm sm:text-3xl md:text-2xl w-1/2">wehen ever you are and when ever you want</p>
<Button variant="contained" onClick={() => window.location.replace("/#contact")} color="success">Contact us</Button>

  
  
</div >
 

</div>


<div   className=" relative   flex justify-center items-center">

  
    <img src="./5.jpg" style={{height:"100"}} height="500"className="w-full h-1/2 md:h-screen  "      />
<div className="absolute w-full h-full flex justify-center flex-col items-center backdrop-filter b     bg-blue-900  bg-opacity-60     ">
<p className="  text-center text-white font-bold text-base sm:text-5xl md:text-7xl w-1/2">Delivering from producers to your home</p>
<p className="  text-center text-yellow-400  font-bold text-sm sm:text-3xl md:text-2xl w-1/2">wehen ever you are and when ever you want</p>
<Button variant="contained" onClick={() => window.location.replace("/#contact")} color="success">Contact us</Button>

  
  
</div >
 

</div>




<div   className=" relative   flex justify-center items-center">

  
    <img src="./3.jpg" style={{height:"100"}} height="500"className="w-full h-1/2 md:h-screen  "      />
<div className="absolute w-full h-full flex justify-center flex-col items-center backdrop-filter b     bg-blue-900  bg-opacity-60     ">
<p className="  text-center text-white font-bold text-base sm:text-5xl md:text-7xl w-1/2">Delivering from producers to your home</p>
<p className="  text-center text-yellow-400  font-bold text-sm sm:text-3xl md:text-2xl w-1/2">wehen ever you are and when ever you want</p>
<Button variant="contained" onClick={() => window.location.replace("/#contact")} color="success">Contact us</Button>

  
  
</div >
 

</div>



<div   className=" relative   flex justify-center items-center">

  
    <img src="./1.jpg" style={{height:"100"}} height="500"className="w-full h-1/2 md:h-screen  "      />
<div className="absolute w-full h-full flex justify-center flex-col items-center backdrop-filter b     bg-blue-900  bg-opacity-60     ">
<p className="  text-center text-white font-bold text-base sm:text-5xl md:text-7xl w-1/2">Delivering from producers to your home</p>
<p className="  text-center text-yellow-400  font-bold text-sm sm:text-3xl md:text-2xl w-1/2">wehen ever you are and when ever you want</p>
<Button variant="contained" onClick={() => window.location.replace("/#contact")} color="success">Contact us</Button>

  
  
</div >
 

</div>
</Carousel>

<section className="mt-28">
<div className="flex justify-center items-center flex-row-reverse flex-wrap">
      <h2 className="text-black font-bold text-5xl font-tar">"A taste felt in hearts"</h2>
      <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' />
    </div>
</section>

<section className="mt-28">
<div   className=" relative   flex justify-center items-center">

  
<img src="./2.jpg" style={{height:"100"}} height="500"className="w-full h-1/2 md:h-1/4  "      />
<div className="absolute w-full h-full flex justify-center flex-col items-center backdrop-filter b     bg-black  bg-opacity-60     ">
<p className="  text-center text-white font-bold text-base sm:text-5xl md:text-7xl w-1/2">Are you carbing calling?</p>
<Button variant="outlined" style={{borderColor:"white",color:"white",borderRadius:"30%",letterSpacing:"5px",marginTop:"5px"}}   className="bg-white text-blue-50">Our products</Button>




</div >


</div>
 </section>




 
 <section className='container mx-auto flex flex-col justify-between items-center  text-center mt-48'>
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

</section>


<section className='container mx-auto flex flex-col justify-between items-center mt-48 text-center '>
<div className='text-center mt-10 mb-10 flex flex-col justify-center items-center'>
<p className= 'text-5xl md:text-8xl font-tar  my-2  border-solid border-black border-b-4 w-fit rounded-xl'>Our certficates</p>
</div>

<div className='flex flex-col sm:flex-row container mx-auto justify-center items-center align-middle '>
      <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <img src='https://res.cloudinary.com/my-online-store/image/upload/v1675290251/haccp_vi97me.png' width={300} height={300}   />
 

      </div>
    
    </div>

    <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <img src='https://res.cloudinary.com/my-online-store/image/upload/v1675290251/halal_nu6njq.jpg' width={300} height={300}    />
 

      </div>
      
    </div>

    <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <img src='https://res.cloudinary.com/my-online-store/image/upload/v1675290251/iso_viirsy.jpg' width={300} height={300}     />
 

      </div>
     
    </div>
</div>

</section>
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


 
 
<div id="contact" className="flex flex-col w-full justify-center items-center min-w-1/2 mt-48">
      <p className='text-center text-yellow-500 text-5xl md:text-8xl font-tar  my-2  '>{t("text:contact us")}</p>


         
          <input
          style={{borderTop:"0px solid white",borderBottom:"1px solid gray",borderRight:"0px solid white",borderLeft:"0px solid white",}}
         className= "mb-5 w-1/2 "
           id="Email"
           type="text"
           placeholder={t("text:your name")}
           required={true}
           shadow={true}
           onChange={(e)=>{setName(e.target.value)}}
         />
         <input
                   style={{borderTop:"0px solid white",borderBottom:"1px solid gray",borderRight:"0px solid white",borderLeft:"0px solid white",}}

         className= "mb-5 w-1/2"
           id="Email"
           type="Email"
           placeholder={t("text:your email")}
           required={true}
           shadow={true}
           onChange={(e)=>{setEmailList(e.target.value)}}
         />
       <textarea
    id="comment"
    style={{borderTop:"0px solid white",borderBottom:"1px solid gray",borderRight:"0px solid white",borderLeft:"0px solid white",}}

    rows={4} 
    cols={40}
    className="mb-5 w-1/2"
    placeholder={t("text:write message")}
    required={true}
    onChange={(e)=>{setMessage(e.target.value)}}

   
  />


           <div className="w-auto   p-5">
  <Button variant="outlined" onClick={async()=>{await sendMessage()}} style={{borderColor:"black",color:"black",borderRadius:"30%",letterSpacing:"5px",marginTop:"5px",width:"100%"}}   className="bg-white text-blue-50">Send message</Button>
</div>

 

      </div>



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

 </section>
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
