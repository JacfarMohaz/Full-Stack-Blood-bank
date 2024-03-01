const sendEmailModel = require("../Model/SendsEmailsModel")

// read  total donors data
const TotalEmails = async (req, res) => {
    try {
        const getTotalEmails = await sendEmailModel.find().countDocuments()
        if (getTotalEmails) {
            res.send({getTotalEmails})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = TotalEmails