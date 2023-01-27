import { PrismaClient } from "@prisma/client"
import { getToken } from "next-auth/jwt"

const prisma = new PrismaClient()
export default async (req, res) => {
    

  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req})
  console.log("JSON Web Token", token)
  if (token) {
     const address = await prisma.address.upsert({where:{id:token.id},update: {
        city:req.body.city,
        country:req.body.country,
        postal:req.body.postal,
        street:req.body.build,


      },create: {
        id:token.id,
        city:req.body.city,
        country:req.body.country,
        postal:req.body.postal,
        street:req.body.build,


      },}).finally(async()=>{prisma.$disconnect()})
    console.log(address)
      res.status(200).json(address)
    
  } else {
    // Not Signed in
    res.status(401)
  }
   
}