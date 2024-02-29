const nodemailer = require("nodemailer")
const donorsController = require("../Controller/DonorsController")

// Configure Nodemailer transporter
const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "jacfarmahamed77@gmail.com",
        pass: "uczdltneeslhvjqa"
    }
})

// Function to send email to a single recipient
const SendEmails = async (req, res) => {
    const info = await transport.sendMail({
        from: "jacfarmahamed77@gmail.com",
        to: req.body.email,
        subject: "Email from Node class",
        text: "Email ka maheshay Jacfar"

    })
    console.log("Email ka waala diray ", info.messageId)
    if (info) {
        res.send("Email has sent successfully")
    }
}

module.exports = SendEmails