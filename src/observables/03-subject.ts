import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [error]:', error),
    complete: () => console.log('Completado [obs]')
}

const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(() => subs.next(Math.random()), 1000);

    return () => {
        clearInterval(intervalID)
        console.log('Intervalo destruido')
    };

});

const subject$ = new Subject();
const suscripcion = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe( rmd => console.log(rmd));
// const suns2 = intervalo$.subscribe( rmd => console.log(rmd));

const subs1 = subject$.subscribe(rmd => console.log('subs1: ', rmd));
const suns2 = subject$.subscribe(rmd => console.log('subs2: ', rmd));

console.log(observer);

setTimeout( ()=>{
    subject$.next(10);
    subject$.complete();
    suscripcion.unsubscribe()
}, 3500);