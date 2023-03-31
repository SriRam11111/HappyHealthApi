const express = require("express")
const homescreenData = require('../controllers/controllers') 
const router = new express.Router()

router.get('/homescreenData',homescreenData)


module.exports = router