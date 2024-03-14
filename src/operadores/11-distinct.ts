import { distinct, from, of } from "rxjs";


const numeros$ = of(1,'1',1,1,1,2,2,3,3,4,4,5,6,'1', true,[1,2], {nombre:'john'});

numeros$.pipe(
    distinct()
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
    distinct(p => p.name)
).subscribe(console.log)