 import  client   from '../../lib/prismadb'

  export default async function handler(req ,res ){
   
 

   const categories = await client.category.findMany({select:{id:true,name:true}}).finally(async()=>{client.$disconnect()})
   const countrys = await client.countrys.findMany().finally(async()=>{client.$disconnect()})
   const citys = await client.citys.findMany({where:{country:countrys[0].id},select:{id:true,name:true}}).finally(async()=>{client.$disconnect()})


  const products = await client.product.findMany({where:{city:citys[0].id}}).finally(async()=>{client.$disconnect()})
  
 
     return res.status(200).json({data:[categories,countrys,citys,products]})              

  
  
}