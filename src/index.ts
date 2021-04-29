import { Kalkulation } from "./model/kalkulation.class";
import { Price } from "./model/price.class";

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

let skistiefel = new Kalkulation;
skistiefel.listeneinkaufspreis = 205;
skistiefel.listenverkaufspreis = 270;
skistiefel.lieferrabatt = new Price(.12, undefined);
skistiefel.lieferskonto = new Price(.03, undefined);
skistiefel.bezugskosten = 3.20;
skistiefel.handlungskosten = new Price(.18, undefined);
skistiefel.kundenskonto = new Price(.02, undefined);
skistiefel.kundenrabatt = new Price(.10, undefined);
skistiefel.calcGewinn();
skistiefel.print(true);