"use strict"
const Category = require("../schemas/category.schema")

class CategoryController {
  /**
   * Cria uma nova categoria
   */
  async store(req, res) {
    try {
      const category = await Category.create(req.body)

      return res.json(category)
    }
    catch (error) {
      return res.status(400).json({
        message: "Não foi possível criar uma nova categoria",
        ...error,
      })
    }
  }

  /**
   * Busca de categorias
   */
  async show(req, res) {
    try {
      const category = await Category.find()

      return res.json(category)
    }
    catch (error) {
      return res.status(400).json({
        message: "Não foi possível buscar as categorias",
        ...error,
      })
    }
  }

  /**
   * Busca uma categoria pelo seu id
   */
  async showById(req, res) {
    try {
      const category = await Category.findById(req.params.id)

      return res.json(category)
    }
    catch (error) {
      return res.status(400).json({
        message: "Não foi possível buscar a categoria",
        ...error,
      })
    }
  }

  /**
   * Altera uma categoria
   */
  async update(req, res) {
    try {
      const category = await Category.findByIdAndUpdate(req.params.id, req.body)

      return res.json(category)
    }
    catch (error) {
      return res.status(400).json({
        message: "Não foi possível alterar a categoria",
        ...error,
      })
    }
  }

  /**
   * Deleta uma categoria
   */
  async delete(req, res) {
    try {
      await Category.findByIdAndDelete(req.params.id)

      return res.json({
        message: "Intem deletado com sucesso"
      })
    }
    catch (error) {
      return res.status(400).json({
        message: "Não foi possível deletar a categoria",
        ...error,
      })
    }
  }


}

module.exports = new CategoryController()
