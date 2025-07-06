/*
  Warnings:

  - You are about to drop the `ImageMetadata` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ImageMetadata" DROP CONSTRAINT "ImageMetadata_productId_fkey";

-- DropTable
DROP TABLE "ImageMetadata";

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "likedBy" TEXT[],
    "imageMetadataId" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image_metadata" (
    "id" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "image_metadata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_imageMetadataId_key" ON "product"("imageMetadataId");

-- CreateIndex
CREATE UNIQUE INDEX "image_metadata_fileId_fileUrl_key" ON "image_metadata"("fileId", "fileUrl");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_imageMetadataId_fkey" FOREIGN KEY ("imageMetadataId") REFERENCES "image_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;
