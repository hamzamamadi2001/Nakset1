import  client   from '../../lib/prismadb'

 export default async function handler(req ,res ){
   
  
 

    
  const categories = await client.category.findMany().finally(async()=>{client.$disconnect()})
  console.log(categories)
  console.log("i am in cat",categories)

     return res.status(200).json(categories)              

  
  
}