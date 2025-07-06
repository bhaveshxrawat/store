import { ProductWithRelationsSchema } from "@shared/schemas/product";
import type { Request, Response } from "express";
import { prisma } from "@/lib/prisma";

// Create a new product
export async function createProduct(req: Request, res: Response) {
  const { name, price, description, imageUrl } = req.body;

  if (!name || typeof price !== "number" || !imageUrl) {
    return res.status(400).json({
      success: false,
      message: "Missing or invalid 'name', 'price', or 'imageUrl'",
    });
  }

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        imageMetadata: {
          create: {
            fileId: crypto.randomUUID(),
            fileUrl: "",
          },
        },
      },
    });
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    res.status(500).json({ success: false, message });
  }
}

// Get a product by ID
export async function getProduct(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    res.status(500).json({ success: false, message });
  }
}

// Get all products (with optional load parameter)
export async function getAllProducts(_: unknown, res: Response) {
  try {
    const products = await prisma.product.findMany({
      include: {
        imageMetadata: true,
      },
    });
    const count = await prisma.product.count();
    const validatedProducts = products.map((product) =>
      ProductWithRelationsSchema.parse(product)
    );
    res.status(200).json({ success: true, data: validatedProducts, count });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    res.status(500).json({ success: false, message });
  }
}

// Update a product by ID
// export async function updateProduct(req: Request, res: Response) {
//   const { id } = req.params;
//   const { name, price, imageUrl } = req.body;

//   try {
//     const existingProduct = await prisma.product.findUnique({ where: { id } });

//     if (!existingProduct) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Product not found" });
//     }

//     const updatedProduct = await prisma.product.update({
//       where: { id },
//       data: {
//         name: name ?? existingProduct.name,
//         price: typeof price === "number" ? price : existingProduct.price,
//         imageUrl: imageUrl ?? existingProduct.imageUrl,
//       },
//     });

//     res.status(200).json({ success: true, data: updatedProduct });
//   } catch (error) {
//     const message =
//       error instanceof Error ? error.message : "Internal server error";
//     res.status(500).json({ success: false, message });
//   }
// }

// Delete a product by ID
export async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedProduct = await prisma.product.delete({
      where: { id },
    });
    res.status(200).json({ success: true, data: deletedProduct });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Record to delete does not exist")
    ) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const message =
      error instanceof Error ? error.message : "Internal server error";
    res.status(500).json({ success: false, message });
  }
}
