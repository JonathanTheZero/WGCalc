"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
class Price {
    constructor(percentage, total) {
        this.percentage = percentage;
        this.total = total;
    }
    toString() {
        return "Prozentual: " + this.percentage + "\n" +
            "Absolut: " + this.total;
    }
}
exports.Price = Price;
