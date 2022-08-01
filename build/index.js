const express = require('express')
const games = require('./routes/games')
const handlebars = require('express-handlebars')

const app = express()
const PORT = 4040

// hbs
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  defaultlayout: 'main.hbs',
  // eslint-disable-next-line n/no-path-concat
  layoutsDir: './views/hbs/layouts',
  // eslint-disable-next-line n/no-path-concat
  partialsDir: __dirname + '/views/hbs/partials'
}))
app.set('view engine', 'hbs')
app.set('views', './views/hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api/games', games)
app.listen(PORT, () => {
  console.log(`Server runnig at port ${PORT}`)
})
