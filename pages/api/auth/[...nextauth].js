import NextAuth from 'next-auth'
 import GoogleProvider from "next-auth/providers/google";
import {compare} from "bcrypt"
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client"
  


const prisma = new PrismaClient()

//  const client_id='586371651783-6emvrgpkcghil5kn99vafvtt2piraoeq.apps.googleusercontent.com'
// const client_secret='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'
export const authOptions = {
  secret:process.env.NEXTAUTH_SECRET,
  callbacks: {

//     async signIn({ user, account, profile, email, credentials }) {
     
//         console.log("iam in sign in ",user)
        

//      if(account.provider=="credentials"){
//       return {user:user}
//      }else{

//    if(account.provider=="facebook")
//       {
//        let uuimage=user.image.split('=')[1].split('&')[0]
//       }
       
//       let result =  await   prisma.user.findUnique({ where: {
//         email: account.provider=="facebook"?user.image.split('=')[1].split('&')[0]:user.email
//       }
//       ,})
       
      
      
 
 
//         if(result ){
//           if(result.provider !="credentials"){
//             return {user:result}
//           }
//           else{
//             return null
//           }
            
//       }else{
//         console.log("this is the user opject",user.email)
//         let newuser =  await   prisma.user.create({ data: {
//           email: account.provider=="facebook"?user.image.split('=')[1].split('&')[0]:user.email,

//           name:user.name,
//           password:'',
//  provider :account.provider,
//  photo :user.image
//         },})
//         return {user:newuser}
//       }
 
 
 
 
      
//          }
//  },

   async jwt({token,user,account,profile,isNewUser}){
    console.log("this is jwt ",user,token,profile,account) 
 

        if(token.provider=="credentials")
        {
          delete token.password
          delete token.provider
           
         return token
          
        }
        else{

              
                 
                let result =  await   prisma.user.findUnique({ where: {
                  email: token.provider=="facebook"?token.image.split('=')[1].split('&')[0]:token.email
                }
                ,}).finally(async()=>{prisma.$disconnect()})
                 
                
                
           
           
                  if(result ){
                    delete result.password
                    delete result.provider
                    
                    return result
                    
                   
                      
                }else{
                  console.log("this is the user opject",token.email)
                  let newuser =  await   prisma.user.create({ data: {
                    email: token.provider=="facebook"?token.image.split('=')[1].split('&')[0]:token.email,
          
                    name:token.name,
                    password:'',
           provider :token.provider?token.provider:account.provider,
           photo :token.image?token.image:token.picture
                  },}).finally(async()=>{prisma.$disconnect()})
                   delete newuser.password
                    delete newuser.provider
                    

                  return newuser
                }
           
           
           
           
                
                   }


 
      
   
     
   },
     
    async session({ session, user, token }) {
      console.log('the user and token are ',user,session,token)

       
       session={id:token.id,name:token.name,photo:token.photo}
      

      



      // session.test = "here we put hte token"
      // session.user.token = token.test
                     return      session 
    },
    

},pages:{
  signIn:"./sum"
},
session: {
  strategy:"jwt",
  jwt: true,
  maxAge: 30 * 24 * 60 * 60 // the session will last 30 days
},
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    }),
    GoogleProvider({
      
      clientId: process.env.client_id,
      clientSecret: process.env.client_secret
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" },
      //   name: { label: "user", type: "text" }

      // },
      credentials:{},
      async authorize(credentials, req) {
        console.log("iam authrize ")

        // Add logic here to look up the user from the credentials supplied
         console.log(credentials)
           
          let result =  await   prisma.user.findUnique({ where: {
            email: credentials.email
          },}).finally(async()=>{prisma.$disconnect()})
         console.log(result,credentials.password)
         console.log(typeof(result.password))

         const checkpass = await compare(credentials.password, result.password).then(function(result) {
          return result
      });
console.log("this is check password result",checkpass)
    
    
          console.log("i am in the credential_______________________s")
             if(result && checkpass && result.provider=="credentials"){
                 
                   return result
                 
                 }
             else null
        
      },
      
    }),
    
    
  
    

  ]






}


export default NextAuth(authOptions)