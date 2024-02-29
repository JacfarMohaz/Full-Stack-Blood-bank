const mongoose = require("mongoose")

const sendEmailsSchema = mongoose.Schema({
    toEmail:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("sendEmails", sendEmailsSchema)