import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()
 export default async function handler(req ,res ){
   console.log("thus is from back",req.body.id)
  
 

    
  const categories = await prisma.product.findMany({where:{categoryId:parseInt(req.body.id)}})
  console.log(categories)
  console.log("i am in cat",categories)

     return res.status(200).json(categories)              

  
  
}