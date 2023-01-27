import { PrismaClient } from "@prisma/client"
import { getToken } from "next-auth/jwt"

const prisma = new PrismaClient()
 export default async function handler(req ,res ){

   let neww = false
  let adress =null
 
const token = await getToken({ req})
if (token) {
    const address = await prisma.address.findMany({where:{id:token.id}}).finally(async()=>{prisma.$disconnect()})
    
if(address.length<=0){
   neww = true
}else{
    adress=address[0].country+","+address[0].city+","+address[0].postal+","+address[0].street

}
    const countrys = await prisma.countrys.findMany().finally(async()=>{prisma.$disconnect()})
   const citys = await prisma.citys.findMany({where:{country:countrys[0].id},select:{id:true,name:true}}).finally(async()=>{prisma.$disconnect()})


   
  console.log("i am in cat",{countrys,citys})

     return res.status(200).json([countrys,citys,adress,neww])    }
     else{
        res.status(401)
     }          

  
  
}