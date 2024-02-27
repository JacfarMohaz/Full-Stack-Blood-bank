const express = require("express")
const donorController = require("../Controller/DonorsController")

const router = express.Router()

router.post("/register/donors", donorController.RegisterDonors)
router.get("/read/donors", donorController.ReadDonors)
router.delete("/delete/donors/:id", donorController.DeleteDonor)
router.get("/search/donors/:key", donorController.SearchDonor)
router.get("/aplas/donors", donorController.ReadAPlas)
router.get("/aminus/donors", donorController.ReadAMinus)
router.get("/bplas/donors", donorController.ReadBPlas)
router.get("/bminus/donors", donorController.ReadBMinus)
router.get("/abplas/donors", donorController.ReadABPlas)
router.get("/abminus/donors", donorController.ReadABMinus)
router.get("/oplas/donors", donorController.ReadOPlas)
router.get("/ominus/donors", donorController.ReadOMinus)

module.exports = router