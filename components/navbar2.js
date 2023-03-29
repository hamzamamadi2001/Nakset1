import {  Navbar,Dropdown,Avatar } from "flowbite-react";
import Image from 'next/image'
import logo from '../public/logo2.png'
import Link from 'next/link'
import {useSession,signOut} from 'next-auth/react'
import { Button} from "flowbite-react";
import { RiShoppingBasketFill } from 'react-icons/ri';
import { BiSearch, BsSearch } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux'
import ReactCountryFlag from "react-country-flag"
// import { Language } from "@mui/icons-material";
import { adjustcurr} from '../slices/CounterSlice'
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';

import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

import { styled, useTheme } from '@mui/material/styles';

import { useState,useEffect } from "react";
import {useRouter} from "next/router"
import useTranslation from 'next-translate/useTranslation'


const drawerWidth = "100%";
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  marginTop:"20px"
}));








export default function App() {
  const router = useRouter()
  const theme = useTheme();
  

  const dispatch = useDispatch()
  const {locale,pathname,query,asPath}=useRouter()
  const [flag, setflag] = useState("us");
  const [usd, setusd] = useState(1);
  const [huf, sethuf] = useState(1);
  const [localee, setlocale] = useState(locale);



 
  useEffect(() => {

 


      switch (locale) {
    case "en":
      setflag("us")
      document.querySelector("html").setAttribute("dir", "ltr");

      break;
      case "fr":
        setflag("us")
        document.querySelector("html").setAttribute("dir", "ltr");

      break;
      case "ar":
        setflag("sa")

       document.querySelector("html").setAttribute("dir", "rtl");
      break;
      case "tr":
        setflag("tr")
        document.querySelector("html").setAttribute("dir", "ltr");


      break;
      case "de":
        setflag("de")
        document.querySelector("html").setAttribute("dir", "ltr");


      break;
    default:
      break;
  }

  async function fetchText() {
    let response = await fetch('https://api.frankfurter.app/latest?to=usd,huf');

    

    if (response.status === 200) {
        let data = await response.json();
        // handle data
        setusd(data.rates.USD)
        sethuf(data.rates.HUF)


    }
}

fetchText();

  }, [locale]);


  const [open2, setOpen2] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);
  
    const handleDrawerOpen2 = () => {
     setOpen2(true);
     setShadow(true)

     };
  
    const handleDrawerClose2 = () => {
      setShadow(false)
      setOpen2(false);
    };




  const {t} = useTranslation()
  const count = useSelector((state) => state.counter.counter)
  const curr = useSelector((state) => state.counter.currency)

const [language, setLanguage] = useState('US');
  const {data:session,status}= useSession()

  return (<>
<div className={`bg-black hidden ${router.pathname!="/"?"bg-opacity-100 relative":"bg-opacity-0"}  md:grid md:grid-cols-3 grid-cols-1 w-screen   absolute right-0 top-0 z-50   p-6`}>
<div className="col-span-1 flex justify-center items-center gap-10 md:order-1">
<Link href="/" className="text-xl   flex justify-center items-center  text-white font-bold font-titan hover:text-gray-600" >HOME</Link>
<Link href="about" className="text-xl text-white  font-bold font-titan flex justify-center items-center hover:text-gray-600" >ABOUT US</Link>
<Link href="history" className="text-xl text-white   font-bold font-titan flex justify-center items-center hover:text-gray-600">HISTORY</Link>
</div>
 
<div className=" flex justify-center  flex-wrap items-center gap-10 col-span-1 -order-last md:order-2 " >
    <Image src="/logo.webp" height="120" width="120"></Image>
</div>

<div className="col-span-1 flex justify-center items-center md:order-3 gap-10">
     <div   className="text-xl relative group flex justify-center items-center text-white font-bold font-titan  hover:text-gray-600">
     <p className="text-white group-hover:text-gray-500">BRANDS</p>
     <div className="bg-black  overflow-hidden top-7 flex justify-center flex-col items-center  group-hover:h-24 ease-linear duration-75 absolute w-32 border-gray-600 group-hover:border-2  h-0">
<Link href="mentat" className="text-white hover:text-gray-500" >
  Mentat
</Link>
<Link href="nakset" className="text-white hover:text-gray-500" >
  Nakset
</Link>
     </div>
     </div>
    <Link href="CSR" className="text-xl   flex justify-center items-center text-white font-bold font-titan hover:text-gray-600 md:order-6">CSR</Link>
    </div>

 </div>

 <div className="md:hidden flex justify-between items-center bg-black h-32">

 <div className=" flex justify-center  flex-wrap items-center " >
    <Image src="/logo.webp" height="120" width="120"></Image>
</div>

<div onClick={handleDrawerOpen2}  className="cursor-pointer flex justify-center  flex-wrap items-center " >
    <FaBars size={40} color="white" className="m-1"></FaBars>
</div>

 </div>
 <Drawer
                
      
        
        variant="persistent"
        anchor="left"
        open={open2}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose2}>
          
            <GrClose size={40} color="white"></GrClose>
          </IconButton>
        </DrawerHeader>

      <div className="w-screen h-screen bg-white">
      <Link href="/" onClick={handleDrawerClose2} className="text-xl text-center   flex flex-row justify-center items-center text-black my-10 font-bold font-titan hover:text-gray-600 md:order-6"><p className="text-black text-center  w-screen  group-hover:text-gray-500">HOME</p></Link>
 <Link href="About" onClick={handleDrawerClose2} className="text-xl text-center   flex flex-row justify-center items-center text-black my-10 font-bold font-titan hover:text-gray-600 md:order-6"><p className="text-black text-center  w-screen  group-hover:text-gray-500">ABOUT</p></Link>
<Link href="history" onClick={handleDrawerClose2} className="text-xl text-center   flex flex-row justify-center items-center text-black my-10 font-bold font-titan hover:text-gray-600 md:order-6"><p className="text-black text-center  w-screen  group-hover:text-gray-500">HISTORY</p></Link>
 
  

 
     <div   className="flex-col my-10  text-xl relative group flex justify-center items-center font-bold font-titan  hover:text-gray-600">
     <p className="text-black text-center   group-hover:text-gray-500">BRANDS</p>
     <div className="bg-black  overflow-hidden   flex justify-center flex-col items-center  group-hover:h-24 ease-linear duration-75  w-32 border-gray-600 group-hover:border-2  h-0">
<Link onClick={handleDrawerClose2} href="mentat" className="text-white hover:text-gray-500" >
  Mentat
</Link>
<Link href="nakset" onClick={handleDrawerClose2} className="text-white text-center hover:text-gray-500" >
  Nakset
</Link>
     </div>
     </div>
    <Link href="CSR" onClick={handleDrawerClose2} className="text-xl text-center   flex flex-row justify-center items-center text-black my-10 font-bold font-titan hover:text-gray-600 md:order-6"><p className="text-black text-center  w-screen  group-hover:text-gray-500">CSR</p></Link>
  

      </div>
       
        
      </Drawer>
 </>
  );
}
