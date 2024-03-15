import { fromEvent, interval, sample } from "rxjs";



const interval$ = interval(1000);
const click$ = fromEvent(document, 'click');


interval$.pipe(
    sample(click$)
).subscribe(console.log)