import { Badge,Navbar,Dropdown,Avatar } from "flowbite-react";
import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
import {useSession,signOut} from 'next-auth/react'
import { Button} from "flowbite-react";
import { RiShoppingBasketFill } from 'react-icons/ri';
import { BiSearch, BsSearch } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux'



export default function App() {
  const count = useSelector((state) => state.counter.counter)

  const {data:session}= useSession()
  console.log("this is the session",session)
  return (
<div>
    <Navbar
  className="container  w-full flex-col-reverse  shadow-2xl backdrop-filter left-1/2 -translate-x-1/2 mt-2 rounded-r-lg  bg-gray-900 bg-opacity-30 backdrop-blur-0  fixed z-10 flex justify-center "
  
>
  <div className="">

 
  <Navbar.Brand className="" href="/">
    <Image
      src={logo}
       
     width={60}
     height={60}

    />
  </Navbar.Brand>
    </div>
   <div className="flex flex-wrap justify-center items-center">
    <Navbar.Toggle  />
  <Navbar.Collapse>
    
    <Navbar.Link  href="/">
    <p className="text-white">Home</p>
    </Navbar.Link>
    <Navbar.Link href="/About">
      <p className="text-white">About us</p>
    </Navbar.Link>
    <Navbar.Link href="/Details">
    <p className="text-white">Partners</p>
    </Navbar.Link>
    <Navbar.Link href="/profile">
    <p className="text-white">FAQ</p>
    </Navbar.Link>
  </Navbar.Collapse>
  <p className="hidden md:block md:mx-2 ">|</p>
<Link href="/" >
    <BiSearch size={30} cursor="pointer" onClick={async (e)=>{console.log("testing icon") }} color='white' className="mx-2" ></BiSearch>
</Link>
<Link href="/basket"   className="relative">
  <p className="text-white text-base  absolute -top-1 left-0 bg-red-700 rounded-full" >{count}</p>
<RiShoppingBasketFill size={30}  cursor="pointer" onClick={async (e)=>{console.log("testing icon") }} color='white' className="mx-2" ></RiShoppingBasketFill>
   </Link>
   {session?<Dropdown
  
      arrowIcon={false}
      inline={true}
      label={<Avatar className="w-10 h-10 mx-2"   alt="User settings" img={session.photo} rounded={true} />}
      
       
    >
      
      <Dropdown.Item>
        My information
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={async()=>{signOut()}}>
        Sign out
      </Dropdown.Item>
    </Dropdown>:<Link href="sum"><Button   className='flex flex-row-reverse justify-around items-center '  >
 <p>Login in</p>

    </Button></Link>}
  

 
    </div>
 </Navbar>
</div>
  );
}