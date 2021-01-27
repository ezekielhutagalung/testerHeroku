const router = require('express').Router()
const CastController= require('../controllers/CastController')

router.get('/casts', CastController.ShowData)

router.get('/casts/add', CastController.ShowFormAdd)

router.post('/casts/add', CastController.AddCast)

router.get('/casts/:id/edit', CastController.ShowFormEdit)

router.post('/casts/:id/edit', CastController.EditCast)

router.get('/casts/:id/delete', CastController.DeleteCast)

router.get('/casts/:id/seemovies', CastController.SeeMovies)






module.exports = router