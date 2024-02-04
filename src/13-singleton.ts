export class MyService {
    static instance: MyService | null = null //Se crea la instancia una única vez para llamarla siempre que sea necesario
    
    private constructor ( //Palabra reservada private para solo poder accerder a esta dentro de la clase
        private name: string
    ) {}

    getName () {
        return this.name
    }

    static create (name: string) { //Método estático con la palabra reservada create
        if (MyService.instance === null) {
            console.log ('Just one')
            MyService.instance = new MyService(name)
        }

        return MyService.instance
    }
}

// Forma tradicional de llamar nuevas instancias de la clase
// const service1 = new MyService('Cristian')
// console.log(service1.getName())
// const service2 = new MyService('Camilo')
// console.log(service2.getName())

// console.log(service1 === service2)

const myService = MyService.create('nombre con singleton')
console.log(myService.getName())
const myService1 = MyService.create('nombre con singleton 1')
console.log(myService1.getName())
const myService2 = MyService.create('nombre con singleton 2')
console.log(myService2.getName())