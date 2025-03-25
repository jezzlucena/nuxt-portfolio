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

          You received an entry on the contact form at jezzlucena.com, or one of the apps.

          Source: ${req.body.source}

          First Name: ${req.body.firstName}
          Last Name: ${req.body.lastName}

          Email: ${req.body.email}
          Phone: ${req.body.phone}

          Subject: ${req.body.subject}
          Message: ${req.body.message}

          Kind regards,
          Jezz Lucena`
  }, function(err){
    if (!err) {
      res.status(200).json(true)
    } else {
      console.error(err)
    }
  })
}

export default {
  send
}
