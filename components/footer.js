import { TextInput,Button,Footer,Textarea} from "flowbite-react";
import { useState, useEffect } from "react";

import Image from 'next/image'
import logo from '../public/logo.png'
 
    
export default function App() {
  const [EmailList, setEmailList] = useState("");

  return (
<Footer container={true}>
  <div className="w-full">
    <div className="grid w-full grid-cols-1 justify-between sm:flex sm:justify-between md:flex md:grid-cols-2">
      <div className="flex flex-col w-full justify-center md:w-1/2">
      <p className='text-center text-5xl md:text-6xl font-tar  my-2  '>Contact us</p>
       
         
         <TextInput
         className= "mb-5"
           id="name"
           type="name"
           placeholder="your name"
           required={true}
           shadow={true}
           onChange={(e)=>{setname(e.target.value)}}
         />   
         <TextInput
         className= "mb-5"
           id="Email"
           type="Email"
           placeholder="your Email"
           required={true}
           shadow={true}
           onChange={(e)=>{setEmailList(e.target.value)}}
         />   
        <Textarea
    id="comment"
    className="mb-5"
    placeholder="write a message..."
    required={true}
    rows={4}
  />  
         
         
            <Button   className='w-1/2 mb-5 justify-center'  >
  <p>send message</p>
 
     </Button>
       

      </div>
      <div className="mx-5 grid grid-cols-2 gap-8 sm:mt-4    ">
         
        <div>
          <Footer.Title title="Hours of works" />
           
          <lu>
            <li>Monday from ... to ...</li>
            <li>Tuesday from ... to ...</li>
            <li>Wedensday from ... to ...</li>
            <li>Thursday from ... to ...</li>
            <li>Friday from ... to ...</li>


          </lu>
        </div>
        <div>
          <Footer.Title title="Legal" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="/">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="/">
              Terms & Conditions
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </div>
    <Footer.Divider />
    <div className="w-full sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright
        href="/"
        by="Nakset™"
        year={2022}
      />
      
    </div>
  </div>
</Footer>
   );
}