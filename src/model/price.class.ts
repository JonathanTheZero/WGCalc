export class Price {

    constructor(
        public percentage: number | undefined,
        public total: number | undefined
    ) { }

    toString(): string {
        return "Prozentual: " + this.percentage + "\n" +
            "Absolut: "+  this.total;
    }
}