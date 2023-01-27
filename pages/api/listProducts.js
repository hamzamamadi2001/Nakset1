 import  client   from '../../lib/prismadb'

  export default async function handler(req ,res ){
   
 

   const categories = await client.category.findMany({select:{id:true,name:true}}) 
    
   const citys = await client.citys.findMany({where:{country:1},select:{id:true,name:true}}) 


  const products = await client.product.findMany({where:{city:citys[0].id}})
  
 
     return res.status(200).json({data:[categories,citys,products]})              

  
  
}