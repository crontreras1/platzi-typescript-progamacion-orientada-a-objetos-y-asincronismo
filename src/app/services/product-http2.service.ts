import { BaseHttpSeervice } from "./base-http.service"
import { Products } from "../models/products.model"

export class ProductHttp2Service extends BaseHttpSeervice<Products> {
    otroRequest () {
        this.url
    }
}