const nodemailer = require("nodemailer");
export default async function SendMail(from,to,subject,text,html){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_HOST_USER,
          pass: process.env.EMAIL_HOST_PASSWORD,
        },
    });    
    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text,
        html:html
    };
    const info = await transporter.sendMail(mailOptions)
    return info
}