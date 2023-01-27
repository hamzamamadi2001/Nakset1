import React ,{useState,useEffect}from 'react'
import {useSession,getSession} from 'next-auth/react'
import { Label,TextInput,Button } from "flowbite-react";

import Image from'next/image'

function About() {
  const {data:session,status}= useSession()
  const [building, setBuilding] = useState('');
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [postal, setPostal] = useState('');
  const [chosencity, setChosenCity] = useState(null);
  const [chosencityid, setChosenCityId] = useState(null);
  const [isnew, setIsnew] = useState(false);
  const [oldadress, setOldAdress] = useState('');
  const [error, setError] = useState(false);




  const [chosencountry, setChosenCountry] = useState(null);
  const [chosencountryid, setChosenCountryId] = useState(null);







   useEffect(() => {
    
    const handleSearch =async (id) => {

      let response = await fetch("https://nakset.vercel.app/api/getUserAddress",{method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
       });


      let result = await response.json()
       setChosenCity(result[1][0].name)
      setChosenCountry(result[0][0].name)
      setChosenCityId(result[1][0].id)
      setChosenCountryId(result[0][0].id)
setIsnew(result[3])
setOldAdress(result[2])

       setCountry(result[0])
       setCity(result[1])
    };
    handleSearch()


  },[]);



  const handleChangeCity = (e) => {
    setChosenCityId(e.target.value);
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    setChosenCity(label)
  };
  

  const handleChangeCountry =async (e) => {
    console.log(e.target.value)
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    setChosenCountryId(e.target.value)
    setChosenCountry(label)

     let response = await fetch("https://nakset.vercel.app/api/getCitys",{method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({id:parseInt(e.target.value)})});
         
        let result = await response.json(response);
         setCity(result)

   
  };
 
  async function updateAdress(){
    console.log("i am in submit")
    setError(true)
    if(postal==null || postal.length<=0||postal == undefined || chosencountry == undefined || chosencountry==null || chosencity == undefined || chosencity==null || building == undefined || building==null ||building.length<=0){setError(true); return false}
    let response = await fetch("https://nakset.vercel.app/api/updateAddress",{method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({country:chosencountry,city:chosencity,postal:postal,build:building})});
 
  let result = await response.json(response);
  setOldAdress(result.country+","+result.city+","+result.postal+","+result.street)



  }

  return (
    <div className="container mx-auto    ">
      {/* <div className='flex flex-col  justify-center items-center self-center w-full'>
        {session?<img src={session.photo} width="300" height="300"></img>:<></>}
        {session?<p className='font-bold text-4xl bg-blue-400 w-screen text-center'>{session.name}</p>:<></>}
       </div> */}
       <p className='text-center text-3xl font-mono'>user information</p>
      <div className='bg-slate-300' > 
      <div className='w-full h-1/2 grid grid-cols-1 md:grid-cols-2   p-6 '>
      <div  >
        <div className="mb-2 block  ">
          <Label
            htmlFor="username"
            value="username"
          />
        </div>
        <TextInput
          id="username"
          type="username"
          placeholder="your name"
          required={true}
          shadow={true}
          disabled={true}
value={""}
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>
      <div   >
        <div className="mb-2 block ">
          <Label
            htmlFor="email"
            value="your email"
          />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="your email "
          required={true}
          shadow={true}
          disabled={true}
          value={""}
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>
      <div  >
        <div className="mb-2 block">
          <Label
            htmlFor="phone"
            value="phone"
          />
        </div>
        <TextInput
          id="phone"
          type="phone"
          placeholder="your name"
          required={true}
          shadow={true}
          disabled={true}
value="ll;k;"
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>


      </div>
<div className='w-full items-center p-2  h-12 flex flex-row-reverse'>
  <Button>save personal information</Button>
</div>
</div>

      <p className='text-center mt-10 bg-blue-400 text-3xl font-mono'>User adress </p>
      <div className='bg-slate-300' > 
{isnew?"":<div className='flex flex-row-reverse flex-wrap justify-center items-center'><p className='text-2xl text-center'>:your address</p><p className='text-center font-bold'>{oldadress}</p> </div>
}      <div className='w-full h-1/2 grid md:grid-cols-2 grid-cols-1   p-6 '>
      <div  > 
        <div className="mb-2 block  ">
          <Label
            htmlFor="country"
            value="country"
          />
        </div>
        <select className="rounded-lg w-full" onChange={async(e)=>{ await handleChangeCountry(e)}}   value={chosencountryid} >


        {country.map((res,index) =>{
          
          return (
           <option key={res.id}  value={res.id}>{res.name}</option>

                  )})}
                  </select>
      </div>
 

      <div   >
        <div className="mb-2 block ">
          <Label
            htmlFor="city"
            value="city"
          />
        </div>
        <select className="rounded-lg w-full" onChange={handleChangeCity} value={chosencityid} >


{city.map((res,index) =>{
  if(index==0)
  return(  <option key={res.id} value={res.id}>{res.name}</option>
  )
  else
  return (
   <option key={res.id}  value={res.id}>{res.name}</option>

          )})}
          </select>
      </div>
      <div >
        <div className="mb-2 block">
          <Label
            htmlFor="postal code"
            value="postal code"
          />
        </div>
        <TextInput
          id="postal code"
          type="postal code"
          placeholder="postal code"
          required={true}
          
value={postal}
          onChange={(e)=>{setPostal(e.target.value)}}
        />
      </div>
      <div >
        <div className="mb-2 block">
          <Label
            htmlFor="street,house/apartment/unit"
            value="street,house/apartment/unit"
          />
        </div>
        <TextInput
          id="phone"
          type="phone"
          placeholder="street,house/apartment/unit*"
          required={true}
            
value={building}
          onChange={(e)=>{setBuilding(e.target.value)}}
        />
      </div>
      

     
    
       


      </div>
      <div className='w-full items-center p-2  h-12 flex flex-row-reverse'>
  <Button onClick={async ()=>{await updateAdress()}}>save new address</Button>
</div>
</div>
    </div>
  )
}
 
export default About
