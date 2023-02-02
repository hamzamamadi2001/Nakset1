import NextAuth from 'next-auth'
 import GoogleProvider from "next-auth/providers/google";
import {compare} from "bcrypt"
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import  prisma   from '../../../lib/prismadb'

 

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
                  email:   token.email?token.email:token.picture.split('=')[1].split('&')[0]
                }
                ,}) 
                 
                
                
           
           
                  if(result ){
                    delete result.password
                    delete result.provider
                    
                    return result
                    
                   
                      
                }else{
                  console.log("this is the user opject",token.email)
                  let newuser =  await   prisma.user.create({ data: {
                    email: token.email?token.email:token.picture.split('=')[1].split('&')[0] ,
          
                    name:token.name,
                    password:'',
           provider :token.provider?token.provider:"facebook",
           photo :token.image?token.image:token.picture
                  },}) 
                  if(token.email!=undefined && token.email!=null){
                    let nodemailer = require('nodemailer')
                    const transporter = nodemailer.createTransport({
                      port: 465,
                     
                      host: "smtp.gmail.com",
                      auth: {
                        user: 'hamzamamadi39@gmail.com',
                        pass:'cqglihvtoiydsjia',
                      }, tls: {
                        rejectUnauthorized: false
                      },
                      secure: true,
                    })
                    const mailData = {
                      from :'hamzamamadi39@gmail.com',
                      to: token.email,
                      subject: `welcome to nakset`,
                      text: "registration completed" ,
                      html:  `<!DOCTYPE html>
                      <!--Code By Webdevtrick ( https://webdevtrick.com )-->
                      <html lang="en">
                      
                      <head>
                        <meta charset="UTF-8">
                        <title>HTML Email Template | Webdevtrick.com</title>
                      </head>
                      
                      <body>
                      
                        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                      
                      <!--HEADER -->
                      
                          <tbody><tr>
                            <td align="center">
                              <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                  <td align="center" valign="top" background="https://res.cloudinary.com/my-online-store/image/upload/v1675288847/meat22_aiy7qr.jpg" bgcolor="#66809b" style="background-size:cover; background-position:top;height=" 400""="">
                                    <table class="col-600" width="600" height="400" border="0" align="center" cellpadding="0" cellspacing="0">
                      
                                      <tbody><tr>
                                        <td height="40"></td>
                                      </tr>
                      
                      
                                      <tr>
                                        <td align="center" style="line-height: 0px;">
                                          <img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://res.cloudinary.com/my-online-store/image/upload/v1675079704/logo2_b2nzmp.png" width="200" height="115" alt="logo">
                                        </td>
                                      </tr>
                      
                      
                      
                                      <tr>
                                        <td align="center"bgcolor="#66809b" style="font-family: 'Raleway', sans-serif; font-size:37px; color:#001391;; line-height:24px; font-weight: bold; letter-spacing: 5px;">
                                          WELCOME to Nakset
                                        </td>
                                      </tr>
                      
                      
                      
                      
                      
                                     
                      
                      
                                      <tr>
                                        <td height="50"></td>
                                      </tr>
                                    </tbody></table>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                      
                      
                      <!-- END HEADERR -->
                      
                      
                     
                      
                      <!-- START TITLE -->
                      
                          <tr>
                            <td align="center">
                              <table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
                                <tbody><tr>
                                  <td align="center" bgcolor="#333">
                                    <table class="col-600" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
                                      <tbody><tr>
                                        <td height="33"></td>
                                      </tr>
                                      <tr>
                                        <td>
                      
                      
                                          <table class="col1" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
                      
                                            <tbody><tr>
                                            <td height="18"></td>
                                            </tr>
                      
                                            <tr>
                                              <td align="center">
                                                <img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" src="https://webdevtrick.com/wp-content/uploads/email-template.png" alt="img" width="156" height="160">
                                              </td>
                      
                      
                      
                                            </tr>
                                          </tbody></table>
                      
                      
                      
                                          <table class="col3_one" width="380" border="0" align="right" cellpadding="0" cellspacing="0">
                      
                                            <tbody><tr align="left" valign="top">
                                              <td style="font-family: 'Raleway', sans-serif; font-size:20px; color:#fbb016; line-height:30px; font-weight: bold;">Hi ${token.name}  </td>
                                            </tr>
                      
                      
                                            <tr>
                                              <td height="5"></td>
                                            </tr>
                      
                      
                                            <tr align="left" valign="top">
                                              <td style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height:24px; font-weight: 300;">
                                                  your registration has been completed and we willing to you yo enjoy halal food with us and sharing it with your friends
                                              </td>
                                            </tr>
                      
                                            <tr>
                                              <td height="10"></td>
                                            </tr>
                      
                                            <tr align="left" valign="top">
                                              <td>
                                                <table class="button" style="border: 2px solid #fff;" bgcolor="#fbb016" width="30%" border="0" cellpadding="0" cellspacing="0">
                                                  <tbody><tr>
                                                    <td width="10"></td>
                                                    <td height="30" align="center" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#ffffff;">
                                                      <a href="#" style="color:#ffffff; text-decoration: none;">About us</a>
                                                    </td>
                                                    <td width="10"></td>
                                                  </tr>
                                                </tbody></table>
                                              </td>
                                            </tr>
                      
                                          </tbody></table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="33"></td>
                                      </tr>
                                    </tbody></table>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                      
                      
                      <!-- END TITLE -->
                       <!-- START SHOWCASE -->
                      
                       <tr>
                        <td align="center">
                          <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px; border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
                            <tbody><tr>
                              <td height="35"></td>
                            </tr>
                  
                            <tr>
                              <td align="center" style="font-family: 'Raleway', sans-serif; font-size:22px; font-weight: bold; color:#333;">Our certeficates</td>
                            </tr>
                  
                            <tr>
                              <td height="10"></td>
                            </tr>
                  
                  
                            <tr>
                              <td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">
                  these are the most important certeficates that we have in our company.We are very broad that we achive theme            </td>
                            </tr>
                  
                          </tbody></table>
                        </td>
                      </tr>
                  
                      <tr>
                        <td align="center">
                          <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9; ">
                            <tbody><tr>
                              <td height="10"></td>
                            </tr>
                            <tr>
                              <td>
                  
                  
                                <table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
                                  <tbody><tr>
                                    <td height="30"></td>
                                  </tr>
                                  <tr>
                                    <td align="center">
                                      <table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">
                  
                                        <tbody><tr align="center" style="line-height:0px;">
                                          <td>
                                            <img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://res.cloudinary.com/my-online-store/image/upload/v1675290251/iso_viirsy.jpg" width="90" height="78" alt="icon">
                                          </td>
                                        </tr>
                  
                   
                   
                  
                    
                  
                                      </tbody></table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td height="30"></td>
                                  </tr>
                                </tbody></table>
                  
                  
                  
                  
                  
                                <table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
                                  <tbody><tr>
                                    <td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
                                      <p style="padding-left: 24px;">&nbsp;</p>
                                    </td>
                                  </tr>
                                </tbody></table>
                  
                  
                  
                                <table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
                                  <tbody><tr>
                                    <td height="30"></td>
                                  </tr>
                                  <tr>
                                    <td align="center">
                                      <table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">
                  
                                        <tbody><tr align="center" style="line-height:0px;">
                                          <td>
                                            <img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://res.cloudinary.com/my-online-store/image/upload/v1675290251/haccp_vi97me.png" width="90" height="78" alt="icon">
                                          </td>
                                        </tr>
                   
                                       
                                        
                  
                  
                                      </tbody></table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td height="30"></td>
                                  </tr>
                                </tbody></table>
                  
                  
                  
                                <table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
                                  <tbody><tr>
                                    <td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
                                      <p style="padding-left: 24px;">&nbsp;</p>
                                    </td>
                                  </tr>
                                </tbody></table>
                  
                  
                                <table class="col3" width="183" border="0" align="right" cellpadding="0" cellspacing="0">
                                  <tbody><tr>
                                    <td height="30"></td>
                                  </tr>
                                  <tr>
                                    <td align="center">
                                      <table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">
                  
                                        <tbody><tr align="center" style="line-height:0px;">
                                          <td>
                                            <img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://res.cloudinary.com/my-online-store/image/upload/v1675290251/halal_nu6njq.jpg" width="78" height="78" alt="icon">
                                          </td>
                                        </tr>
                  
                  
                                      
                                      </tbody></table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td height="30"></td>
                                  </tr>
                                </tbody></table>
                  
                  
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                      </tr>
                  
                        <tr>
                            <td height="5"></td>
                      </tr>
                  
                  
                  <!-- END SHOWCASE -->
                  
                      
                       
                      
                      <!-- START FOOTER -->
                      
                          <tr>
                            <td align="center">
                              <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
                                <tbody><tr>
                                  <td height="50"></td>
                                </tr>
                                <tr>
                                  <td align="center" bgcolor="#333" background="https://res.cloudinary.com/my-online-store/image/upload/v1675288847/meat22_aiy7qr.jpg" height="185">
                                    <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                                      <tbody><tr>
                                        <td height="25"></td>
                                      </tr>
                      
                                        <tr>
                                        <td align="center" style="font-family: 'Raleway',  sans-serif; font-size:26px; font-weight: 500; color:#fbb016; background-color: #333;">Follow Us On Social Media</td>
                                        </tr>
                      
                      
                                      <tr>
                                        <td height="25"></td>
                                      </tr>
                      
                      
                      
                                      </tbody></table><table align="center" width="35%" border="0" cellspacing="0" cellpadding="0">
                                      <tbody><tr>
                                        <td align="center" width="30%" style="vertical-align: top;">
                                            <a href="https://www.facebook.com" target="_blank"> <img width="50" height="50" src="https://res.cloudinary.com/my-online-store/image/upload/v1675291507/insta_bzxwhp.svg"> </a>
                                        </td>
                                        <td align="center" width="30%" style="vertical-align: top;">
                                          <a href="https://www.facebook.com" target="_blank"> <img width="50" height="50" src="https://res.cloudinary.com/my-online-store/image/upload/v1675291507/facebook_ctljmv.svg"> </a>
                                      </td>
                                        <td align="center" class="margin" width="30%" style="vertical-align: top;">
                                           <a href="https://twitter.com" target="_blank"> <img width="50" height="50" src="https://res.cloudinary.com/my-online-store/image/upload/v1675291507/pain_dbiivq.svg"> </a>
                                        </td>
                       
                                      </tr>
                                      </tbody></table>
                      
                      
                      
                                    </td></tr></tbody></table>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                      
                      <!-- END FOOTER -->
                        
                              </tbody></table>
                        
                      </body>
                      </html>`
                    }
                    transporter.sendMail(mailData, function (err, info) {
                      if(err)
                        console.log(err)
                      else
                        console.log(info)
                    })
                  }
                 
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
 
        // Add logic here to look up the user from the credentials supplied
         console.log(credentials)
         const validateEmail = (email) => {
          if(email == undefined || email==null) { return false}
                var result = String(email)
            .toLowerCase()
            .match(
              /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/   );
              if(result==null)  {  return false}
              else{ return true}
      
        };
         if((typeof(credentials.password)!="string" ||credentials.password.length<=0 ||typeof(credentials.email)!="string"||validateEmail(credentials.email)==false )){
          return null
         }
           
          let result =  await   prisma.user.findUnique({ where: {
            email: credentials.email
          },}).finally(async()=>{prisma.$disconnect()})
          if(result==undefined || result==null ){
            return null
          }
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