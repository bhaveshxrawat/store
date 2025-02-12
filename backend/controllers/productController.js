import { sql } from "../config/db.js"

export const getAllProducts = async (req, res) => {
  try {
    const products = await sql`
    SELECT * FROM products
    ORDER BY created_at DESC
    `
    res.status(200).json({ status: true, data: products })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
export const createProduct = async (req, res) => {
  const { name, price, image } = req.body
  if (!name || !price || !image) {
    return res.status(400).json({ status: false, message: "All fields are required" })
  }
  try {
    const createdProduct = await sql`
    INSERT INTO products (name, price, image)
    VALUES (${name},${price},${image})
    RETURNING *
    `
    res.status(201).json({ success: true, data: createdProduct[0] })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
export const getProduct = async (req, res) => {
  const { id } = req.params
  try {
    const product = await sql`
    SELECT * FROM products WHERE id=${id}
    `
    if (product.length === 0) {
      return res.status(404).json({ success: false, message: "No product found" })
    }
    res.status(200).json({ success: true, data: product[0] })
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" })
  }
}
export const updateProduct = async (req, res) => {
  const { id } = req.params
  const { name, price, image } = req.body
  try {
    const updatedProduct = await sql`
    UPDATE products
    SET name=${name}, price=${price}, image=${image}
    WHERE id=${id}
    RETURNING *
    `
    if (updateProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      })
    }
    res.status(200).json({ success: true, data: updatedProduct[0] })
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" })
  }
}
export const deleteProduct = async (req, res) => {
  const { id } = req.params
  try {
    const product = await sql`
    DELETE from products WHERE id=${id} RETURNING *
    `
    if (updateProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      })
    }
    res.status(200).json({ success: true, data: product[0] })
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" })
  }
}