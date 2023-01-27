 import {hash} from "bcrypt"
 import  client   from '../../lib/prismadb'

 export default async function handler(req ,res ){
  console.log("i am in registation")
  
  
  let exist =  await   client.user.findUnique({ where: {
    email: req.body.email
  },})
  console.log(exist)
  if(exist){
   return res.status(400).json({result:{error:1}})  
  }

hash(req.body.password, 10).then( async function(hash) {
const result = await client.user.create({data:{email:req.body.email,password:hash,provider:"credentials",name:req.body.username,photo:"https://static.vecteezy.com/system/resources/previews/000/574/512/large_2x/vector-sign-of-user-icon.jpg"}}).finally(async()=>{client.$disconnect()})
      console.log(result)
  console.log("i am in 3333",result)

     return res.status(200).json({result:{error:0,result,password:req.body.password}}) 

 });
                   

  
  
}