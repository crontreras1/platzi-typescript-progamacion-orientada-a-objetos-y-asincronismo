import { UpdateProductDto } from "../dtos/product.dto"
import { Products } from "../models/products.model"
import { ProductHttp2Service } from "./product-http2.service"

export class ProductCRUDService {
    private url = 'https://api.escuelajs.co/api/v1/products'
    private http = new ProductHttp2Service(this.url)

    async update (id: Products['id'], dto: UpdateProductDto) {
        return this.http.update(id, dto)
    }
}