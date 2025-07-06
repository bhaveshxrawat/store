import { z } from 'zod';
import type { Prisma } from '../../../../../apps/backend/src/generated/prisma';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  'ReadUncommitted',
  'ReadCommitted',
  'RepeatableRead',
  'Serializable',
]);

export const ProductScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'price',
  'createdAt',
  'updatedAt',
  'likedBy',
  'imageMetadataId',
]);

export const ImageMetadataScalarFieldEnumSchema = z.enum([
  'id',
  'fileId',
  'fileUrl',
  'createdAt',
  'updatedAt',
]);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const QueryModeSchema = z.enum(['default', 'insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  likedBy: z.string().array(),
  imageMetadataId: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;

// PRODUCT RELATION SCHEMA
//------------------------------------------------------

export type ProductRelations = {
  imageMetadata: ImageMetadataWithRelations;
};

export type ProductWithRelations = z.infer<typeof ProductSchema> &
  ProductRelations;

// @ts-expect-error
export const ProductWithRelationsSchema: z.ZodType<ProductWithRelations> =
  ProductSchema.merge(
    z.object({
      imageMetadata: z.lazy(() => ImageMetadataWithRelationsSchema),
    })
  );

/////////////////////////////////////////
// IMAGE METADATA SCHEMA
/////////////////////////////////////////

export const ImageMetadataSchema = z.object({
  id: z.string().cuid(),
  fileId: z.string(),
  fileUrl: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type ImageMetadata = z.infer<typeof ImageMetadataSchema>;

// IMAGE METADATA RELATION SCHEMA
//------------------------------------------------------

export type ImageMetadataRelations = {
  product?: ProductWithRelations | null;
};

export type ImageMetadataWithRelations = z.infer<typeof ImageMetadataSchema> &
  ImageMetadataRelations;

export const ImageMetadataWithRelationsSchema: z.ZodType<ImageMetadataWithRelations> =
  ImageMetadataSchema.merge(
    z.object({
      product: z
        .lazy(() => ProductWithRelationsSchema)
        .nullable()
        .optional(),
    })
  );
