const date: Date = new Date()

const newDate = date.getMinutes()
console.log(newDate)

export class MyDate {
    year: number
    month: number
    day: number

    constructor (year: number, month: number, day: number) {
        this.year = year
        this.month = month
        this.day = day
    }
}

const myDate = new MyDate(1992, 6, 11)
console.log(myDate);
