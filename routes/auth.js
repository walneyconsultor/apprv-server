// EXPRESS
const express = require('express')

// ROUTES
const loginRouter = express.Router()
const registerRouter = express.Router()

// MODELS
const User = require('../models/User')

// DATABASE
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/RedeVerde')

// JWT
const jwt = require('json-web-token')
const { JWT_SECRET_CODE } = require('../config/jwtSecretCode')
const bcrypt = require('bcrypt')

// LOGIN ROUTE
loginRouter.post('/rvLogin', (req, res) => {

  if(req.body) {
    
    const { username, password } = req.body

    User.findOne({ username }, (err, user) => {
      if(err) return res.status(403).send({
        userFindError: 'Houve um erro ao procurar por seu usuário'
      })

      if(user) {
        if(bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign({ username: user.username, id: user.id }, JWT_SECRET_CODE)
          return res.json({ token })
        }
      }

      return res.json({
        userDoesntExist: 'Seu usuário não existe'
      })

    })
  } else {
    res.json({
      invalidCredentials: 'Não passe dados inválidos para a aplicação'
    })
  }
})

// REGISTER ROUTE
registerRouter.post('/rvRegister', (req, res) => {
})

module.exports = {
  login: loginRouter,
  register: registerRouter
}
