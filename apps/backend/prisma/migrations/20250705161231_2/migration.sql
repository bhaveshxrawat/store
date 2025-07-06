/*
  Warnings:

  - You are about to drop the column `imageId` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId]` on the table `ImageMetadata` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `ImageMetadata` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_imageId_fkey";

-- DropIndex
DROP INDEX "Product_imageId_key";

-- AlterTable
ALTER TABLE "ImageMetadata" ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageId";

-- CreateIndex
CREATE UNIQUE INDEX "ImageMetadata_productId_key" ON "ImageMetadata"("productId");

-- AddForeignKey
ALTER TABLE "ImageMetadata" ADD CONSTRAINT "ImageMetadata_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
