export class Animal {
    constructor (
        public name: string
    ) {}

    move () {
        console.log('moving along!')
    }

    greeting () {
        return `Hello, my name is ${this.name}`
    }
}

export class Dog extends Animal {
    constructor (
        name: string,
        public owner: string
    ) {
        super(name)
    }
    bark (times: number) {
        for (let index = 0; index < times; index++) {
            console.log('woof')     
        }
    }
}

const fifi = new Animal('fifi')
fifi.move()
console.log(fifi.greeting())

const katy = new Dog('Katy', 'Criss')
katy.move()
console.log(katy.greeting())
katy.bark(3)
console.log(katy.owner)
