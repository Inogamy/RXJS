import { Observable, Observer } from "rxjs";

// const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [error]:', error),
    complete: () => console.log('Completado [obs]')
}

const obs$ = new Observable<string>(subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // const a =  undefined;
    // a.nombre = 'John'

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

obs$.subscribe(observer)

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.log('Se termino')
//  )






