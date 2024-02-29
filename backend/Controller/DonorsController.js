const donorsModel = require("../Model/DonorsModel")

// create Donors data
const RegisterDonors = async (req, res) => {
    try {
        const newDonor = donorsModel(req.body)
        const saveDonor = await newDonor.save()
        if (saveDonor) {
            res.send(saveDonor)
        }
    } catch (error) {
        console.log(error)
    }
}


// read donors data
const ReadDonors = async (req, res) => {
    try {
        const perPage = req.query.page || 0
        const numberOfDonors = 4
        const getDonors = await donorsModel.find().skip(numberOfDonors * perPage).limit(numberOfDonors)
        if (getDonors) {
            res.send(getDonors)
        }
    } catch (error) {
        console.log(error)
    }
}


// read  total donors data
const TotalDonors = async (req, res) => {
    try {
        const getTotalDonors = await donorsModel.find().countDocuments()
        if (getTotalDonors) {
            res.send({getTotalDonors})
        }
    } catch (error) {
        console.log(error)
    }
}

// read BloodType API's Start Here

// read only data bloodtype A+ 
const ReadAPlas = async (req, res) => {
    const getAPlas = await donorsModel.find({ bloodType: "A+" })
    if (getAPlas) {
        res.send(getAPlas)
    }
}

// read only data bloodtype A- 
const ReadAMinus = async (req, res) => {
    const getAPlas = await donorsModel.find({ bloodType: "A-" })
    if (getAPlas) {
        res.send(getAPlas)
    }
}


// read only data bloodtype B+ 
const ReadBPlas = async (req, res) => {
    const getAPlas = await donorsModel.find({ bloodType: "B+" })
    if (getAPlas) {
        res.send(getAPlas)
    }
}

// read only data bloodtype B-
const ReadBMinus = async (req, res) => {
    const getAPlas = await donorsModel.find({ bloodType: "B-" })
    if (getAPlas) {
        res.send(getAPlas)
    }
}

// read only data bloodtype AB+ 
const ReadABPlas = async (req, res) => {
    const getAPlas = await donorsModel.find({ bloodType: "AB+" })
    if (getAPlas) {
        res.send(getAPlas)
    }
}

// read only data bloodtype AB-
const ReadABMinus = async (req, res) => {
    const getAPlas = await donorsModel.find({ bloodType: "AB-" })
    if (getAPlas) {
        res.send(getAPlas)
    }
}

// read only data bloodtype O+ 
const ReadOPlas = async (req, res) => {
    const getAPlas = await donorsModel.find({ bloodType: "O+" })
    if (getAPlas) {
        res.send(getAPlas)
    }
}


// read only data bloodtype O- 
const ReadOMinus = async (req, res) => {
    const getAPlas = await donorsModel.find({ bloodType: "O-" })
    if (getAPlas) {
        res.send(getAPlas)
    }
}


// BloodType API's End Here

// delete Donors
const DeleteDonor = async (req, res) => {
    try {
        const RemoveDonor = await donorsModel.deleteOne({ _id: req.params.id })
        if (RemoveDonor) {
            res.send("Donor deleted")
        }
    } catch (error) {
        console.log(error)
    }
}


// filter/seach Donors
const SearchDonor = async (req, res) => {
    try {
        const filterDonor = await donorsModel.find({
            $or: [
                { fullName: { $regex: req.params.key } }
            ]
        })
        if (filterDonor) {
            res.send(filterDonor)
        }
    } catch (error) {
        console.log(error)
    }
}




module.exports = {
    RegisterDonors,
    ReadDonors,
    DeleteDonor,
    SearchDonor,
    ReadAPlas,
    ReadAMinus,
    ReadBPlas,
    ReadBMinus,
    ReadABPlas,
    ReadABMinus,
    ReadOPlas,
    ReadOMinus,
    TotalDonors
}