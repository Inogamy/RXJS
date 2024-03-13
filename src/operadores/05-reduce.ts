import { interval, map, reduce, take, tap } from "rxjs";


const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorTotal: number): number => {
    return acumulador + valorTotal 

};

const total = numbers.reduce(totalReducer, 2);
console.log(total);

interval(100).pipe(
    take(5),
    tap(console.log),
    reduce(totalReducer)
).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => (console.log('Complete'))
})