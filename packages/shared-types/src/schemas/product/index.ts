import { z } from 'zod';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const ProductScalarFieldEnumSchema = z.enum(['id','name','description','price','createdAt','updatedAt','likedBy']);

export const ImageMetadataScalarFieldEnumSchema = z.enum(['id','fileId','fileUrl','productId','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  likedBy: z.string().array(),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// IMAGE METADATA SCHEMA
/////////////////////////////////////////

export const ImageMetadataSchema = z.object({
  id: z.string().uuid(),
  fileId: z.string(),
  fileUrl: z.string(),
  productId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ImageMetadata = z.infer<typeof ImageMetadataSchema>
