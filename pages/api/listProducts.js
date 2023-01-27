import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
 export default async function handler(req ,res ){
   console.log("thus is from back",req.body.id)
  
 

   const categories = await prisma.category.findMany({select:{id:true,name:true}}).finally(async()=>{prisma.$disconnect()})
   const countrys = await prisma.countrys.findMany().finally(async()=>{prisma.$disconnect()})
   const citys = await prisma.citys.findMany({where:{country:countrys[0].id},select:{id:true,name:true}}).finally(async()=>{prisma.$disconnect()})


  const products = await prisma.product.findMany({where:{city:citys[0].id}}).finally(async()=>{prisma.$disconnect()})
  
  console.log("i am in cat",{countrys,citys,products})

     return res.status(200).json([categories,countrys,citys,products])              

  
  
}