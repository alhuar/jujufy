const User = require('../models/User')
const { isEmpty } = require('lodash')
module.exports = {
  getAll (req, res) {
    return User.find({}).then(users => {
      if (isEmpty(users)) return res.status(404).send({ message: 'No Users In Database' })
      return res.status(200).send({ data: users })
    })
  }
}
