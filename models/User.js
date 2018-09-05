const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const User = new Schema({

  id: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  cep: {
    type: String,
    required: true
  },

  tel: String,

  role: {
    type: String,
    required: true
  },

  rv: {
    type: Number,
    default: 0
  },

  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', User)
