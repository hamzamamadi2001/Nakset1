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

import { useState,useEffect } from "react";
import {useRouter} from "next/router"
import useTranslation from 'next-translate/useTranslation'

export default function App() {
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

  const {t} = useTranslation()
  const count = useSelector((state) => state.counter.counter)
  const curr = useSelector((state) => state.counter.currency)

const [language, setLanguage] = useState('US');
  const {data:session,status}= useSession()

  return (
<div className="bg-black hidden  md:grid md:grid-cols-7 grid-cols-1 w-screen   absolute right-0 top-0 z-50 bg-opacity-100 p-6">

<Link href="#" className="text-xl col-span-1 flex justify-center items-center  text-white font-bold font-titan hover:text-gray-600" >HOME</Link>
<Link href="#" className="text-xl text-white col-span-1 font-bold font-titan flex justify-center items-center hover:text-gray-600" >ABOUT US</Link>
<Link href="#" className="text-xl text-white col-span-1 font-bold font-titan flex justify-center items-center hover:text-gray-600">HISTORY</Link>

 
<div className=" flex justify-center  flex-wrap items-center col-span-1 -order-last md:order-1 " >
    <Image src="/logo.webp" height="100" width="100"></Image>
</div>


     <Link href="#" className="text-xl col-span-1 flex justify-center items-center text-white font-bold font-titan md:order-5 hover:text-gray-600">BRANDS</Link>
    <Link href="#" className="text-xl col-span-1 flex justify-center items-center text-white font-bold font-titan hover:text-gray-600 md:order-6">CSR</Link>
 </div>
  );
}
