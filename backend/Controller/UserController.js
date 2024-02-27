const userModel = require("../Model/UserModel")

// register user
const RegisterUser = async (req, res) => {
    try {
        // create new User
        const newUser = userModel(req.body)
        const saveUser = await newUser.save()
        if (saveUser) {
            res.send(saveUser)
        }
    } catch (error) {
        console.log(error)
    }
}



// function login
const loginUser = async (req, res) => {
    try {
        if (req.body.email && req.body.password) {
            const userLogin = await userModel.findOne(req.body)
            if (userLogin) {
                res.send(userLogin)
            } else {
                res.send({
                    error: "emial not found"
                })
            }
        }
        else {
            res.send({
                error: "emial and password is required"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

// read all users
const ReadUsers = async (req, res) => {
    try {
        const getUsers = await userModel.find().select("-password")
        if(getUsers){
            res.send(getUsers)
        }
    } catch (error) {
        console.log(error)
    }
}

// search user
const SearchUser = async (req, res) => {
    try {
        const filterUser = await userModel.find({
            $or: [
                { userName: { $regex: req.params.key } }
            ]
        }).select("-password")
        if(filterUser){
            res.send(filterUser)
        }
    } catch (error) {
        console.log(error)
    }
}

// delete user
const DeleteUser = async (req, res) => {
    try {
        const RemoveUser = await userModel.deleteOne({ _id: req.params.id })
        if (RemoveUser) {
            res.send("User deleted")
        }
    } catch (error) {
        console.log(error)
    }
}

// read single user
const ReadSingleUser = async (req, res) => {
    try {
        const getSingleUser = await userModel.find({_id: req.params.id})
        if(getSingleUser){
            res.send(getSingleUser)
        }
    } catch (error) {
        console.log(error)
    }
}

// user update user
const UpdateUser = async (req, res) => {
    try {
        const putUser = await userModel.updateOne(
            {_id: req.params.id},
            {$set: req.body}
        )
        if(putUser){
            res.send(putUser)
        }
    } catch (error) {
        console.log(error)
    }
}

// read only users approved is false
const ReadIsApproved = async (req, res) => {
    const getIsApproved = await userModel.find({isApproved: "false"})
    if(getIsApproved){
        res.send(getIsApproved)
    }
}


// user update only isApproved
const UpdateUserApproved = async (req, res) => {
    try {
        const putUserApproved = await userModel.updateOne(
            {_id: req.params.id},
            {$set: {isApproved: "true"}}
        )
        if(putUserApproved){
            res.send(putUserApproved)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {RegisterUser, loginUser, ReadUsers, SearchUser, DeleteUser, ReadSingleUser, UpdateUser, ReadIsApproved, UpdateUserApproved}