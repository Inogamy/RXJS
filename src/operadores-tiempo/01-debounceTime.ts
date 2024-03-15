import { debounce, debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";


const click$ = fromEvent( document, 'click');

click$.pipe(
    debounceTime(5000)
)//.subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    map(x => x.target['value']),
    distinctUntilChanged()
).subscribe(console.log)