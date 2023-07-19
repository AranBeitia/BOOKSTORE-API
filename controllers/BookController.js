const { Book, Genre, GenreBook } = require('../models/index')

const BookController = {
	insert(req, res) {
		Book.create(req.body)
			.then((book) => {
				book.addGenre(req.body.GenreId)
				res.send(book)
			})
			.catch((err) => console.error(err))
	},
	async getAll(req, res) {
		try {
			const books = await Book.findAll({
				include: [
					{ model: Genre, attributes: ['name'], through: { attributes: [] } },
				],
			})
			res.send(books)
		} catch (error) {
			console.error(error)
		}
	},
	async getById(req, res) {
		try {
			const book = await Book.findByPk(req.params.id, {
				include: [
					{ model: Genre, attributes: ['id'], through: { attributes: [] } },
				],
			})
			res.send(book)
		} catch (error) {
			console.error(error)
		}
	},
	async delete(req, res) {
		try {
			await Book.destroy({
				where: {
					id: req.params.id,
				},
			})
			await GenreBook.destroy({
				where: {
					BookId: req.params.id,
				},
			})
			res.send({ message: 'The book has been removed', id: req.params.id })
		} catch (error) {
			console.log(error)
		}
	},
	async update(req, res) {
		try {
			await Book.update(req.body, {
				where: {
					id: req.params.id,
				},
			})
			const book = await Book.findByPk(req.params.id)
			book.setGenres(req.body.GenreId)
			res.send(book)
		} catch (error) {
			console.error(error)
			res
				.status(500)
				.send({ message: 'no ha sido posible actualizado el libro' })
		}
	},
}

module.exports = BookController
