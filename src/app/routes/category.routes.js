const route = require("express").Router()

const CategoryController = require("../controllers/category.controller")

route.get("", CategoryController.show)
route.get("/:id", CategoryController.showById)
route.post("", CategoryController.store)
route.put("/:id", CategoryController.update)
route.delete("/:id", CategoryController.delete)

module.exports = route
