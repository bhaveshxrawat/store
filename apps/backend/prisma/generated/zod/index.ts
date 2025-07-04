import { z } from 'zod';
import type { Prisma } from '../../../src/generated/prisma';

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

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  imageMetadata: z.union([z.boolean(),z.lazy(() => ImageMetadataArgsSchema)]).optional(),
}).strict()

export const ProductArgsSchema: z.ZodType<Prisma.ProductDefaultArgs> = z.object({
  select: z.lazy(() => ProductSelectSchema).optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  likedBy: z.boolean().optional(),
  imageMetadata: z.union([z.boolean(),z.lazy(() => ImageMetadataArgsSchema)]).optional(),
}).strict()

// IMAGE METADATA
//------------------------------------------------------

export const ImageMetadataIncludeSchema: z.ZodType<Prisma.ImageMetadataInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const ImageMetadataArgsSchema: z.ZodType<Prisma.ImageMetadataDefaultArgs> = z.object({
  select: z.lazy(() => ImageMetadataSelectSchema).optional(),
  include: z.lazy(() => ImageMetadataIncludeSchema).optional(),
}).strict();

export const ImageMetadataSelectSchema: z.ZodType<Prisma.ImageMetadataSelect> = z.object({
  id: z.boolean().optional(),
  fileId: z.boolean().optional(),
  fileUrl: z.boolean().optional(),
  productId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  likedBy: z.lazy(() => StringNullableListFilterSchema).optional(),
  imageMetadata: z.union([ z.lazy(() => ImageMetadataNullableScalarRelationFilterSchema),z.lazy(() => ImageMetadataWhereInputSchema) ]).optional().nullable(),
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  likedBy: z.lazy(() => SortOrderSchema).optional(),
  imageMetadata: z.lazy(() => ImageMetadataOrderByWithRelationInputSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  likedBy: z.lazy(() => StringNullableListFilterSchema).optional(),
  imageMetadata: z.union([ z.lazy(() => ImageMetadataNullableScalarRelationFilterSchema),z.lazy(() => ImageMetadataWhereInputSchema) ]).optional().nullable(),
}).strict());

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  likedBy: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  likedBy: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const ImageMetadataWhereInputSchema: z.ZodType<Prisma.ImageMetadataWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ImageMetadataWhereInputSchema),z.lazy(() => ImageMetadataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageMetadataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageMetadataWhereInputSchema),z.lazy(() => ImageMetadataWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fileUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict();

export const ImageMetadataOrderByWithRelationInputSchema: z.ZodType<Prisma.ImageMetadataOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  fileUrl: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional()
}).strict();

export const ImageMetadataWhereUniqueInputSchema: z.ZodType<Prisma.ImageMetadataWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    fileId: z.string(),
    productId: z.string()
  }),
  z.object({
    id: z.string().uuid(),
    fileId: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
    productId: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    fileId: z.string(),
    productId: z.string(),
  }),
  z.object({
    fileId: z.string(),
  }),
  z.object({
    productId: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  fileId: z.string().optional(),
  productId: z.string().optional(),
  AND: z.union([ z.lazy(() => ImageMetadataWhereInputSchema),z.lazy(() => ImageMetadataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageMetadataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageMetadataWhereInputSchema),z.lazy(() => ImageMetadataWhereInputSchema).array() ]).optional(),
  fileUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict());

export const ImageMetadataOrderByWithAggregationInputSchema: z.ZodType<Prisma.ImageMetadataOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  fileUrl: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ImageMetadataCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ImageMetadataMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ImageMetadataMinOrderByAggregateInputSchema).optional()
}).strict();

