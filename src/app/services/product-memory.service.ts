import { faker } from '@faker-js/faker';

import { Products } from '../models/products.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

export class ProductMemoryService {
    constructor (
        private products: Products[] = []
    ) {}

    create (data: CreateProductDto): Products {
        const newProduct = {
          ...data,
          id: faker.datatype.number(),
          category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            image: faker.image.imageUrl()
          }
        }
        
        return this.add(newProduct)
    }

    add (product: Products) {
        this.products.push(product);

        return product;
    }

    update (id: Products['id'], changes: UpdateProductDto ): Products {
        const index = this.products.findIndex(item => item.id === id);

        const prevData = this.products[index];

        this.products[index] = {
            ...prevData,
            ...changes
        }

        return this.products[index];
    }

    findOne (id: Products['id']) {
        return this.products.find((item) => item.id === id)
    }
}
