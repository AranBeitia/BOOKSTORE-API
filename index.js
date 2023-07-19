const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.use('/books', require('./routes/books'))
app.use('/genres', require('./routes/genres'))

app.listen(PORT, () => console.log('servidor levantado en el puerto ' + PORT))
