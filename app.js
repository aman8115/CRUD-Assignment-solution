const express = require('express')

const app = express()
const cors = require('cors')
const dbconnect = require('.//config/db.js')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
dbconnect()
const  route = require('./Routres/Router.js')
app.use('/',route)
// call database connection 
module.exports = app