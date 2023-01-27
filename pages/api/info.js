import  client   from '../../lib/prismadb'

 export default async function handler(req ,res ){
   console.log("thus is from back",req.body.id)
  
 

    
   const feed = await client.$queryRaw`SELECT * FROM Countrys`
    console.log("this is the post ",feed)
  // console.log("i am in cat",categories)

     return res.status(200).json(feed)              

  
  
}