const fastify = require('fastify')

module.exports = function (fastify, opts, next) {
  fastify.get('/status', (req, rep) => {
    return rep.status(200).send({status: 'Working'})
  })
  next()
}