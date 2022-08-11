const express = require('express')
const { createCart, deleteCart, readCartGames, createCartGame, deleteCartGame, readCart } = require('../services/cartServices')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(readCart())
})
router.post('/', (req, res) => {
  const id = createCart()
  res.send(`Carrito creado con id ${id}`)
})

router.delete('/:id', (req, res) => {
  const id = +req.params.id
  try {
    deleteCart(id)
    res.send(`Carrito con id ${id} ha sido eliminado`)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

router.get('/:id/products', (req, res) => {
  const id = +req.params.id
  try {
    const games = readCartGames(id)
    res.send(games)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

router.post('/:id/products', (req, res) => {
  const id = +req.params.id
  try {
    const newData = req.body
    try {
      const newCartGame = createCartGame(id, newData)
      res.send(newCartGame)
    } catch (e) {
      res.status(404).send(e.message)
    }
  } catch (e) {
    res.status(400).send(e.message)
  }
})

router.delete('/:id/products/:id_prod', (req, res) => {
  const idCart = +req.params.id
  const idGame = +req.params.id_prod
  try {
    deleteCartGame(idCart, idGame)
    res.send(`Juego con id ${idGame} ha sido eliminado del carrito con id ${idCart}`)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

module.exports = router
