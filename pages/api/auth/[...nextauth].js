import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client"
 


const prisma = new PrismaClient()

 const client_id='586371651783-6emvrgpkcghil5kn99vafvtt2piraoeq.apps.googleusercontent.com'
const client_secret='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'


export default NextAuth({
  secret:"fasdfei;lk;lmciadkfjei;kej;lksjafoi",
  callbacks: {

    async signIn({ user, account, profile, email, credentials }) {
     
        console.log("iam in sign in ",user)
        

     if(account.provider=="credentials"){
      return user
     }else{

   
       
      let result =  await   prisma.user.findUnique({ where: {
        email: user.email
      },})
      
 
 
        if(result ){
          if(result.provider !="credentials"){
            return result
          }
          else{
            return null
          }
            
      }else{
        let newuser =  await   prisma.user.create({ data: {
          email:user.email,
          name:user.name,
          password:'',
 provider :account.provider,
 photo :user.image
        },})
        return newuser
      }
 
 
 
 
      
         }
 },
   
     
    async session({ session, user, token }) {
               return      session.user
    },
    

},pages:{
  signIn:"./sum"
},
  
  providers: [
    
    GoogleProvider({
      
      clientId: client_id,
      clientSecret: client_secret
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
          },})
         console.log(result)
         console.log(typeof(result.password))

    
    
          console.log("i am in the credential_______________________s")
             if(result && result.password==credentials.password && result.provider=="credentials"){
                 
                   return {id:result.id,name:result.name,email:result.email,image:result.photo}
                 
                 }
             else null
        
      },
      
    }),
    
    
  
    

  ]









})