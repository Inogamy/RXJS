import { first, fromEvent } from 'rxjs';
import { tap, map } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap<MouseEvent>(console.log),
    // map( event => ({
    //     clientX: event.clientX,
    //     clientY: event.clientY,
    // })),
    map( ({clientX, clientY}) => ({ clientX, clientY })),
    first(event => event.clientY >= 150)
).subscribe({
    next: value => console.log('next', value),
    complete: () => console.log('Complete')
})
