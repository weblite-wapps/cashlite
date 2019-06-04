var bodyParser = require('body-parser')
var express = require('express')

var dbHelper = require('../database/helpers/functions')

var router = express.Router()
router.use(bodyParser.json())

// Users
router.get('/users/fetch', ({ query }, res) => dbHelper
  .fetchUsers(query['wisId'])
  .then(users => res.send(users))
  .catch(err => res.send(err)))

router.post('/users/add', ({ body }, res) => dbHelper
  .addUser(body['username'], body['wisId'])
  .then(() => res.status(200).end())
  .catch(err => res.status(200).end()))

router.get('/graph/fetch', ({ query }, res) => dbHelper
  .fetchGraph(query['wisId'])
  .then(graph => res.status(200).send(graph))
  .catch(err => res.status(500).send(err)))

router.get('/transaction/fetch', ({ query }, res) => dbHelper
  .fetchTransactions(query['wisId'])
  .then(transes => res.status(200).send(transes))
  .catch(err => res.status(500).send(err)))

router.post('/transaction/add', ({ body }, res) => dbHelper
  .addTransaction(body)
  .then(() => res.status(200).end())
  .catch(err => res.status(500).end()))


exports.router = router
