const express = require("express")
const sendEmailController = require("../Middleware/SendEmails")


const router = express.Router()

router.post("/send/email", sendEmailController)


module.exports = router