const express = require('express')
const {protectRoute} = require("../auth/protect")
const {dashboardView} = require("../controllers/dashboardContoller")

const {
    registerView, 
    loginView,
    registerUser,
    loginUser,
} = require('../controllers/loginController')

const router = express.Router()

router.get('/register', registerView)
router.get('/login', loginView)
router.get("/dashboard", protectRoute, dashboardView)

router.post("/register", registerUser)
router.post("/login", loginUser)

module.exports = router;