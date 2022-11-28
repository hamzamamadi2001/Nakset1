import { Badge,Navbar,Dropdown,Avatar } from "flowbite-react";
import Image from 'next/image'
import logo from '../public/logo.png'
import {useSession,signOut} from 'next-auth/react'

export default function App() {
  const {data:session}= useSession()
  console.log("this is the session",session)
  return (
<div>
    <Navbar
  className="container   shadow-2xl backdrop-filter left-1/2 -translate-x-1/2 mt-2 rounded-r-lg  bg-white bg-opacity-30 backdrop-blur-sm  fixed z-10 "
  
>
  <Navbar.Brand href="https://flowbite.com/">
    <Image
      src={logo}
       
     width={100}
     height={100}

    />
  </Navbar.Brand>
   <Navbar.Toggle />
   <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img={session?session.user.image:"./logo.png"} rounded={true}/>}
      
       
    >
      
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  <Navbar.Collapse>
    
    <Navbar.Link onClick={()=>{signOut()}} href="/About">
      About
    </Navbar.Link>
    <Navbar.Link href="/sum">
      login
    </Navbar.Link>
    <Navbar.Link href="/Details">
      Details
    </Navbar.Link>
    <Navbar.Link href="/profile">
      profile
    </Navbar.Link>
  </Navbar.Collapse>
 </Navbar>
</div>
  );
}