const homeScreenData = require('../Data/homescreenData.json');


const getHomeScreenData = async (req, res, next) => {

    try {
        const data = homeScreenData

        res.status(200).json(data)

    }
    catch (err) {
        res.status(400).send(err)
    }
}

module.exports = getHomeScreenData
