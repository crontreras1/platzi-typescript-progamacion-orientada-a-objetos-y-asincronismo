export class MyDate {
    constructor (
        public year: number = 2023,
        public month: number = 1,
        private _day: number = 24
    ) { }

    printFormat (): string {
        const day: string = this.addPadding(this._day)
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
            this._day += amount
        }
        if (type === 'months') {
            this.month += amount
        }
        if (type === 'years') {
            this.year += amount
        }
    }

    get day () {
        return this._day
    }

    get isLeapYear (): boolean {
        if (this.year % 400 === 0) return true
        if (this.year % 100 === 0) return false
        return this.year % 4 === 0
    }
}

const isLeap = new MyDate(2000)
console.log(isLeap.isLeapYear)

const isLeap2 = new MyDate(2001)
console.log(isLeap2.isLeapYear)

const isLeap3 = new MyDate(2004)
console.log(isLeap3.isLeapYear)
