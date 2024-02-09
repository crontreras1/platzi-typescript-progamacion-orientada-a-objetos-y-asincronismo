import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Products } from "./products.model";

export interface ProductService {
    getAll(): Products[] | Promise<Products[]>
    update(id: Products['id'], changes: UpdateProductDto): Products | Promise<Products>
    create(dto: CreateProductDto): Products | Promise<Products>
    findOne(id: Products['id']): Products | undefined | Promise<Products | undefined>
}