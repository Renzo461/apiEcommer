const Plataform = {
  Steam: 'Steam',
  Epic: 'Epic',
  Blizard: 'Blizard'
}

const parseName = (data) => {
  if (isString(data)) {
    return data
  }
  throw new Error('Incorrect or missing name')
}
const parseDescription = (data) => {
  if (isString(data)) {
    return data
  }
  throw new Error('Incorrect or missing description')
}
const parseImage = (data) => {
  if (isString(data)) {
    return data
  }
  throw new Error('Incorrect or missing image')
}
const parsePlataform = (data) => {
  if (isPlataform(data)) {
    return data
  }
  throw new Error('Incorrect or missing plataform')
}
const parseStock = (data) => {
  if (isNumber(data) && data > 0) {
    return data
  }
  throw new Error('Incorrect or missing stock')
}
const parsePrice = (data) => {
  if (isNumber(data) && data > 0) {
    return data
  }
  throw new Error('Incorrect or missing price')
}
const parseState = (data = false) => {
  if (data === 'on') {
    data = true
  }
  if (isBoolean(data)) {
    return data
  }
  throw new Error('Incorrect or missing state')
}

const isString = (data) => {
  return typeof data === 'string'
}
const isPlataform = (data) => {
  return Object.values(Plataform).includes(data)
}
const isNumber = (data) => {
  return typeof data === 'number'
}
const isBoolean = (data) => {
  return typeof data === 'boolean'
}

const newGameEntry = (data) => {
  const newGame = {
    name: parseName(data.name),
    description: parseDescription(data.description),
    plataform: parsePlataform(data.plataform),
    image: parseImage(data.image),
    stock: parseStock(+data.stock),
    price: parsePrice(+data.price),
    state: parseState(data.state)
  }
  return newGame
}

module.exports = newGameEntry
