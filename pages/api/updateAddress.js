import  prisma   from '../../lib/prismadb'
import { getToken } from "next-auth/jwt"
 
export default async (req, res) => {
    

  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req})
  console.log("JSON Web Token", token)
  if (token) {
    console.log(req.body.city)
  if(req.body.city==''||req.body.city==null || req.body.city==undefined || req.body.city.length<=0)
  {
    res.status(400).json({error:1})

  }
     const address = await prisma.address.upsert({where:{id:token.id},update: {
        city:req.body.city,
        country:req.body.country,
        postal:req.body.postal,
        street:req.body.build,


      },create: {
        id:token.id,
        userId:token.id,
        city:req.body.city,
        country:req.body.country,
        postal:req.body.postal,
        street:req.body.build,
        province:"",
        phone:""


      },}).finally(async()=>{prisma.$disconnect()})
    console.log(address)
      res.status(200).json({address:address,error:0})
    
  } else {
    // Not Signed in
    res.status(401)
  }
   
}