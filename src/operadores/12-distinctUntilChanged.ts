import { distinct, distinctUntilChanged, from, of } from "rxjs";


const numeros$ = of(1,'1',1,1,1,2,2,3,3,4,4,5,6,'1');

numeros$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

interface Personajes {
    name: string
}

const personajes:Personajes[]=[
    {name: 'Megaman'},
    {name: 'X'},
    {name: 'Zero'},
    {name: 'Dr Willy'},
    {name: 'x'},
    {name: 'Megaman'},
    {name: 'Zero'},
];


from(personajes).pipe(
    distinctUntilChanged((ant, act) => ant.name === act.name)
).subscribe(console.log);