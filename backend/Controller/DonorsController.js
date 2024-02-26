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
        if(filterDonor){
            res.send(filterDonor)
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = { RegisterDonors, ReadDonors, DeleteDonor, SearchDonor }