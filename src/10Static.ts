console.log(Math.PI)
console.log(Math.max(1, 2, 3, 4, 5))

class MyMath {
    static readonly PI: number = 3.1416

    static max (...numbers: number[]) {
        return numbers[0]
    }
}

console.log('MyMath', MyMath.PI)
console.log('MyMath.max', MyMath.max(4, 3, 2, 3, 5, 9))