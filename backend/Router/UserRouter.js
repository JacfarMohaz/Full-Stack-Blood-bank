const express = require("express")
const userController = require("../Controller/UserController")

const router = express.Router()

router.post("/register/user", userController.RegisterUser)
router.post("/login/user", userController.loginUser)
router.get("/read/users", userController.ReadUsers)
router.get("/search/users/:key", userController.SearchUser)
router.delete("/delete/users/:id", userController.DeleteUser)
router.get("/readsingle/users/:id", userController.ReadSingleUser)
router.put("/update/users/:id", userController.UpdateUser)
router.get("/approved/users", userController.ReadIsApproved)
router.put("/updateapproved/users/:id", userController.UpdateUserApproved)

module.exports = router

