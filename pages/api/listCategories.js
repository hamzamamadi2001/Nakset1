import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()
 export default async function handler(req ,res ){
   
  
 

    
  const categories = await prisma.category.findMany()
  console.log(categories)
  console.log("i am in cat",categories)

     return res.status(200).json(categories)              

  
  
}