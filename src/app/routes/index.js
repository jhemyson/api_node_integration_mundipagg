const route = require("express").Router()

route.get("/", (req, res) => {
  res.send("Hello Api")
})

route.use('/users', require("./user.router"))

module.exports = route
