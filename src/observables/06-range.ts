import { asyncScheduler, of, range } from "rxjs";

// const scr$ = of(1,2,3,4,5,6)
const scr$ = range(1, 5, asyncScheduler);

console.log('Inicio');
scr$.subscribe(console.log);
console.log('Fin');
