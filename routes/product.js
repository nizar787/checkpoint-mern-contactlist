// import express
const express = require('express')

// initialisation
const productRouter = express.Router()

productRouter.post('/add', async (req, res) => {
  try {
    
    res.send({  msg: 'barcha products' })
  } catch (error) {
    console.log(error)
    res.send({ msg: '7el 3younek' })
  }
})

module.exports = productRouter
