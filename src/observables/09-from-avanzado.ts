import { of, from } from "rxjs";

// *of = toma argumentos y genera una secuencia
// *from = array, promise, iterable, observable

const observer = {
    next: val => console.log('Next', val),
    complete: () => console.log('Terminado')
};

// const source$ = of(1,2,3,4,5,6)
// const source$ = of(...[1,2,3,4,5,6])
// const source$ = from('Fernando')

const source$ = from( fetch('https://api.github.com/users/Klerith'));

source$.subscribe( async (resp) => {

    console.log(resp)

    const dataResp = await resp.json();
    console.log(dataResp);
})

// source$.subscribe(observer);

