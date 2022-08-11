const cart = [
]

// LEER CARRITO
const readCart = () => {
  return cart
}

// LEER CARRITO POR ID
const readCartById = (id) => {
  const cartEspecific = cart.find(c => c.id === id)
  if (cartEspecific) {
    return cartEspecific
  }
  throw new Error('Incorrect or missing id')
}

// CREAR NUEVO CARRITO
const createCart = () => {
  let newId = 1
  const date = new Date().toLocaleString()
  cart.length
    ? newId = Math.max(...cart.map(c => c.id)) + 1
    : newId = 1
  const newCart = {
    id: newId,
    timestampt: date,
    games: []
  }
  cart.push(newCart)
  return newId
}

// BORRAR CARRITO
const deleteCart = (id) => {
  const cartEspecific = cart.indexOf(readCartById(id))
  cart.splice(cartEspecific, 1)
}

// LEER JUEGOS DE CARRITO
const readCartGames = (id) => {
  console.log(cart)
  const cartEspecific = readCartById(id)
  return cartEspecific.games
}

// LEER JUEGO DE CARRITO
const readGameById = (id, products) => {
  const gameEspecific = products.find(g => g.id === id)
  if (gameEspecific) {
    return gameEspecific
  }
  throw new Error('Incorrect or missing id')
}

// AGREGAR JUEGO A CARRITO
const createCartGame = (id, gameData) => {
  const cartEspecific = cart.indexOf(readCartById(id))
  const date = new Date().toLocaleString()
  const newGame = {
    ...gameData,
    timestamp: date
  }
  cart[cartEspecific].games.push(newGame)
  return cart[cartEspecific]
}

// ELIMINAR JUEGO DE CARRITO
const deleteCartGame = (idCart, idGame) => {
  const cartEspecific = readCartById(idCart)
  const gameEspecific = readGameById(idGame, cartEspecific.games)
  const indexCart = cart.indexOf(cartEspecific)
  const gameIndex = cartEspecific.games.indexOf(gameEspecific)
  cart[indexCart].games.splice(gameIndex, 1)
}

module.exports = {
  readCart,
  createCart,
  deleteCart,
  readCartGames,
  createCartGame,
  deleteCartGame
}
