import { getToken } from "next-auth/jwt"
import  prisma   from '../../lib/prismadb'


 export default async (req, res) => {
    

  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req})
  console.log("JSON Web Token", token)
  if (token) {


    const oreders = await prisma.order.findMany({where: {
      AND: [
        { userId: token.id },
        { payed: true },
       
      ],
    },}).finally(async()=>{prisma.$disconnect()})
     
     res.status(200).json(oreders)
    // console.log("JSON Web Token", JSON.stringify(token, null, 2))
    
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}