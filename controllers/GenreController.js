const { Genre } = require('../models/index')

const GenreController = {
	insert(req, res) {
		Genre.create(req.body)
			.then((genre) => {
				res.send(genre)
			})
			.catch((err) => console.error(err))
	},
	async getAll(req, res) {
		try {
			const genres = await Genre.findAll()
			res.send(genres)
		} catch (error) {
			console.error(error)
		}
	},
	// async delete(req, res) {
	// 	try {
	// 		await Book.destroy({
	// 			where: {
	// 				id: req.params.id,
	// 			},
	// 		})
	// 		await GenreBook.destroy({
	// 			where: {
	// 				BookId: req.params.id,
	// 			},
	// 		})
	// 		res.send({ message: 'The book has been removed' })
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// },
	// async update(req, res) {
	// 	try {
	// 		await Book.update(req.body, {
	// 			where: {
	// 				id: req.params.id,
	// 			},
	// 		})
	// 		const book = await Book.findByPk(req.params.id)
	// 		book.setGenres(req.body.GenreId)
	// 		res.send('Libro actualizado con éxito')
	// 	} catch (error) {
	// 		console.error(error)
	// 		res
	// 			.status(500)
	// 			.send({ message: 'no ha sido posible actualizado el libro' })
	// 	}
	// },
}

module.exports = GenreController
