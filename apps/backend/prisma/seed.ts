// prisma/seed.ts

import { chaoticProducts } from '../src/constants/chaoticProducts'; // adjust path as needed
import { prisma } from '../src/lib/prisma';

async function main() {
  const createProductPromises = chaoticProducts.map((product) =>
    prisma.product.create({
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
    })
  );
  await Promise.all(createProductPromises);

  console.info('🌪️ Chaotic products seeded.');
}

main()
  .catch((e) => {
    throw new Error(`${e instanceof Error ? e.message : JSON.stringify(e)}`);
  })
  .finally(() => prisma.$disconnect());
