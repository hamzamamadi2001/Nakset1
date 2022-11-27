import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()
 export default async function handler(req ,res ){
  console.log("i am in registation")
  
  
  let exist =  await   prisma.user.findUnique({ where: {
    email: req.body.email
  },})
  console.log(exist)
  if(exist){
   return res.status(200).json({result:{error:1}})  
  }

    
      const result = await prisma.user.create({data:{email:req.body.email,password:req.body.password,provider:"credentials",name:req.body.username,photo:"https://static.vecteezy.com/system/resources/previews/000/574/512/large_2x/vector-sign-of-user-icon.jpg"}})
      console.log(result)
  console.log("i am in 3333",result)

     return res.status(200).json({result:{error:0,result}})              

  
  
}