export const ImageMetadataScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ImageMetadataScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ImageMetadataScalarWhereWithAggregatesInputSchema),z.lazy(() => ImageMetadataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageMetadataScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageMetadataScalarWhereWithAggregatesInputSchema),z.lazy(() => ImageMetadataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  fileId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  fileUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  likedBy: z.union([ z.lazy(() => ProductCreatelikedByInputSchema),z.string().array() ]).optional(),
  imageMetadata: z.lazy(() => ImageMetadataCreateNestedOneWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  likedBy: z.union([ z.lazy(() => ProductCreatelikedByInputSchema),z.string().array() ]).optional(),
  imageMetadata: z.lazy(() => ImageMetadataUncheckedCreateNestedOneWithoutProductInputSchema).optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  likedBy: z.union([ z.lazy(() => ProductUpdatelikedByInputSchema),z.string().array() ]).optional(),
  imageMetadata: z.lazy(() => ImageMetadataUpdateOneWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  likedBy: z.union([ z.lazy(() => ProductUpdatelikedByInputSchema),z.string().array() ]).optional(),
  imageMetadata: z.lazy(() => ImageMetadataUncheckedUpdateOneWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  likedBy: z.union([ z.lazy(() => ProductCreatelikedByInputSchema),z.string().array() ]).optional(),
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  likedBy: z.union([ z.lazy(() => ProductUpdatelikedByInputSchema),z.string().array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  likedBy: z.union([ z.lazy(() => ProductUpdatelikedByInputSchema),z.string().array() ]).optional(),
}).strict();

export const ImageMetadataCreateInputSchema: z.ZodType<Prisma.ImageMetadataCreateInput> = z.object({
  id: z.string().uuid().optional(),
  fileId: z.string(),
  fileUrl: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutImageMetadataInputSchema)
}).strict();

export const ImageMetadataUncheckedCreateInputSchema: z.ZodType<Prisma.ImageMetadataUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  fileId: z.string(),
  fileUrl: z.string(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ImageMetadataUpdateInputSchema: z.ZodType<Prisma.ImageMetadataUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutImageMetadataNestedInputSchema).optional()
}).strict();

export const ImageMetadataUncheckedUpdateInputSchema: z.ZodType<Prisma.ImageMetadataUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImageMetadataCreateManyInputSchema: z.ZodType<Prisma.ImageMetadataCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  fileId: z.string(),
  fileUrl: z.string(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ImageMetadataUpdateManyMutationInputSchema: z.ZodType<Prisma.ImageMetadataUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImageMetadataUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ImageMetadataUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const ImageMetadataNullableScalarRelationFilterSchema: z.ZodType<Prisma.ImageMetadataNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ImageMetadataWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ImageMetadataWhereInputSchema).optional().nullable()
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  likedBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ProductScalarRelationFilterSchema: z.ZodType<Prisma.ProductScalarRelationFilter> = z.object({
  is: z.lazy(() => ProductWhereInputSchema).optional(),
  isNot: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ImageMetadataCountOrderByAggregateInputSchema: z.ZodType<Prisma.ImageMetadataCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  fileUrl: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImageMetadataMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ImageMetadataMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  fileUrl: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImageMetadataMinOrderByAggregateInputSchema: z.ZodType<Prisma.ImageMetadataMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  fileUrl: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductCreatelikedByInputSchema: z.ZodType<Prisma.ProductCreatelikedByInput> = z.object({
  set: z.string().array()
}).strict();

export const ImageMetadataCreateNestedOneWithoutProductInputSchema: z.ZodType<Prisma.ImageMetadataCreateNestedOneWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => ImageMetadataCreateWithoutProductInputSchema),z.lazy(() => ImageMetadataUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImageMetadataCreateOrConnectWithoutProductInputSchema).optional(),
  connect: z.lazy(() => ImageMetadataWhereUniqueInputSchema).optional()
}).strict();

export const ImageMetadataUncheckedCreateNestedOneWithoutProductInputSchema: z.ZodType<Prisma.ImageMetadataUncheckedCreateNestedOneWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => ImageMetadataCreateWithoutProductInputSchema),z.lazy(() => ImageMetadataUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImageMetadataCreateOrConnectWithoutProductInputSchema).optional(),
  connect: z.lazy(() => ImageMetadataWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const ProductUpdatelikedByInputSchema: z.ZodType<Prisma.ProductUpdatelikedByInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const ImageMetadataUpdateOneWithoutProductNestedInputSchema: z.ZodType<Prisma.ImageMetadataUpdateOneWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImageMetadataCreateWithoutProductInputSchema),z.lazy(() => ImageMetadataUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImageMetadataCreateOrConnectWithoutProductInputSchema).optional(),
  upsert: z.lazy(() => ImageMetadataUpsertWithoutProductInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ImageMetadataWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ImageMetadataWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ImageMetadataWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ImageMetadataUpdateToOneWithWhereWithoutProductInputSchema),z.lazy(() => ImageMetadataUpdateWithoutProductInputSchema),z.lazy(() => ImageMetadataUncheckedUpdateWithoutProductInputSchema) ]).optional(),
}).strict();

export const ImageMetadataUncheckedUpdateOneWithoutProductNestedInputSchema: z.ZodType<Prisma.ImageMetadataUncheckedUpdateOneWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImageMetadataCreateWithoutProductInputSchema),z.lazy(() => ImageMetadataUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImageMetadataCreateOrConnectWithoutProductInputSchema).optional(),
  upsert: z.lazy(() => ImageMetadataUpsertWithoutProductInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ImageMetadataWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ImageMetadataWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ImageMetadataWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ImageMetadataUpdateToOneWithWhereWithoutProductInputSchema),z.lazy(() => ImageMetadataUpdateWithoutProductInputSchema),z.lazy(() => ImageMetadataUncheckedUpdateWithoutProductInputSchema) ]).optional(),
}).strict();

