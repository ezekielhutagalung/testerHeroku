const router = require('express').Router()
const MovieController = require('../controllers/movieController')


router.get('/movies', MovieController.showData)

router.get('/movies/add', MovieController.showFormAdd)

router.post('/movies/add', MovieController.addMovie)

router.get('/movies/:id/edit', MovieController.showFormEdit)

router.post('/movies/:id/edit', MovieController.editMovie)

router.get('/movies/:id/delete', MovieController.deleteMovie)

router.get('/movies/:id/addcast', MovieController.showFormAddCast)

router.post('/movies/:id/addcast', MovieController.AddCast)







module.exports = router