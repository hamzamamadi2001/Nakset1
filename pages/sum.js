import React from 'react'
import {  Text } from "@nextui-org/react";
 import Login from '../components/login'
import Register from '../components/register'
import {getSession} from 'next-auth/react'

function About() {
    const [openTab, setOpenTab] = React.useState(1);

  return (
   <div className="w-screen h-screen bg-red-200 bg-login bg-auto flex flex-row justify-center items-center">

<div className='   w-full h-full bg-black flex flex-col justify-center items-center  bg-opacity-30 backdrop-blur-sm'>
<Text
    className='text-lg m-10 sm:text-2xl lg:text-4xl bg-slate-50 font-tar '
     h6
     size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Register now
      </Text>


      <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px flex-auto text-center">
              <a
                className={
                  "text-xs font-bold font-titan uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-black  relative top-4 "
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Login
              </a>
            </li>
            <li className="-mb-px    flex-auto text-center    ">
              <a
                className={
                  "text-xs font-bold font-titan uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-black  relative top-4"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Register
              </a>
            </li>

          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Login></Login>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                   <Register></Register>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>



</div>
   </div>
  )
}
export async function getServerSideProps({req}){
  const session = await getSession()
  

  if(session){ return{
    redirect: {
      permanent: false,
      destination: '/',

  }}
  
}else{
  
    return {
      props: {
        session
      }
    }
  
}
}
export default About
