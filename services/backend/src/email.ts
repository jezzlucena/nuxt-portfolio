import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: process.env.SENDGRID_API_KEY
  }
}))

const send = (req, res) => {
  transporter.sendMail({
    from: process.env.SENDGRID_SENDER_IDENTITY_EMAIL,
    to: process.env.SENDGRID_SENDER_IDENTITY_EMAIL,
    subject: 'Contact from jezzlucena.com',
    text: `Hello!\n\n

          You received an entry on the contact form at jezzlucena.com, or one of the apps.\n\n

          Source: ${req.body.source}\n\n

          First Name: ${req.body.firstName}\n
          Last Name: ${req.body.lastName}\n\n

          Email: ${req.body.email}\n
          Phone: ${req.body.phone}\n\n

          Subject: ${req.body.subject}\n
          Message: ${req.body.message}\n\n

          Kind regards,
          Jezz Lucena`
  }, function(err){
    if (!err) {
      res.json(true)
    } else {
      console.error(err)
    }
  })
}

export default {
  send
}
