import { of } from "rxjs";

// const obs$ = of<number>(1,2,3,4,5,6);
const obs$ = of(...[1,2,3,4,5,6], 1,2,3,4,5,6);
// const obs$ = of( [1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Inicio del Obs$');
obs$.subscribe({
    next:(value) => console.log('next ', value),
    error:(error) => console.error('erros ', error),
    complete: () => console.log('Terminamos la secuencia!!!')
});
console.log('Fin del Obs$');