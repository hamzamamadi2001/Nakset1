import  prisma   from '../../lib/prismadb'

export default function (req, res) {

  const validateEmail = (email) => {
    if(email == undefined || email==null) { return false}
          var result = String(email)
      .toLowerCase()
      .match(
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/   );
        if(result==null)  {  return false}
        else{ return true}

  };
  function validateName(name){
    
    if(name == null || name == undefined || name.length<=0){
      return false
    }
    name = name.replace( / +/g, ' ')
    if (name.length<=0) {
      return false
    }
    return true
  }
  function validateMessage(name){
    
    if(name == null || name == undefined || name.length<=0){
      return false
    }
    name = name.replace( / +/g, ' ')
    if (name.length<200) {
      return false
    }
    return true
  }
  if(req.body.email==undefined||req.body.email==null || validateEmail(req.body.email)==false|| req.body.name == null || req.body.name == undefined || validateName(req.body.name)==false||validateMessage(req.body.message)==false) 
  {
    return  res.status(400).json("ther is an error")
  }
   
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
    from :req.body.email,
    to: 'hamzamamadi39@gmail.com',
    subject: `Contact question e-commerce website`,
    text: req.body.email,
    html: `<p>email of user :${req.body.email}</p>
    <p>the message:${req.body.message}</p>
    `
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}