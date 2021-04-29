"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kalkulation = void 0;
const price_class_1 = require("./price.class");
class Kalkulation {
    constructor() { }
    calcGewinn() {
        if (!this.listeneinkaufspreis)
            throw new Error("Bitte Listeneinkaufspreis angeben!");
        if (!this.lieferrabatt || !this.lieferrabatt.percentage)
            throw new Error("Bitte Lieferrabatt angeben!");
        this.lieferrabatt.total = Number((this.listeneinkaufspreis * this.lieferrabatt.percentage).toFixed(2));
        this.zieleinkaufspreis = this.listeneinkaufspreis - this.lieferrabatt.total;
        if (!this.lieferskonto || !this.lieferskonto.percentage)
            throw new Error("Bitte Lieferskonto angeben!");
        this.lieferskonto.total = Number((this.zieleinkaufspreis * this.lieferskonto.percentage).toFixed(2));
        this.bareinkaufspreis = this.zieleinkaufspreis - this.lieferskonto.total;
        if (!this.bezugskosten)
            throw new Error("Bitte Bezugskosten angeben!");
        this.bezugspreis = this.bareinkaufspreis + this.bezugskosten;
        if (!this.handlungskosten || !this.handlungskosten.percentage)
            throw new Error("Bitte Handlungskosten angeben!");
        this.handlungskosten.total = Number((this.handlungskosten.percentage * this.bezugspreis).toFixed(2));
        this.selbstkostenpreis = this.bezugspreis + this.handlungskosten.total;
        if (!this.listenverkaufspreis)
            throw new Error("Bitte Listenverkaufspreis angeben!");
        if (!this.kundenrabatt || !this.kundenrabatt.percentage)
            throw new Error("Bitte Kundenrabatt angeben!");
        this.kundenrabatt.total = Number((this.kundenrabatt.percentage * this.listenverkaufspreis).toFixed(2));
        this.zielverkaufspreis = this.listenverkaufspreis - this.kundenrabatt.total;
        if (!this.kundenskonto || !this.kundenskonto.percentage)
            throw new Error("Bitte Kundenskonto angeben!");
        this.kundenskonto.total = Number((this.kundenskonto.percentage * this.zielverkaufspreis).toFixed(2));
        this.barverkaufspreis = this.zielverkaufspreis - this.kundenskonto.total;
        this.gewinn = new price_class_1.Price(undefined, undefined);
        this.gewinn.total = Number((this.barverkaufspreis - this.selbstkostenpreis).toFixed(2));
        this.gewinn.percentage = Number((this.gewinn.total / this.selbstkostenpreis).toFixed(4));
    }
    toString() {
        let str = "";
        for (let key in this) {
            let val = this[key];
            if (val instanceof price_class_1.Price) {
                str += `${key} = ${val.percentage}% => ${val.total}€\n`;
            }
            else {
                str += `${key} = ${val}€\n`;
            }
        }
        return str;
    }
    print(table = false) {
        let order = [
            'listeneinkaufspreis',
            'lieferrabatt',
            'zieleinkaufspreis',
            'lieferskonto',
            'bareinkaufspreis',
            'bezugskosten',
            'bezugspreis',
            'handlungskosten',
            'selbstkostenpreis',
            'gewinn',
            'barverkaufspreis',
            'kundenskonto',
            'zielverkaufspreis',
            'kundenrabatt',
            'listenverkaufspreis',
        ];
        const ordered = new Kalkulation();
        for (let o of order) {
            ordered[o] = this[o];
        }
        if (table) {
            console.table(ordered);
        }
        else {
            console.log(this.toString());
        }
    }
}
exports.Kalkulation = Kalkulation;
