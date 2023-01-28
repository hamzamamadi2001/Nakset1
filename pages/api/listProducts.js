 import  client   from '../../lib/prismadb'

  export default async function handler(req ,res ){
   
 

   const categories = await client.category.findMany({select:{id:true,name:true}}) 
    
 

   
 
     return res.status(200).json( [categories])              

  
  
}