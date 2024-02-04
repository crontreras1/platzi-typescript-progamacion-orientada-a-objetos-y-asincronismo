import axios from "axios";
import { Products } from "./models/products.model";

(async () => {
    async function getProducts (): Promise<Products[]> {
        const { data } = await axios.get<Products[]>('https://api.escuelajs.co/api/v1/products')

        return data
    }

    const products = await getProducts()
    console.log(products.map(item => `${item.id} - ${item.title}`))
}) ()