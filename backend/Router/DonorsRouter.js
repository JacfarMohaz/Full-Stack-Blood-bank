const express = require("express")
const donorController = require("../Controller/DonorsController")

const router = express.Router()

router.post("/register/donors", donorController.RegisterDonors)
router.get("/read/donors", donorController.ReadDonors)
router.delete("/delete/donors/:id", donorController.DeleteDonor)
router.get("/search/donors/:key", donorController.SearchDonor)

module.exports = router