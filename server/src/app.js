const fastify = require('fastify')({logger: true})
require('dotenv').config()
fastify.register(require('./routes/status'))

fastify.listen(process.env.BACKEND_SERVER_PORT, (err, address) => {
  console.log('ADRESSS', address)
  if (err) {
    fastify.log.error(err)
    throw err
  }
  fastify.log.info(`server listening on ${address}`)
})