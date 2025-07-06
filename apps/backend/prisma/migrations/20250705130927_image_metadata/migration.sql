/*
  Warnings:

  - A unique constraint covering the columns `[fileUrl]` on the table `ImageMetadata` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ImageMetadata" DROP CONSTRAINT "ImageMetadata_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "imageId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ImageMetadata_fileUrl_key" ON "ImageMetadata"("fileUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Product_imageId_key" ON "Product"("imageId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "ImageMetadata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
