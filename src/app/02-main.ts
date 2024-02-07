import { ProductMemoryService } from "./services/product-memory.service"

const productService = new ProductMemoryService()

productService.create({
    title: 'Producto 1',
    price: 100,
    description: 'bla bla bla',
    categoryId: 12,
    images: []
})

const getAllProductsService = productService.getAll()
const productId = getAllProductsService[0].id

productService.update(productId, {
    title: 'Nombre cambiado'
}) 

const rta = productService.findOne(productId)
console.log(rta)