const router = require('express').Router()
const ProdHouse = require('../router/ProdHouseRouter')
const MovRouter = require('../router/Movierouter')
const CastRouter = require('../router/CastRouter')
const home = require('../controllers/homeController')


router.get('/', home.home)

router.use('/',ProdHouse)

router.use('/',MovRouter)

router.use('/',CastRouter)


module.exports = router