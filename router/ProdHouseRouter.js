const router = require('express').Router()
const ProdHouseController = require('../controllers/productionhouseController')


router.get('/productionhouses', ProdHouseController.showProductionHouse)






module.exports = router