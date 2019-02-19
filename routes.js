const express = require('express')

const Router = express.Router()
const controller = require('./controllers/mainController')

Router.get('/', controller.getIndex)
Router.get('/team-roster', controller.getTeamRoster)

module.exports = Router