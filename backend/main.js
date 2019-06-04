// modules
const express = require('express')
const cors = require('cors')
// files
const dbHandler = require('./database/dbHandler')
const { router } = require('./routing/routes')


const app = express()
app.use(cors({ origin: '*' }))
app.use('/', router)
dbHandler.connect2db('splitlite')


app.listen(4150, () => console.log('Server Running!'))
