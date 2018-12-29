const fastify = require('fastify')({logger: true})
const httpStatus = require('http-status')


fastify.register(require('./routes/status'))

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})