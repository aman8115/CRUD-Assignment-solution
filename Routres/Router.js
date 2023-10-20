const {registerUser,loginUser} = require('../controller/controller.js')
const express = require('express')
const router = express.Router()
router.post('/rgister',registerUser)
router.post('/login',loginUser)
module.exports = router