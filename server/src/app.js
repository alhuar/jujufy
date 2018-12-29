require('dotenv').config()
const fastify = require('fastify')({ logger: 'info' })
const mongoose = require('mongoose')

fastify.register(require('./routes/status'))
fastify.register(require('./routes/users'))

mongoose.connect('mongodb://localhost:27017/jujufy', err => {
  if (err) {
    console.log('Error connecting to mongodb', err.message)
    throw err
  }
  fastify.listen(process.env.BACKEND_SERVER_PORT, (err, address) => {
    console.log('ADRESSS', address)
    if (err) {
      fastify.log.error(err)
      throw err
    }
    fastify.log.info(`server listening on ${address}`)
  })
})
