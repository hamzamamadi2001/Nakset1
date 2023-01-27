import  client   from '../../lib/prismadb'

 export default async function handler(req ,res ){


  console.log("i am in cat",req.body.id)


  const categories = await client.Citys.findMany({where:{country:req.body.id}}).finally(async()=>{client.$disconnect()})
  console.log(categories)
  console.log("i am in cat",categories)

     return res.status(200).json(categories)



}
