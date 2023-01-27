// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51ML3mmCZwBUcumd5gzAH8dvIQ5NA0VSCvB0Q0cnBVz0eRvDX8micDhbtvwwkPwjT5qPPIyOjuz6s7L1HqxnvLsVc00vB5AL5yc');
import { buffer } from 'micro';
import  client   from '../../lib/prismadb'


// Find your endpoint's secret in your Dashboard's webhook settings
const endpointSecret = "whsec_e2792184666d17c0c65a68433b822e5f4bf079208fca0462ba106307323fbfd3";

export const config = {
    api: {
      bodyParser: false,
    },
  };

 
export default async (request,response) => {
const fulfillOrder = (lineItems) => {
  // TODO: fill me in
  console.log("Fulfilling order", lineItems);
}
const buff = await buffer(request)
const ress = buff.toString()
const body = await request.rawbody
 
//    const payload = request.body;
//   const sig = request.headers['stripe-signature'];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
//   } catch (err) {
//     return response.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   // Handle the checkout.session.completed event
//   if (event.type === 'checkout.session.completed') {
//     // Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
//     const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
//       session.id,
//       {
//         expand: ['line_items'],
//       }
//     );
//     const lineItems = session.line_items;

//     // Fulfill the purchase...
//     fulfillOrder(lineItems);
//   }

//   response.status(200);


//-------------------------------------------------------------------------------------------------
const sig = request.headers['stripe-signature'];

let event;
 
    try{
        event = stripe.webhooks.constructEvent(ress, sig, endpointSecret);
  
    }
    catch(e){
        console.log("there was an error in webhooks",e);
    }
 

// Handle the event
switch (event.type) {
    case 'charge.succeeded':
      const paymentIntent = event.data.object.metadata;
      console.log("\x1b[32m","you got the mony now!",paymentIntent)
      const updateUser = await client.order.update({
        where: {
          id:parseInt(paymentIntent.orderID),
        },
        data: {
          payed: true,
        },
      })
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
    break;
     
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  response.json({received: true});

// Return a 200 response to acknowledge receipt of the event
  
}
 