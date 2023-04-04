const homeScreenData = require('../Data/homescreenData.json');
const premiumscreenData = require('../Data/premiumscreenData.json')

const getHomeScreenData = async (req, res, next) => {

    try {
        const data = homeScreenData
        console.log('homeScreenData called')
        res.status(200).json(data)

    }
    catch (err) {
        res.status(400).send(err)
    }
}
const getPremiumScreenData = async (req, res, next) => {

    try {
        const data = premiumscreenData
        console.log('premiumscreenData called')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(err)
    }
}



module.exports = {
    getHomeScreenData,
    getPremiumScreenData
}
