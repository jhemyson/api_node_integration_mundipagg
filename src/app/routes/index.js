const route = require("express").Router()

route.get("/", (req, res) => {
  res.send("Hello Api")
})

route.use('/users', require("./user.routes"))
route.use('/categories', require("./category.routes"))

module.exports = route
