const express = require("express")
const mongoose = require("mongoose")
const donorsRouter = require("./Router/DonorsRouter")
const cors = require("cors")


const app = express()

app.use(express.json())

app.use(cors())

// donors router
app.use(donorsRouter)


// connection database
mongoose.connect("mongodb://localhost:27017/BloodBank").then(() => {
    console.log("Database has ben connected")
}).catch((error) => console.log(error))


// start server
app.listen(7000, () => console.log("Server is running on port 7000"))