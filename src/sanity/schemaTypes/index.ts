import { type SchemaTypeDefinition } from 'sanity'
import { categorySchema } from './categories'
import { productSchema } from './productSchema'
import {orderSchema} from './orderSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categorySchema, productSchema, orderSchema],
}
