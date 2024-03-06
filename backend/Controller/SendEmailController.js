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

const LatestFiveMessages = async (req, res) => {
    try {
        const ReadMessages = await sendEmailModel.find().sort({ createdAt: -1 }).limit(5)
        if(ReadMessages){
            res.send(ReadMessages)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {TotalEmails, LatestFiveMessages}