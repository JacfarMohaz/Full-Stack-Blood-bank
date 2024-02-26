const mongoose = require("mongoose")

const donorsModel = mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    bloodType:{
        type: String,
        required: true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("Donors", donorsModel)