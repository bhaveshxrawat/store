/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageUrl",
ADD COLUMN     "likedBy" TEXT[];

-- CreateTable
CREATE TABLE "ImageMetadata" (
    "id" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImageMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImageMetadata_fileId_key" ON "ImageMetadata"("fileId");

-- CreateIndex
CREATE UNIQUE INDEX "ImageMetadata_productId_key" ON "ImageMetadata"("productId");

-- AddForeignKey
ALTER TABLE "ImageMetadata" ADD CONSTRAINT "ImageMetadata_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
