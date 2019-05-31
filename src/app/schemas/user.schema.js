const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: String,
    enum: ["admin", "student"],
    default: "student",
    required: true
  }
}, {
  timestamp: true
})

module.exports = mongoose.model('User', UserSchema)
