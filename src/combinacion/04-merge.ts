import { fromEvent, merge, map } from "rxjs";


const keyup$ = fromEvent<KeyboardEvent>( document , 'keyup');
const click$ = fromEvent<MouseEvent>( document, 'click');

merge(
    keyup$.pipe(map(event => event.code)),
    click$.pipe(map( point => ({x: point.clientX, y: point.clientY})))
).subscribe(console.log)

