const express = require("express");
const { getHomeScreenData, getPremiumScreenData } = require('../controllers/controllers');
const router = new express.Router();

router.get('/homescreenData', getHomeScreenData);
router.get('/premiumscreenData', getPremiumScreenData);
                                         
module.exports = router;