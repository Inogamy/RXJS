import { from, fromEvent, range } from "rxjs";
import { map, pluck } from "rxjs/operators";


// range(1, 5).pipe(
//     map<number,string>( val => (val * 10).toString())
// ).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.subscribe(console.log)

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(    
    map(x => x.target['baseURI'])
);



keyupCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));