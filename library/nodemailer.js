const nodemailer = require("nodemailer");
const { passEmailApp, myEmail } = require("./settings");

async function sendEmail(dataEmail, req, res, path1, path2) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: "noreplyapidz@gmail.com",
        pass: "dyyx jxcm upci rlkm"
        }
    });
    transporter.sendMail(dataEmail, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            req.flash('success_msg', `Success Send Email to : ${dataEmail.to}, Check Your Mail Box/Spam Box`);
        }
    })
}

module.exports = { sendEmail }
