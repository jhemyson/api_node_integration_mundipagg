const route = require("express").Router()

const ProductController = require("../controllers/products.controoler")

route.get("", ProductController.show)
route.get("/:id", ProductController.showById)
route.post("", ProductController.store)
route.put("/:id", ProductController.update)
route.delete("/:id", ProductController.delete)

module.exports = route
