import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export default function (req, res) {
   
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
   
    host: "smtp.gmail.com",
    auth: {
      user: 'hamzamamadi39@gmail.com',
      pass:'0792966687',
    }, tls: {
      rejectUnauthorized: false
    },
    secure: true,
  })
  const mailData = {
    from :'hamzamamadi39@gmail.com',
    to: 'hamzamamadi39@gmail.com',
    subject: `Message From hamzamamaidtest`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}