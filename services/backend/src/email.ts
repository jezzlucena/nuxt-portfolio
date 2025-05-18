import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const msg = {
    to: process.env.SENDGRID_SENDER_IDENTITY_EMAIL,
    from: process.env.SENDGRID_SENDER_IDENTITY_EMAIL, // Use your verified sender
    subject: 'Contact from jezzlucena.com',
    text: `Hello!

You received an entry on the contact form at jezzlucena.com, or one of the apps.

Source: ${req.body.source}

First Name: ${req.body.firstName}
Last Name: ${req.body.lastName}

Email: ${req.body.email}
Phone: ${req.body.phone}

Subject: ${req.body.subject}
Message: ${req.body.message}

Kind regards,
Jezz Lucena`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json(true);
    console.log(`Email sent successfully from ${req.body.email}.`);
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).json(false);
  }
}

export default {
  sendEmail
}
