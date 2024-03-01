const express = require("express")
const sendEmailAPlas = require("../Middleware/SendEmailAPlas")
const sendEmailAMinus = require("../Middleware/SendEmailAMinus")
const sendEmailABPlas = require("../Middleware/SendEmailABPlas")
const sendEmailABMinus = require("../Middleware/SendEmailABMinus")
const sendEmailBPlas = require("../Middleware/SendEmailBPlas")
const sendEmailBMinus = require("../Middleware/SendEmailBMinus")
const sendEmailOPlas = require("../Middleware/SendEmailOPlas")
const sendEmailOMinus = require("../Middleware/SendEmailOMinus")
const sendEmailController = require("../Controller/SendEmailController")


const router = express.Router()

router.post("/aplas/emails", sendEmailAPlas)
router.post("/aminus/emails", sendEmailAMinus)
router.post("/bplas/emails", sendEmailBPlas)
router.post("/bminus/emails", sendEmailBMinus)
router.post("/abplas/emails", sendEmailABPlas)
router.post("/abminus/emails", sendEmailABMinus)
router.post("/oplas/emails", sendEmailOPlas)
router.post("/ominus/emails", sendEmailOMinus)
router.get("/total/emails",sendEmailController)


module.exports = router