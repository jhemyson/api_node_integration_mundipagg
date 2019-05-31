"use strict"
const Product = require("../schemas/product.schema")

class ProductController {
  /**
   * Cria uma nova produto
   */
  async store(req, res) {
    try {
      const product = await Product.create(req.body)

      return res.json(product)
    }
    catch (error) {
      return res.status(400).json({
        message: "Não foi possível criar um novo produto",
        ...error,
      })
    }
  }

  /**
   * Busca de produtos
   */
  async show(req, res) {
    try {
      const product = await Product.find()

      return res.json(product)
    }
    catch (error) {
      return res.status(400).json({
        message: "Não foi possível buscar os produtos",
        ...error,
      })
    }
  }

  /**
   * Busca um produto pelo seu id
   */
  async showById(req, res) {
    try {
      const product = await Product.findById(req.params.id)

      return res.json(product)
    }
    catch (error) {
      return res.status(400).json({
        message: "Não foi possível buscar o produto",
        ...error,
      })
    }
  }

  /**
   * Altera um produto
   */
  async update(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body)

      return res.json(product)
    }
    catch (error) {
      return res.status(400).json({
        message: "Não foi possível alterar o produto",
        ...error,
      })
    }
  }

  /**
   * Deleta um produto
   */
  async delete(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id)

      return res.json({
        message: "Produto deletado com sucesso"
      })
    }
    catch (error) {
      return res.status(400).json({
        message: "Não foi possível deletar o produto",
        ...error,
      })
    }
  }


}

module.exports = new ProductController()
