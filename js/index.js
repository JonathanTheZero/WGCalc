"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kalkulation_class_1 = require("./model/kalkulation.class");
const price_class_1 = require("./model/price.class");
/*
let c = new Kalkulation();
c.listeneinkaufspreis = 760;
c.lieferrabatt = new Price(.10, undefined);
c.lieferskonto = new Price(.03, undefined);
c.bezugskosten = 11;
c.handlungskosten = new Price(.20, undefined);
c.kundenskonto = new Price(.02, undefined);
c.kundenrabatt = new Price(.05, undefined);
c.listenverkaufspreis = 910;
c.calcGewinn();
c.print();
*/
let skistiefel = new kalkulation_class_1.Kalkulation;
skistiefel.listeneinkaufspreis = 205;
skistiefel.listenverkaufspreis = 270;
skistiefel.lieferrabatt = new price_class_1.Price(.12, undefined);
skistiefel.lieferskonto = new price_class_1.Price(.03, undefined);
skistiefel.bezugskosten = 3.20;
skistiefel.handlungskosten = new price_class_1.Price(.18, undefined);
skistiefel.kundenskonto = new price_class_1.Price(.02, undefined);
skistiefel.kundenrabatt = new price_class_1.Price(.10, undefined);
skistiefel.calcGewinn();
skistiefel.print(true);
