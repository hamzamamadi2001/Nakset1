import React from 'react'
import {  Text } from "@nextui-org/react";
 import Login from '../components/login'
import Register from '../components/register'
import { getToken } from "next-auth/jwt"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react"
function About() {
    const [openTab, setOpenTab] = React.useState(1);

  return (
 
<div className=' min-h-screen w-screen    bg-gradient-to-r from-cyan-500 to-blue-300 flex flex-col justify-center items-center   '>
<Text
    className='text-lg my-5 sm:text-2xl lg:text-4xl bg-slate-50 h-16  '
     h6
     size={60}
        css={{
          textGradient: "45deg, $gray600 -20%, $white600 50%",
        }}
        weight="bold"
      >
        welcome to nakset
      </Text>


      <div >
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
    </div>


</div>
    
  )
}

// export async function getServerSideProps(context) {
//   const session = await unstable_getServerSession(context.req, context.res, authOptions)

//   if (session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: {
//       session,
//     },
//   }
// }
export default About
