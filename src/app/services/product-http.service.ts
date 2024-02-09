import axios from "axios";
import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Products } from "../models/products.model";

export class ProductHttpService implements ProductService {
    private url: string = 'https://api.escualejs.co/api/v1/products'

    async getAll() {
        const { data } = await axios.get<Products[]>(this.url)

        return data
    }

    async update(id: Products['id'], changes: UpdateProductDto) {
        const { data } = await axios.put<Products>(`${this.url}/${id}`, changes)

        return data
    }

    async create(dto: CreateProductDto) {
        const { data } = await axios.post(this.url, dto)

        return data
    }

    async findOne(id: Products['id']) {
        const { data } = await axios.get(`${this.url}/${id}`)

        return data
    }

}