const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

const Auth = require('./routes/auth')

app.get('/', (req, res) => res.json({
  StatusDoServidor: 'OK'
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', Auth.login)
// app.use('/api', Auth.register)

app.listen(port, console.info(`🌎 => Servidor rodando na porta ${port}`))
