export class MyDate {
    year: number
    private month: number
    day: number

    constructor (year: number, month: number, day: number) {
        this.year = year
        this.month = month
        this.day = day
    }

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