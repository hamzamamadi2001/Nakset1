 import  client   from '../../lib/prismadb'

  export default async function handler(req ,res ){
   
 

   const categories = await client.category.findMany({select:{id:true,name:true}}) 
  const citys = await client.citys.findMany({where:{country:countrys[0].id},select:{id:true,name:true}}) 


  const products = await client.product.findMany({where:{city:citys[0].id}})
  
 console.log(categories,citys,products)
     return res.status(200).json({data:[categories,[],citys,products]})              

  
  
}