export const ProductCreateNestedOneWithoutImageMetadataInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutImageMetadataInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutImageMetadataInputSchema),z.lazy(() => ProductUncheckedCreateWithoutImageMetadataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutImageMetadataInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export const ProductUpdateOneRequiredWithoutImageMetadataNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutImageMetadataNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutImageMetadataInputSchema),z.lazy(() => ProductUncheckedCreateWithoutImageMetadataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutImageMetadataInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutImageMetadataInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutImageMetadataInputSchema),z.lazy(() => ProductUpdateWithoutImageMetadataInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutImageMetadataInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ImageMetadataCreateWithoutProductInputSchema: z.ZodType<Prisma.ImageMetadataCreateWithoutProductInput> = z.object({
  id: z.string().uuid().optional(),
  fileId: z.string(),
  fileUrl: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ImageMetadataUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.ImageMetadataUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().uuid().optional(),
  fileId: z.string(),
  fileUrl: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ImageMetadataCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ImageMetadataCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => ImageMetadataWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ImageMetadataCreateWithoutProductInputSchema),z.lazy(() => ImageMetadataUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const ImageMetadataUpsertWithoutProductInputSchema: z.ZodType<Prisma.ImageMetadataUpsertWithoutProductInput> = z.object({
  update: z.union([ z.lazy(() => ImageMetadataUpdateWithoutProductInputSchema),z.lazy(() => ImageMetadataUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => ImageMetadataCreateWithoutProductInputSchema),z.lazy(() => ImageMetadataUncheckedCreateWithoutProductInputSchema) ]),
  where: z.lazy(() => ImageMetadataWhereInputSchema).optional()
}).strict();

export const ImageMetadataUpdateToOneWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ImageMetadataUpdateToOneWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => ImageMetadataWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ImageMetadataUpdateWithoutProductInputSchema),z.lazy(() => ImageMetadataUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const ImageMetadataUpdateWithoutProductInputSchema: z.ZodType<Prisma.ImageMetadataUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImageMetadataUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.ImageMetadataUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateWithoutImageMetadataInputSchema: z.ZodType<Prisma.ProductCreateWithoutImageMetadataInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  likedBy: z.union([ z.lazy(() => ProductCreatelikedByInputSchema),z.string().array() ]).optional(),
}).strict();

export const ProductUncheckedCreateWithoutImageMetadataInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutImageMetadataInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  likedBy: z.union([ z.lazy(() => ProductCreatelikedByInputSchema),z.string().array() ]).optional(),
}).strict();

export const ProductCreateOrConnectWithoutImageMetadataInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutImageMetadataInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutImageMetadataInputSchema),z.lazy(() => ProductUncheckedCreateWithoutImageMetadataInputSchema) ]),
}).strict();

export const ProductUpsertWithoutImageMetadataInputSchema: z.ZodType<Prisma.ProductUpsertWithoutImageMetadataInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutImageMetadataInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutImageMetadataInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutImageMetadataInputSchema),z.lazy(() => ProductUncheckedCreateWithoutImageMetadataInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductUpdateToOneWithWhereWithoutImageMetadataInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutImageMetadataInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutImageMetadataInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutImageMetadataInputSchema) ]),
}).strict();

