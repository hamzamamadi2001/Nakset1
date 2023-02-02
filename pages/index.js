
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState, useEffect } from "react";
import useTranslation from 'next-translate/useTranslation'
 import { Spinner,TextInput } from "flowbite-react";
import { SocialIcon } from 'react-social-icons';
import  Card2 from '../components/CardPro'
 import Image from 'next/image'
import {useSession} from 'next-auth/react'
 import ReactCountryFlag from "react-country-flag"
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TbMoodEmpty } from 'react-icons/tb';
 import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import  client   from '../lib/prismadb'
import photo from "../public/meat22.jpg"

export default function Home({result})
{
  const [value, setValue] =  useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   const [chosencity, setChosenCity] = useState(result[2][0].id);
  const [chosencat, setChosenCat] = useState(result[0][0].id);

  const [products, setProducts] = useState(result[3]);

   const [city, setCity] = useState(result[2]);
  
  const [loading, setLoading] =  useState(false);
  const [loading2, setLoading2] =  useState(false);
   const [emailError, setEmailError] =  useState(false);
 


  const validateEmail = (email) => {
    var result = String(email)
      .toLowerCase()
      .match(
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/   );
        if(result==null)  {setEmailError(true);  return false}
        else{setEmailError(false);return true}

  };
  
   
    const handelEmail =async () => {

if(!validateEmail(EmailList))
{
  return 
}
      
      let response = await fetch("http://localhost:3000/api/unRegistredEmail",{method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({email:EmailList})});
           let result = await response.json(response);
          if(result.error==0){
            setEmailError(false)
          }
           else{
            setEmailError(true)
          }

    };


  const handleChangeCity = (event) => {
    setChosenCity(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setChosenCat(event.target.value);
  };

  const handleChangeCountry =async (id) => {
    setLoading(true)
    let response = await fetch("https://nakset.vercel.app/api/getCitys",{method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({id:id})});
         let result = await response.json(response);
         setCity(result)
setLoading(false)
   };
  const handleSearch =async (id) => {


    setLoading2(true)
    let response = await fetch("https://nakset.vercel.app/api/getProducts",{method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({catid:parseInt(chosencat),city:chosencity})});
         let result = await response.json(response);
         setProducts(result)
  setLoading2(false)
   };




  const {t} = useTranslation()
  const [EmailList, setEmailList] = useState("");


 

  // useEffect(() => {



  // },[]);

  const {data:session}= useSession()
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

<div   className=" relative   flex justify-center items-center">

  <img src="./meat22.jpg" style={{height:"100"}} height="500"className="w-full h-1/2 md:h-screen  "      />
<div className="absolute w-full h-full flex justify-center flex-col items-center backdrop-filter b     bg-blue-900  bg-opacity-60     ">
<p className="  text-center text-white font-bold text-base sm:text-5xl md:text-7xl w-1/2">Delivering from producers to your home</p>
<p className="  text-center text-yellow-400  font-bold text-sm sm:text-3xl md:text-2xl w-1/2">wehen ever you are and when ever you want</p>
<Button variant="contained" onClick={() => window.location.replace("/#contact")} color="success">Contact us</Button>

</div >

</div>









 <section className=' mx-auto break-all  '>
<div className='text-center mt-10 mb-10 flex flex-col justify-center items-center'>
<p className='text-5xl md:text-8xl font-tar  my-2  border-solid border-black border-b-4 w-fit rounded-xl'>{t("text:our categories")}</p>
</div>








      <div className="bg-blue-300 flex justify-evenly items-center">
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
        {result[1].map((res) => (


          <Tab key={res.id} icon={ <ReactCountryFlag key={res.id}
            className=""
            onClick={async()=>{ await handleChangeCountry(res.id)}}
                                      countryCode={res.code}
                                      svg
                                       style={{

                                          width: '50px',
                                          height: '100%',
                                       }}
                                      title={res.name}
                                   />}  />






             ))}

        </Tabs>
      </Box>











      </div>
      <div className="bg-blue-200   flex justify-center items-center flex-col-reverse md:flex-row" >
      <Button variant="contained" onClick={async()=>{await handleSearch()}} className="bg-green-500 my-1">search</Button>

      <div className="mx-10 my-1">


      <Box  className="flex flex-row-reverse justify-center items-center w-auto "  >
      <InputLabel id="demo-simple-select-autowidth-label">categories</InputLabel>

      <select className="rounded-lg" value={chosencat} onChange={(e)=>{handleChangeCategory(e)}}>


        {result[0].map((res,index) =>{
          if(index==0)
          return(  <option key={res.id} value={res.id}>{res.name}</option>
          )
          else
          return (
           <option key={res.id} value={res.id}>{res.name}</option>

                  )})}
                  </select>


     </Box>







      </div>


      <div className="mx-10 my-1">

      <Box className="flex flex-row-reverse justify-center items-center w-auto "  >
      <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
{loading&&(<Spinner
    aria-label="Medium sized spinner example"
    size="md"
  />)}
       { !loading &&city.length>0&&(<select className="rounded-lg" value={chosencity} onChange={(e)=>{handleChangeCity(e)}}>


        {city.map((res,index) =>{
          if(index==0)
          return(  <option key={res.id} value={res.id}>{res.name}</option>
          )
          else
          return (
           <option key={res.id}  value={res.id}>{res.name}</option>

                  )})}
                  </select>)}
                  { !loading &&city.length<=0&&(<p >👍😎caming soon</p>)}
     </Box>
                      </div>


      </div>
      
      <div className='flex justify-center items-center max-w-7xl flex-wrap container mx-auto m bg-blue-300'>

      {loading2&&  (
        <div className="flex justify-center items-center animate-bounce   ">      <Image src="/logo.png" width="100"height="100" ></Image>
  </div>
      )}
  {!loading2 && products.length>0 && products.map((res) => (
  <Card2  key={res.id} src={res.photo}  title={res.name} unit={res.unit} price={res.price} id={res.id} baseQuantity={res.baseQuantity}></Card2>


        ))}
    {!loading2&&products.length<=0 &&(
<div className='flex flex-col  justify-center items-center h-64 w-screen gr '>
    <p className='text-cneter text-2xl font-mono'>No results found</p>
<TbMoodEmpty color='gray' size={100}></TbMoodEmpty>
</div>
    )}
  </div>
  

 </section>
 <section className='container mx-auto flex flex-col justify-between items-center  text-center '>
<div className='text-center mt-10 mb-10 flex flex-col justify-center items-center'>
<p className= 'text-5xl md:text-8xl font-tar  my-2  border-solid border-black border-b-4 w-fit rounded-xl'>{t("text:how it works")}</p>
</div>

<div className='flex flex-col sm:flex-row container mx-auto justify-center items-center align-middle '>
      <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <Image src='/lahm.svg' width={100} height={100}   />
      <p className='text-3xl text-center text-red-800'>{t("text:choose your favorite")}</p>


      </div>
      <div className='w-1/2'>
    <p className='text-2xl text-gray-700'>{t("text:P-choose your favorite")}</p>
      </div>
    </div>

    <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <Image src='/deliv.svg' width={100} height={100}    />
      <p className='text-3xl text-center text-red-800'>{t("text:we deliver your meals")}</p>


      </div>
      <div className='w-1/2'>
    <p className='text-2xl text-gray-700'>{t("text:P-we deliver your meals")}</p>
      </div>
    </div>

    <div className='sm:w-1/3 flex flex-col flex-wrap justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
      <Image src='/grill.svg' width={100} height={100}     />
      <p className='text-3xl text-center text-red-800'>{t("text:enjoy halal food")}</p>


      </div>
      <div className='w-1/2'>
    <p className='text-2xl text-gray-700'>{t("text:P-enjoy halal food")}</p>
      </div>
    </div>
</div>

</section>
<section className='bg-gray-100     break-all  '>
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
 </section>


 <section className='bg-white   mx-auto break-all  '>
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
<div id="contact"></div>
</div>

        )
}
export async function getServerSideProps(context) {
 // console.log("this is context",context.req.headers.cookie)
  //replace the url with this before uploading it to  the server "https://nakset.vercel.app/api/listCategories"
//     let response = await fetch("https://nakset.vercel.app/api/listCategories")


// let result2 = await response.json()
// console.log(result2)



const categories = await client.category.findMany({select:{id:true,name:true}}) 
   const countrys = await client.countrys.findMany({where:{}}) 
   const citys = await client.citys.findMany({where:{country:0},select:{id:true,name:true}})


  const products = await client.product.findMany({where:{city:citys[0].id}})
 let result=
 [ categories,countrys,citys,products]
 

return {
  props: { result }, // will be passed to the page component as props
}

}
