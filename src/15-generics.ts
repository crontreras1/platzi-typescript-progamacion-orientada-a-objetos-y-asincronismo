function getValue<dinamycType> (value: dinamycType) {
    return value
}

getValue<number>(12)
getValue<string>(`It's a string`)
getValue<number[]>([1, 2, 3, 4, 5])