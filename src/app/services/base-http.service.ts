import axios from "axios"
import { Category } from "../models/category.model"
import { Products } from "../models/products.model"

export class BaseHttpSeervice<TypeClass> {
    constructor (
        private url: string
    ) {}

    // data: TypeCLass[] = [] 

    async getAll (): Promise<TypeClass[]> {
        const { data } = await axios.get<TypeClass[]>(this.url)

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
    
    const categoriesUrl = 'https://api.escuelajs.co/api/v1/categories'
    const categoryService = new BaseHttpSeervice<Category>(categoriesUrl)
    const categoryRta = await productsService.getAll()
    console.log('categories', categoryRta.length)

}) ()
