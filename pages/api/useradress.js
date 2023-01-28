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
    const updatedData = JSON.stringify(categories
        , (_key, value) => {
        typeof value === 'bigint' ? value = value.toString() : value
    })
    delete categories[0].id
     res.status(200).json( categories )
    // console.log("JSON Web Token", JSON.stringify(token, null, 2))
    
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}