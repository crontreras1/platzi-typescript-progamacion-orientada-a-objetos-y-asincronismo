export interface Driver {
    database: string
    password: string
    port: number

    connect(): void 

    disconnect(): void

    isConnected(name: string): boolean
}

class PostgresDriver implements Driver {
    constructor (
        public database: string,
        public password: string,
        public port: number
    ) {}

    connect(): void {
        //code
    }

    disconnect(): void {
        //code
    }

    isConnected(name: string): boolean {
        return true
    }
}