const { Router } = require("express")
const { 
    createUser,
    getUser,
    updateUser,
    deleteUser } = require("../controllers/users.controller")
const router = Router()

router.post("/", createUser)     // C create         
router.get("/", getUser)           // R read
router.put("/:userId")    // U update
router.delete("/:userId") // D delete

module.exports = router