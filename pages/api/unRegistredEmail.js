//unRegistredEmail
import  client   from '../../lib/prismadb'

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/   );
};


 export default async function handler(req ,res ){
   console.log("thus is from back",req.body,validateEmail(req.body.email));




try {
        if(req.body.email==""||req.body.email==null||req.body.email==undefined||validateEmail(req.body.email)==null||req.body.email.length==0){
          throw new Error 
          }else{
                console.log("good")
                const exist = await client.notRegistredEmails.findFirst({where:{email:req.body.email}}).finally(async()=>{client.$disconnect()})
                if(exist)
                        {
                          return res.status(200).json({error:2})
                        }
                        else
                            {
                              const products = await client.notRegistredEmails.create({data:{email:req.body.email}}).finally(async()=>{client.$disconnect()})
                              return res.status(200).json({error:0})
                            }
                
              }
        

       }  catch (error) {
                  console.log("error")
                  return res.status(400).json({error:1})
        }



  




}
