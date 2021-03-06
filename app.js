'use strict'
const express = require('express')
const debug = require('debug')('app')
const bodyParser = require('body-parser')

const api = require('./routes/api')

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

// 静态文件
app.use(bodyParser.json())
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.render('layout')
})

app.use('/api', api)

const server = app.listen(3000)