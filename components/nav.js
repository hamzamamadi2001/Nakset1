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
<div>
    <Navbar style={{borderBottom: '1px solid gray'}}
  className="w-full  z-50 fixed  flex-col-reverse  shadow-2xl backdrop-filter b    rounded-r-lg  bg-blue-800  bg-opacity-75  backdrop-blur-sm    flex justify-center items-center "

>



  <Navbar.Brand className="hidden md:block " href="/">
    <p className="text-white font-bold text-3xl">Nakset</p>
  </Navbar.Brand>

   <div className="flex flex-wrap justify-center items-center">
    <Navbar.Toggle  />
  <Navbar.Collapse className="flex flex-wrap flex-col justify-center items-center">
   <div className=" h-10 hover:border-b-2 hover:border-b-yellow-300 flex justify-center items-center">
    <Navbar.Link className="mx-2  hover:bg-blue-50"  href="/" >
    <p className="text-white  ">{t("text:home")}</p>
    </Navbar.Link></div>
    <div className=" h-10 hover:border-b-2 hover:border-b-yellow-300 flex justify-center items-center">
    <Navbar.Link className="mx-2  " href="/">
      <p className="text-white">{t("text:about us")}</p>
    </Navbar.Link>
    </div>
    <div className=" h-10 hover:border-b-2 hover:border-b-yellow-300 flex justify-center items-center">
    <Navbar.Link className="mx-2   " href="/orders">
      <p className="text-white">my orders</p>
    </Navbar.Link>
    </div>
    <div className=" h-10 hover:border-b-2 hover:border-b-yellow-300 flex justify-center items-center">
    <Navbar.Link className="mx-2   " href="/">
    <p className="text-white">{t("text:partners")}</p>
    </Navbar.Link>
    </div>
    <div className=" h-10 hover:border-b-2 hover:border-b-yellow-300 flex justify-center items-center">
    <Navbar.Link className="mx-2  " href="/">
    <p className="text-white">FAQ</p>
    </Navbar.Link>
    </div>
  </Navbar.Collapse>
  <p className="hidden md:block  mx-2 text-white font-black ">|</p>



  <Dropdown


  arrowIcon={false}
  inline={true}
  label={ <p className="text-white text-base mx-2">{curr.toUpperCase()}</p>}


>


  <Dropdown.Item onClick={()=>dispatch(adjustcurr({curr:"huf",sym:"ft",value:huf}))} >
  <p className="text-black text-base">HUF</p>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item onClick={()=>dispatch(adjustcurr({curr:"usd",sym:"$",value:usd}))}>
  <p className="text-black text-base">USD</p>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item  onClick={()=>dispatch(adjustcurr({curr:"eur",sym:"€",value:1}))}>
   <p className="text-black text-base">EUR</p>
  </Dropdown.Item>



</Dropdown>

  <Dropdown

      arrowIcon={false}
      inline={true}
      label={  <ReactCountryFlag
      className="mx-2"
        countryCode={flag}
        svg
        style={{
            width: '2em',
            height: '2em',
        }}
        title="US"
    />}


    >


      <Dropdown.Item >
        <Link href={{ pathname, query }} as={asPath} locale="en">
      <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="US"
            />
            </Link>
      </Dropdown.Item>
      {/* <Dropdown.Divider />
      <Dropdown.Item >
      <Link href={{ pathname, query }} as={asPath} locale="de">
      <ReactCountryFlag
                countryCode="DE"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="US"

            />
            </Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item  >
      <Link href={{ pathname, query }} as={asPath} locale="tr">
      <ReactCountryFlag

                countryCode="TR"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="US"
            /></Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item  >
      <Link href={{ pathname, query }} as={asPath} locale="fr">
      <ReactCountryFlag
                countryCode="FR"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="US"
            /></Link>
      </Dropdown.Item>
      <Dropdown.Item  >
      <Link href={asPath } as={asPath} locale="ar">
      <ReactCountryFlag
                countryCode="SA"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="US"
            /></Link>
      </Dropdown.Item> */}
    </Dropdown>


<Link href="/basket"   className="relative mx-2">
  <p className="text-white text-base  absolute -top-1 left-0 bg-red-700 rounded-full" >{count}</p>
<RiShoppingBasketFill size={30}  cursor="pointer" onClick={async (e)=>{console.log("testing icon") }} color='white' className="mx-2" ></RiShoppingBasketFill>
   </Link>
   {




     session?(<Dropdown

      arrowIcon={false}
      inline={true}
      label={<Avatar className="w-10 h-10 mx-2"   alt="User settings" img={session.photo} rounded={true} />}


    >
<Link href="/profile"    >
      <Dropdown.Item >
      {/* {t("text:my information")} */}
      user profile
      </Dropdown.Item></Link>
      <Dropdown.Divider />
      <Dropdown.Item onClick={async()=>{signOut()}}>
      {t("text:logout")}
      </Dropdown.Item>
    </Dropdown>):<Link className="mx-2" href="sum"><Button   className='flex flex-row-reverse justify-around items-center '  >
 <p>{t("text:login")}</p>

    </Button></Link>}



    </div>
 </Navbar>
</div>
  );
}
