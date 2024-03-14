import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";


const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(document, 'click');
const clickBtn$ = fromEvent(document, 'click').pipe(
    tap( ()=> console.log('Tap antes del skip')),
    skip(1)
);

counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('Complete')
})