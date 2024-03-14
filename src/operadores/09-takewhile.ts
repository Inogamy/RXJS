import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";



const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ x }) => x >= 150)
    takeWhile(({ x }) => x >= 150, true)
).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('complete')
});