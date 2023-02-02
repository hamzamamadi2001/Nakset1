// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('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');
import { buffer } from 'micro';
import  prisma   from '../../lib/prismadb'


// Find your endpoint's secret in your Dashboard's webhook settings
const endpointSecret = "whsec_e2792184666d17c0c65a68433b822e5f4bf079208fca0462ba106307323fbfd3";

export const config = {
    api: {
      bodyParser: false,
    },
  };

 
export default async (request,response) => {
 
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
      console.log(" i am in ******************************** stripe succed charge")
      const paymentIntent = event.data.object.metadata;
      console.log("\x1b[32m","you got the mony now!",paymentIntent)
      const updateUser = await prisma.order.update({
        where: {
          id:parseInt(paymentIntent.orderID),
        },
        data: {
          payed: true,
        },
      
      })
      const user = await prisma.user.findFirst({
        where: {
          id:updateUser.userId,
        },
        select: {
          email: true,
        },
      
      })
      await prisma.$disconnect()
      let nodemailer = require('nodemailer')
      const transporter = nodemailer.createTransport({
        port: 465,
       
        host: "smtp.gmail.com",
        auth: {
          user: 'hamzamamadi39@gmail.com',
          pass:'cqglihvtoiydsjia',
        }, tls: {
          rejectUnauthorized: false
        },
        secure: true,
      })
      const mailData = {
        from :"hamzamamadi39@gmail.com",
        to: user.email,
        subject: `Order confiramtion`,
        text: "Order confirmation",
        html: `<!DOCTYPE html>
        <!--Code By Webdevtrick ( https://webdevtrick.com )-->
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <title>HTML Email Template | Webdevtrick.com</title>
        </head>
        
        <body>
        
          <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
        
        <!--HEADER -->
        
            <tbody><tr>
              <td align="center">
                <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tbody><tr>
                    <td align="center" valign="top" background="https://res.cloudinary.com/my-online-store/image/upload/v1675288847/meat22_aiy7qr.jpg" bgcolor="#66809b" style="background-size:cover; background-position:top;height=" 400""="">
                      <table class="col-600" width="600" height="400" border="0" align="center" cellpadding="0" cellspacing="0">
        
                        <tbody><tr>
                          <td height="40"></td>
                        </tr>
        
        
                        <tr>
                          <td align="center" style="line-height: 0px;">
                            <img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://res.cloudinary.com/my-online-store/image/upload/v1675079704/logo2_b2nzmp.png" width="200" height="115" alt="logo">
                          </td>
                        </tr>
        
        
        
                        <tr>
                          <td align="center"bgcolor="#66809b" style="font-family: 'Raleway', sans-serif; font-size:37px; color:#001391;; line-height:24px; font-weight: bold; letter-spacing: 5px;">
                            Order confirmed
                          
                          </td>
                        </tr>
                        <tr>
                          <td align="center"bgcolor="#66809b" style="font-family: 'Raleway', sans-serif; font-size:20px; color:#001391;; line-height:24px; font-weight: bold; letter-spacing: 5px;">
                           your order is preparing now 
                          </td>
                        </tr>
        
        
        
        
                       
        
        
                        <tr>
                          <td height="50"></td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
        
        
        <!-- END HEADERR -->
        
        
       
        
        <!-- START TITLE -->
        
            ${JSON.parse(updateUser.order).map(element => {
              console.log(element)
              return(
                `<tr>
                <td align="center">
                  <table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                      <td align="center" bgcolor="#fffff">
                        <table class="col-600" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tbody><tr>
                            <td height="33"></td>
                          </tr>
                          <tr>
                            <td>
          
          
                              <table class="col1" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
          
                                <tbody><tr>
                                <td height="18"></td>
                                </tr>
          
                                <tr>
                                  <td align="center">
                                    <img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" src= ${element.photo}   alt="img" width="156" height="160">
                                  </td>
          
          
          
                                </tr>
                              </tbody></table>
          
          
          
                              <table class="col3_one" width="380" border="0" align="right" cellpadding="0" cellspacing="0">
          
                                <tbody><tr align="left" valign="top">
                                  <td style="font-family: 'Raleway', sans-serif; font-size:20px; color:#fbb016; line-height:30px; font-weight: bold;">your order</td>
                                </tr>
          
          
                                <tr>
                                  <td height="5"></td>
                                </tr>
          
          
                                <tr align="left" valign="top">
                                  <td style=" font-family: 'Lato', sans-serif; font-size:25px; color:rgb(0, 0, 0); line-height:24px; font-weight: 700;">
      ${element.quantity+""+element.unit}                      </td>
                                </tr>
          
                                <tr>
                                  <td height="10"></td>
                                </tr>
          
                                
          
                              </tbody></table>
                            </td>
                          </tr>
                          <tr>
                            <td height="33"></td>
                          </tr>
                         
                        </tbody></table>
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>`
              )
             
          })}
          <tr>
                <td align="center">
                  <table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
          <td  style=" font-family: 'Lato', sans-serif; font-size:25px; color:rgb(0, 0, 0); line-height:24px; font-weight: 700;">the total is : ${updateUser.total+" "+updateUser.currency}</td>
        </tr>
        <tr align="left" valign="top">
            <td>
              <table class="button" style="border: 2px solid #fff;" bgcolor="#fbb016" width="30%" border="0" cellpadding="0" cellspacing="0">
                <tbody><tr>
                  <td width="10"></td>
                  <td height="30" align="center" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#ffffff;">
                    <a href="www.google.com" style="color:#ffffff; text-decoration: none;">Go to my orders</a>
                  </td>
                  <td width="10"></td>
                </tr>
              </tbody></table>
            </td>
          </tr>
          </tbody></table>
          </td>
       
       
         <tr>
          
          <td align="center">
            <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px; border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
              <tbody><tr>
                <td height="35"></td>
              </tr>
    
              <tr>
                <td align="center" style="font-family: 'Raleway', sans-serif; font-size:22px; font-weight: bold; color:#333;">Our certeficates</td>
              </tr>
    
              <tr>
                <td height="10"></td>
              </tr>
    
    
              <tr>
                <td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">
    these are the most important certeficates that we have in our company.We are very broad that we achive theme            </td>
              </tr>
    
            </tbody></table>
          </td>
        </tr>
    
        <tr>
          <td align="center">
            <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9; ">
              <tbody><tr>
                <td height="10"></td>
              </tr>
              <tr>
                <td>
    
    
                  <table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
                    <tbody><tr>
                      <td height="30"></td>
                    </tr>
                    <tr>
                      <td align="center">
                        <table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">
    
                          <tbody><tr align="center" style="line-height:0px;">
                            <td>
                              <img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://res.cloudinary.com/my-online-store/image/upload/v1675290251/iso_viirsy.jpg" width="90" height="78" alt="icon">
                            </td>
                          </tr>
    
     
     
    
      
    
                        </tbody></table>
                      </td>
                    </tr>
                    <tr>
                      <td height="30"></td>
                    </tr>
                  </tbody></table>
    
    
    
    
    
                  <table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
                    <tbody><tr>
                      <td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
                        <p style="padding-left: 24px;">&nbsp;</p>
                      </td>
                    </tr>
                  </tbody></table>
    
    
    
                  <table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
                    <tbody><tr>
                      <td height="30"></td>
                    </tr>
                    <tr>
                      <td align="center">
                        <table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">
    
                          <tbody><tr align="center" style="line-height:0px;">
                            <td>
                              <img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://res.cloudinary.com/my-online-store/image/upload/v1675290251/haccp_vi97me.png" width="90" height="78" alt="icon">
                            </td>
                          </tr>
     
                         
                          
    
    
                        </tbody></table>
                      </td>
                    </tr>
                    <tr>
                      <td height="30"></td>
                    </tr>
                  </tbody></table>
    
    
    
                  <table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
                    <tbody><tr>
                      <td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
                        <p style="padding-left: 24px;">&nbsp;</p>
                      </td>
                    </tr>
                  </tbody></table>
    
    
                  <table class="col3" width="183" border="0" align="right" cellpadding="0" cellspacing="0">
                    <tbody><tr>
                      <td height="30"></td>
                    </tr>
                    <tr>
                      <td align="center">
                        <table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">
    
                          <tbody><tr align="center" style="line-height:0px;">
                            <td>
                              <img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://res.cloudinary.com/my-online-store/image/upload/v1675290251/halal_nu6njq.jpg" width="78" height="78" alt="icon">
                            </td>
                          </tr>
    
    
                        
                        </tbody></table>
                      </td>
                    </tr>
                    <tr>
                      <td height="30"></td>
                    </tr>
                  </tbody></table>
    
    
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
    
          <tr>
              <td height="5"></td>
        </tr>
    
    
    <!-- END SHOWCASE -->
    
        
         
        
        <!-- START FOOTER -->
        
            <tr>
              <td align="center">
                <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
                  <tbody><tr>
                    <td height="50"></td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#333" background="https://res.cloudinary.com/my-online-store/image/upload/v1675288847/meat22_aiy7qr.jpg" height="185">
                      <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                          <td height="25"></td>
                        </tr>
        
                          <tr>
                          <td align="center" style="font-family: 'Raleway',  sans-serif; font-size:26px; font-weight: 500; color:#fbb016; background-color: #333;">Follow Us On Social Media</td>
                          </tr>
        
        
                        <tr>
                          <td height="25"></td>
                        </tr>
        
        
        
                        </tbody></table><table align="center" width="35%" border="0" cellspacing="0" cellpadding="0">
                        <tbody><tr>
                          <td align="center" width="30%" style="vertical-align: top;">
                              <a href="https://www.facebook.com" target="_blank"> <img width="50" height="50" src="https://res.cloudinary.com/my-online-store/image/upload/v1675291507/insta_bzxwhp.svg"> </a>
                          </td>
                          <td align="center" width="30%" style="vertical-align: top;">
                            <a href="https://www.facebook.com" target="_blank"> <img width="50" height="50" src="https://res.cloudinary.com/my-online-store/image/upload/v1675291507/facebook_ctljmv.svg"> </a>
                        </td>
                          <td align="center" class="margin" width="30%" style="vertical-align: top;">
                             <a href="https://twitter.com" target="_blank"> <img width="50" height="50" src="https://res.cloudinary.com/my-online-store/image/upload/v1675291507/pain_dbiivq.svg"> </a>
                          </td>
         
                        </tr>
                        </tbody></table>
        
        
        
                      </td></tr></tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
        
        <!-- END FOOTER -->
          
                </tbody></table>
          
        </body>
        </html>`
      }
      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
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
 