const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["user", "admin"], 
        default: "user"
    },
    isApproved:{
        type: Boolean,
        default: false
    }
},
{timestamps: true}
)

module.exports = mongoose.model("users", userSchema)