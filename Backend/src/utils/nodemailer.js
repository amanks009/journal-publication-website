import nodemailer from  'nodemailer';
import dotenv from "dotenv";
dotenv.config(); 

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // replace with your SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS
  }
  });

  const sendEmail = async (to,htmlData,subData) => {
    try {
      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: process.env.SMTP_MAIL,
        to:to,
        replyTo: process.env.SMTP_MAIL,
        subject: subData,
        html:htmlData
      });
  
      console.log('Email sent: %s', info.messageId);
      return info.messageId;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  export {sendEmail}
  