import { ProductHttpService } from "./services/product-http.service"

(async () => {
    try {
        const productService = new ProductHttpService()
        console.log('__'.repeat(10))
        
        const products = await productService.getAll()
        console.log(products.length)
        console.log(products.map(item => item.price))
    
        const productId = products[0].id
        await productService.update(productId, {
            price: 110692,
            title: 'Crispin',
            description: 'Crispin Rules'
        })
    
        const product = await productService.findOne(productId)
        console.log(product)
    } catch (error) {
        console.log(error)
    }

}) ()
