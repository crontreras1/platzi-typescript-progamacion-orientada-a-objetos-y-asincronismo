export class Animal {
    constructor (
        protected name: string
    ) {}

    move () {
        console.log('moving along!')
    }

    greeting () {
        return `Hello, my name is ${this.name}`
    }
    
    protected doSomething () {
        console.log('doing something')
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
            console.log('woof', this.name)     
        }
        this.doSomething()
    }

    move () {
        console.log('moving')
        super.move()
    }
}

const katy = new Dog('Katy', 'Criss')
// katy.name = 'Otro nomnbre'
console.log(katy.greeting())
katy.bark(3)
// katy.doSomething()
katy.move()