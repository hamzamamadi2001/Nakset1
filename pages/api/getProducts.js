import  client   from '../../lib/prismadb'

 export default async function handler(req ,res ){
   console.log("thus is from back",req.body)




  const products = await client.product.findMany({where:{city:req.body.city,categoryId:req.body.catid}}).finally(async()=>{client.$disconnect()})

  console.log("i am in cat", products)

     return res.status(200).json(products)



}
