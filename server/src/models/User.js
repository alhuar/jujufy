const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String },
  spotifyId: { type: String }
})

module.exports = mongoose.model('User', UserSchema)
