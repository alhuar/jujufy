const fastify = require('fastify')
const User = require('../models/User')
module.exports = function (fastify, opts, next) {
  fastify.post('/auth', (req, rep) => {
    return rep.status(200) // .send({status: 'Working'})
  })
  next()
}
