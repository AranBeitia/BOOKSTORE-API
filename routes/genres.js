const express = require('express')
const router = express.Router()
const GenreController = require('../controllers/GenreController')

router.post('/', GenreController.insert)
router.get('/', GenreController.getAll)
// router.delete('/:id', GenreController.delete)
// router.put('/:id', GenreController.update)

module.exports = router
