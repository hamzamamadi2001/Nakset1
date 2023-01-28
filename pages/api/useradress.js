import { getToken } from "next-auth/jwt"
import  prisma   from '../../lib/prismadb'

export default async (req, res) => {
    

  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req})
  console.log("JSON Web Token", token)
  if (token) {
console.log("this is the token",token)

    const categories = await prisma.address.findMany({where:{id:token.id}}).finally(async()=>{prisma.$disconnect()})
    console.log(categories)
   if(categories.length>0){
        delete categories[0].id

   }
     res.status(200).json( categories )
     
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}