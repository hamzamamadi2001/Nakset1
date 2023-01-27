// import {query} from "../../lib/db"
// import {verify} from "jsonwebtoken"
// import { getToken } from "next-auth/jwt"

// // const authenticated = (fn) => async (req, res) => {
// //      console.log("this is the token",req.headers.token)
// //         if(req.headers.token){
// //  verify(req.headers.token,process.env.SECRET,async function(err,decode) {
// //         if(!err&&decode){
// //             return await fn(req, res);
// //         }
// //         res.status(401).json({message:"sorry you are not authenticated"})
// //     })
// //         }
// //    res.status(401).json({message:"sorry you are not authenticated"})
      
    
// //   };



// export default    async function handler(req ,res ){
//     const token = await getToken({ req })
//   console.log("JSON Web Token", token)

//     console.log("this is the token",req.headers.token)
//         if(req.headers.token){
//  verify(req.headers.token,process.env.SECRET,async function(err,decode) {
//         if(!err&&decode){
//            return res.status(200).json({name:"hamza mamadi"})              

//         }
//         else{
//            return res.status(401).json({message:"you are not authenticated"})              

//         }
//      })
//         }else{
//             return res.status(401).json({message:"you are not authenticated"})              

//         }
 
   
// }



// This is an example of how to read a JSON Web Token from an API route
import { TireRepair } from "@mui/icons-material"
import { getToken } from "next-auth/jwt"

export default async (req, res) => {
    

  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req})
  console.log("JSON Web Token", token)
  if (token) {
     res.status(200).json({name:"hamza mamadi"})
    console.log("JSON Web Token", JSON.stringify(token, null, 2))
    
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}