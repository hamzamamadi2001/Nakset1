import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()
 export default async function handler(req ,res ){


  console.log("i am in cat",req.body.id)


  const categories = await prisma.Citys.findMany({where:{country:req.body.id}}).finally(async()=>{prisma.$disconnect()})
  console.log(categories)
  console.log("i am in cat",categories)

     return res.status(200).json(categories)



}