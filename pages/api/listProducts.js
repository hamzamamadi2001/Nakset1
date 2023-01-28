import { PrismaClient } from "@prisma/client"
import  prisma   from '../../lib/prismadb'

 export default async function handler(req ,res ){
   
 

   const categories = await prisma.category.findMany({select:{id:true,name:true}}).finally(async()=>{prisma.$disconnect()})
   const countrys = await prisma.countrys.findMany().finally(async()=>{prisma.$disconnect()})
   const citys = await prisma.citys.findMany({where:{country:countrys[0].id},select:{id:true,name:true}}).finally(async()=>{prisma.$disconnect()})


  const products = await prisma.product.findMany({where:{city:citys[0].id}}).finally(async()=>{prisma.$disconnect()})
  
 
     return res.status(200).json({data:[categories,countrys,citys,products]})              

  
  
}