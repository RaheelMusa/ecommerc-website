const nodemailer = require('nodemailer')


let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    

    auth:{
        user: process.env.EMAIL_HOST,
        pass: process.env.PASS_HOST
    }
})
module.exports = { transporter }