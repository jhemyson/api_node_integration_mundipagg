"use strict"
const User = require("../schemas/user.schema")

class UserController {
  async create(req, res) {
    try {
      const user = await User.create(req.body)

      return res.json(user)
    }
    catch (error) {
      return res.status(400).json({
        message: "Não foi possível criar um novo usuário",
        ...error,
      })
    }
  }
}

module.exports = new UserController()
