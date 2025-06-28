// prisma/seed.ts
import { prisma } from "../src/lib/prisma.ts";
import { chaoticProducts } from "../src/constants/chaoticProducts.ts"; // adjust path as needed

async function main() {
  for (const product of chaoticProducts) {
    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        imageMetadata: {
          create: {
            fileId: crypto.randomUUID(),
            fileUrl: `https://picsum.photos/seed/${encodeURIComponent(
              product.name
            )}/300/150`,
          },
        },
      },
    });
  }

  console.log("🌪️ Chaotic products seeded.");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(() => prisma.$disconnect());
