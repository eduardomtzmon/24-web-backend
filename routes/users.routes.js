const { Router } = require("express")
const { 
    createUser,
    getUser,
    updateUser,
    deleteUser } = require("../controllers/users.controller")
// const {validatePost} = require('../middlewares/validatorSimple')
const {celebrateValidator} = require('../middlewares/celebrateValidator')
// const {Schema} = require("../validators/userValidator")
const router = Router()

// router.post("/", validatePost(Schema), createUser)     // C create         
router.post("/", celebrateValidator, createUser)     // C create         
router.get("/", getUser)           // R read
router.put("/:userId", updateUser)    // U update
router.delete("/:userId", deleteUser) // D delete


module.exports = router