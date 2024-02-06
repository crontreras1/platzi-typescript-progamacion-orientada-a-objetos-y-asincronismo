import { Products } from "../models/products.model"
import { Category } from "../models/category.model"

export interface CreateProductDto extends Omit<Products, 'id' | 'category'>{
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
