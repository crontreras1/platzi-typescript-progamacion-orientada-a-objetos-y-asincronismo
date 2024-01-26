export class MyDate {
    constructor (
        public year: number = 2023,
        private _month: number = 1,
        private _day: number = 24
    ) { }

    printFormat (): string {
        const day: string = this.addPadding(this._day)
        const month: string = this.addPadding(this._month)
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
            this._month += amount
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

    get month () {
        return this._month
    }

    set month (newValue: number) {
        if (newValue >= 1 && newValue <= 12) {
            this._month = newValue
        } else {
            throw new Error ('Número invalido')
        }
    }
}

const myDate = new MyDate(2000, 7, 23)
console.log(myDate.printFormat())
myDate.month = 8
console.log(myDate.month)