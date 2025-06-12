import { prisma } from "@/lib/prisma"
import { Request, Response } from "express";


export async function createProduct(req: Request, res: Response) {
  
}

export async function getProduct(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id }
    });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    const message   = error instanceof Error ? error.message : "Internal server error";
    res.status(500).json({ success: false, message });
  }
}
export async function getAllProducts(req: Request, res: Response) {
  const { load } = req.params
  const loadAmt = Number(load) || 1
  const take = loadAmt <= 1 ? 20 : 20 + (10 * (loadAmt - 1))
  try {
    const products = prisma.product.findMany({
      take
    })
    if (!products) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    const message   = error instanceof Error ? error.message : "Internal server error";
    res.status(500).json({ success: false, message });
  }
}

export async function updateProduct(req: Request, res: Response) {
  
}
export async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const product = await prisma.product.delete({
      where: { id }
    });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    const message   = error instanceof Error ? error.message : "Internal server error";
    res.status(500).json({ success: false, message });
  }
}

