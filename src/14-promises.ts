import axios from "axios"

(async () => {
    function delay (time: number) {
        const promise = new Promise<string> ((resolve) => {
            setTimeout (() => {
                resolve ('Funciona!!')
            }, time)
        })

        return promise
    }

    const rta = await delay(5000)
    // console.log(rta.toUpperCase())
    // console.log(rta.toLocaleLowerCase())

    function getProducts () {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products')

        return promise
    }

    const products = await getProducts()
    // console.log(products.data)

    async function getProductsAsync () {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
        return rta.data
    }

    const productsAsync = await getProductsAsync()
    console.log(productsAsync)
}) ()
