const express = require('express')
const { readGames, readGameById, updateGame, createGame, deleteGame } = require('../services/gamesServices')
const newGameEntry = require('../utils')
const router = express.Router()
// readGames
router.get('/', (req, res) => {
  const games = readGames()
  res.send(games)
  // res.render('game', { juego: games })
})

// readGameById
router.get('/:id', (req, res) => {
  const id = +req.params.id
  try {
    const game = readGameById(id)
    res.send(game)
    // res.render('game', { juego: [game] })
  } catch (e) {
    res.status(404).render('error', { message: e.message })
  }
})

// createGame
router.post('/', (req, res) => {
  try {
    const data = newGameEntry(req.body)
    const newGame = createGame(data)
    res.send(newGame)
    // res.redirect('/index.html')
  } catch (e) {
    res.status(404).send({ message: e.message })
    // res.status(404).render('error', { message: e.message })
  }
})

// updateGame
router.put('/:id', (req, res) => {
  const id = +req.params.id
  try {
    const newData = newGameEntry(req.body)
    try {
      const updatedGame = updateGame(id, newData)
      res.send(updatedGame)
    } catch (e) {
      res.status(404).send(e.message)
    }
  } catch (e) {
    res.status(400).send(e.message)
  }
})

// deleteGame
router.delete('/:id', (req, res) => {
  const id = +req.params.id
  try {
    deleteGame(id)
    res.send({ statusDelete: 'ok' })
  } catch (e) {
    res.status(404).send(e.message)
  }
})

module.exports = router