export const ProductUpdateWithoutImageMetadataInputSchema: z.ZodType<Prisma.ProductUpdateWithoutImageMetadataInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  likedBy: z.union([ z.lazy(() => ProductUpdatelikedByInputSchema),z.string().array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateWithoutImageMetadataInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutImageMetadataInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  likedBy: z.union([ z.lazy(() => ProductUpdatelikedByInputSchema),z.string().array() ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithAggregationInputSchema.array(),ProductOrderByWithAggregationInputSchema ]).optional(),
  by: ProductScalarFieldEnumSchema.array(),
  having: ProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ImageMetadataFindFirstArgsSchema: z.ZodType<Prisma.ImageMetadataFindFirstArgs> = z.object({
  select: ImageMetadataSelectSchema.optional(),
  include: ImageMetadataIncludeSchema.optional(),
  where: ImageMetadataWhereInputSchema.optional(),
  orderBy: z.union([ ImageMetadataOrderByWithRelationInputSchema.array(),ImageMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImageMetadataScalarFieldEnumSchema,ImageMetadataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ImageMetadataFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ImageMetadataFindFirstOrThrowArgs> = z.object({
  select: ImageMetadataSelectSchema.optional(),
  include: ImageMetadataIncludeSchema.optional(),
  where: ImageMetadataWhereInputSchema.optional(),
  orderBy: z.union([ ImageMetadataOrderByWithRelationInputSchema.array(),ImageMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImageMetadataScalarFieldEnumSchema,ImageMetadataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ImageMetadataFindManyArgsSchema: z.ZodType<Prisma.ImageMetadataFindManyArgs> = z.object({
  select: ImageMetadataSelectSchema.optional(),
  include: ImageMetadataIncludeSchema.optional(),
  where: ImageMetadataWhereInputSchema.optional(),
  orderBy: z.union([ ImageMetadataOrderByWithRelationInputSchema.array(),ImageMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImageMetadataScalarFieldEnumSchema,ImageMetadataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ImageMetadataAggregateArgsSchema: z.ZodType<Prisma.ImageMetadataAggregateArgs> = z.object({
  where: ImageMetadataWhereInputSchema.optional(),
  orderBy: z.union([ ImageMetadataOrderByWithRelationInputSchema.array(),ImageMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ImageMetadataGroupByArgsSchema: z.ZodType<Prisma.ImageMetadataGroupByArgs> = z.object({
  where: ImageMetadataWhereInputSchema.optional(),
  orderBy: z.union([ ImageMetadataOrderByWithAggregationInputSchema.array(),ImageMetadataOrderByWithAggregationInputSchema ]).optional(),
  by: ImageMetadataScalarFieldEnumSchema.array(),
  having: ImageMetadataScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ImageMetadataFindUniqueArgsSchema: z.ZodType<Prisma.ImageMetadataFindUniqueArgs> = z.object({
  select: ImageMetadataSelectSchema.optional(),
  include: ImageMetadataIncludeSchema.optional(),
  where: ImageMetadataWhereUniqueInputSchema,
}).strict() ;

export const ImageMetadataFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ImageMetadataFindUniqueOrThrowArgs> = z.object({
  select: ImageMetadataSelectSchema.optional(),
  include: ImageMetadataIncludeSchema.optional(),
  where: ImageMetadataWhereUniqueInputSchema,
}).strict() ;

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict() ;

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict() ;

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProductCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ProductUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ImageMetadataCreateArgsSchema: z.ZodType<Prisma.ImageMetadataCreateArgs> = z.object({
  select: ImageMetadataSelectSchema.optional(),
  include: ImageMetadataIncludeSchema.optional(),
  data: z.union([ ImageMetadataCreateInputSchema,ImageMetadataUncheckedCreateInputSchema ]),
}).strict() ;

export const ImageMetadataUpsertArgsSchema: z.ZodType<Prisma.ImageMetadataUpsertArgs> = z.object({
  select: ImageMetadataSelectSchema.optional(),
  include: ImageMetadataIncludeSchema.optional(),
  where: ImageMetadataWhereUniqueInputSchema,
  create: z.union([ ImageMetadataCreateInputSchema,ImageMetadataUncheckedCreateInputSchema ]),
  update: z.union([ ImageMetadataUpdateInputSchema,ImageMetadataUncheckedUpdateInputSchema ]),
}).strict() ;

export const ImageMetadataCreateManyArgsSchema: z.ZodType<Prisma.ImageMetadataCreateManyArgs> = z.object({
  data: z.union([ ImageMetadataCreateManyInputSchema,ImageMetadataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ImageMetadataCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ImageMetadataCreateManyAndReturnArgs> = z.object({
  data: z.union([ ImageMetadataCreateManyInputSchema,ImageMetadataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ImageMetadataDeleteArgsSchema: z.ZodType<Prisma.ImageMetadataDeleteArgs> = z.object({
  select: ImageMetadataSelectSchema.optional(),
  include: ImageMetadataIncludeSchema.optional(),
  where: ImageMetadataWhereUniqueInputSchema,
}).strict() ;

export const ImageMetadataUpdateArgsSchema: z.ZodType<Prisma.ImageMetadataUpdateArgs> = z.object({
  select: ImageMetadataSelectSchema.optional(),
  include: ImageMetadataIncludeSchema.optional(),
  data: z.union([ ImageMetadataUpdateInputSchema,ImageMetadataUncheckedUpdateInputSchema ]),
  where: ImageMetadataWhereUniqueInputSchema,
}).strict() ;

export const ImageMetadataUpdateManyArgsSchema: z.ZodType<Prisma.ImageMetadataUpdateManyArgs> = z.object({
  data: z.union([ ImageMetadataUpdateManyMutationInputSchema,ImageMetadataUncheckedUpdateManyInputSchema ]),
  where: ImageMetadataWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ImageMetadataUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ImageMetadataUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ImageMetadataUpdateManyMutationInputSchema,ImageMetadataUncheckedUpdateManyInputSchema ]),
  where: ImageMetadataWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ImageMetadataDeleteManyArgsSchema: z.ZodType<Prisma.ImageMetadataDeleteManyArgs> = z.object({
  where: ImageMetadataWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;