import { distinctUntilKeyChanged, from} from "rxjs";


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
    distinctUntilKeyChanged('name')
).subscribe(console.log)