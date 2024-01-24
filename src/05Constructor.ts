export class MyDate {
    constructor (
        public year: number = 2023,
        public month: number = 1,
        private day: number = 24
    ) { }

    printFormat (): string {
        const day: string = this.addPadding(this.day)
        const month: string = this.addPadding(this.month)
        return `${this.year}/${month}/${day}`
    }

    private addPadding (value: number) {
        if (value < 10) {
            return `0${value}`
        }
        return `${value}`
    }

    add (amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this.day += amount
        }
        if (type === 'months') {
            this.month += amount
        }
        if (type === 'years') {
            this.year += amount
        }
    }
}



const myDate = new MyDate(1992, 6, 11)
console.log(myDate.printFormat())

const myDate2 = new MyDate(1945)
console.log(myDate2.printFormat())

const myDate3 = new MyDate(1945, 4)
console.log(myDate3.printFormat())
