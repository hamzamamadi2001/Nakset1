import { PrismaClient } from "@prisma/client"
import  prisma   from '../../lib/prismadb'

 export default async function handler(req ,res ){
   
 

   const categories = await prisma.category.findMany({select:{id:true,name:true}})
   const countrys = await prisma.countrys.findMany()
   const citys = await prisma.citys.findMany({where:{country:countrys[0].id},select:{id:true,name:true}}) 


  const products = await prisma.product.findMany({where:{city:citys[0].id}})
  
 
     return res.status(200).json({data:[categories,countrys,citys,products]})              

  
  
}