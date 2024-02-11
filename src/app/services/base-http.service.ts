import axios from "axios"
import { Category } from "../models/category.model"
import { Products } from "../models/products.model"
import { UpdateProductDto } from "../dtos/product.dto"

export class BaseHttpSeervice<TypeClass> {
    constructor (
        protected url: string
    ) {}

    // data: TypeCLass[] = [] 

    async getAll (): Promise<TypeClass[]> {
        const { data } = await axios.get<TypeClass[]>(this.url)

        return data
    }

    async update<ID, DTO> (id: ID, changes: DTO) {
        const { data } = await axios.put(`${this.url}/${id}`, changes)

        return data
    }
}

// const service = new BaseHttpSeervice<string>()
// service.getAll()

// const service2 = new BaseHttpSeervice<Category>()
// service2.getAll()

(async () => {
    const productsUrl = 'https://api.escuelajs.co/api/v1/products'
    const productsService = new BaseHttpSeervice<Products>(productsUrl)
    const productRta = await productsService.getAll()
    console.log('products', productRta.length)
    
    productsService.update<Products['id'], UpdateProductDto>(1, {
        title: 'lala'
    })
    
    const categoriesUrl = 'https://api.escuelajs.co/api/v1/categories'
    const categoryService = new BaseHttpSeervice<Category>(categoriesUrl)
    const categoryRta = await categoryService.getAll()
    console.log('categories', categoryRta.length)

}) ()
