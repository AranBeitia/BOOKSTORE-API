const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController')

router.post('/', BookController.insert)
router.get('/', BookController.getAll)
router.delete('/:id', BookController.delete)
router.put('/:id', BookController.update)
router.get('/:id', BookController.getById)

module.exports = router
