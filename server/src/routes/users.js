const fastify = require('fastify')
const usersController = require('../controllers/users_controller')

module.exports = function (fastify, opts, next) {
  fastify.get('/users', usersController.getAll)
  next()
}
