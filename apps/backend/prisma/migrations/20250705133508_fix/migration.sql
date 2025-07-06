/*
  Warnings:

  - You are about to drop the column `productId` on the `ImageMetadata` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ImageMetadata_productId_key";

-- AlterTable
ALTER TABLE "ImageMetadata" DROP COLUMN "productId";
