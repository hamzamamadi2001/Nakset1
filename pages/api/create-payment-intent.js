// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import  prisma   from '../../lib/prismadb'
const moment = require("moment");

 const calculateOrderAmount = async (items,currency,userid) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  async function fetchText(currency) {
    if(currency=="eur")
    return 1
    let response = await fetch('https://api.frankfurter.app/latest?to='+currency);

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.json();
        console.log("this is the response",data)
        // handle data
        if(currency=="huf")
        return parseFloat(data.rates.HUF)
        
        else
        return parseFloat(data.rates.USD)
        

         
    }
}

 var curr= await fetchText(currency)
 
 
   


  var arr=[]

items.forEach(ele => {
  arr.push(ele.id)
  
})
// console.log("this is the array",arr)
const getUser = await prisma.product.findMany({
  where: {
    id: { in: arr},
  },
}) 
  var sum=0;
  var info=[]
  try {
   getUser.forEach(eleserv => {
     
  items.forEach(eleclien => {
    if(eleserv.id==eleclien.id) {
      sum += eleserv.price*eleclien.quantity;
      info.push({name:eleserv.name,quantity:eleclien.quantity,unit:eleserv.unit,photo:eleserv.photo})
    }
  });
  
}); 
  } catch (error) {
    return 0
  }
  if(info.length==0){
    return -1
  }
  console.log("this is user id",userid)
  const getorder = await prisma.order.create({
    data: {
      userId:parseInt(userid),
      order:JSON.stringify(info),
      date: moment().format("MM/DD/YYYY HH:mm:ss"),
      total :parseFloat((Math.round( sum*curr* 100) / 100).toFixed(2)),
  currency :currency,
  status :"verifing",
  currencyValue:curr
     
    },
  }) 
   
 console.log("this is the currency from the api",curr)
 return  {sum:(Math.round( sum*curr* 100) / 100).toFixed(2),orderID:getorder.id}
  
};




import { getToken } from "next-auth/jwt"

export default async function handler(req, res) {
  // const token = await getToken({ req})
  // if (token) {
  const { items ,currency,id} = req.body;
//checking if the information has been sent from the client are correct 
// console.log("this is the items",items)
// let error = false;
// let arr=[]

// items.forEach(ele => {
//   arr.push(ele.id)
  
// })
// // console.log("this is the array",arr)
// const getUser = await prisma.product.findMany({
//   where: {
//     id: { in: arr},
//   },
// })
// let sum=0;
// console.log("this is the user info",getUser)
// getUser.forEach(eleserv => {
//   items.forEach(eleclien => {
//     if(eleserv.id==eleclien.id) {
//       sum += eleserv.price*eleclien.quantity;
//     }
//   });
  
// });
console.log("this is the currency ",currency)
var cc=await calculateOrderAmount(items,currency,id)
if(cc==-1){

  res.send({message:"your "});
  
}
  if(cc.sum==0){
    res.send({
      message: "there was an error processing",
    });
    
  }
  // console.log("this is the cc value",cc.data)

//   const payout = await stripe.payouts.create({amount: 50000, currency: 'huf'});
// console.log("this is the payout",payout);
  // Create a PaymentIntent with the order amount and currency
  // console.log("this is the test of the payment intent",items)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: cc.sum*100,
    currency: currency,
    automatic_payment_methods:{
     enabled: true
    },
    metadata: {orderID:cc.orderID}
     
  });
   
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
// }
// else {
//   // Not Signed in
//   res.status(401)
// }
// res.end()
};