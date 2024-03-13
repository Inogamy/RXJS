import { fromEvent, map, tap } from "rxjs";


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus nunc et vehicula sagittis. Morbi condimentum vitae urna sit amet pharetra. Cras ut risus lacinia, varius quam at, rhoncus nisi. In ante magna, pharetra non commodo ut, mattis eu risus. Fusce at vulputate tellus. Donec ut consequat urna. Nam dapibus tellus dolor, non pellentesque sem euismod eu. Cras accumsan neque turpis, quis rhoncus magna facilisis non.
<br/><br/>
Donec sed commodo eros. Suspendisse malesuada vestibulum ipsum. Phasellus feugiat tempus lorem, non sagittis dui sagittis a. Morbi et consectetur dolor. Ut vitae ullamcorper eros. Morbi ac porttitor turpis. Phasellus ullamcorper leo ut tellus pellentesque auctor. Fusce aliquam nisl dui, ut rhoncus lorem bibendum non. Donec vestibulum accumsan arcu ac consectetur. In sapien enim, porttitor in quam in, fringilla auctor leo. Proin ut scelerisque arcu.
<br/><br/>
Praesent vehicula risus a sem vulputate tempor. Phasellus hendrerit tincidunt ipsum, sed luctus ligula sollicitudin eget. Integer arcu elit, congue ut semper nec, tincidunt vitae leo. Nullam non suscipit odio. Aenean vel felis a metus volutpat hendrerit non quis erat. Phasellus posuere, neque id egestas ullamcorper, tellus dui dignissim mi, in lacinia erat odio sed lectus. Sed a semper est, tincidunt molestie tellus. Suspendisse blandit ut enim in volutpat. Ut vel efficitur ligula. Vivamus eget tempus odio, eu commodo enim.
<br/><br/>
Suspendisse dictum libero venenatis venenatis gravida. Ut tempor felis vel ante tempor pharetra. Nam venenatis lacus in libero blandit commodo eu a orci. Donec sit amet ex sed sem consectetur posuere. Nunc pellentesque scelerisque metus et scelerisque. Fusce varius, massa eget ornare varius, justo urna commodo nisl, sed scelerisque lectus justo at lacus. Sed risus elit, maximus non nulla et, sodales condimentum libero. In viverra, ante nec ultrices facilisis, mauris erat congue dui, non feugiat tortor lectus ac magna. Nunc nunc nibh, pulvinar et justo at, placerat eleifend dolor. Mauris at sem at tellus vestibulum scelerisque tempor ac ligula. Donec ultrices mauris eu leo ullamcorper, feugiat tincidunt magna commodo.
<br/><br/>
Proin mollis sapien sed dapibus vestibulum. Nulla sit amet rutrum eros. Mauris eu dolor erat. Maecenas magna quam, aliquam eu nunc et, pretium fringilla leo. Donec commodo malesuada maximus. Vestibulum imperdiet venenatis efficitur. Ut et dapibus nisi. Donec a augue quis ex auctor lobortis. Sed metus mauris, dictum pharetra leo eget, sollicitudin porttitor sem. Quisque nisl risus, posuere sed risus vitae, interdum porta est. Donec urna nisi, interdum in tristique sit amet, sodales vitae urna.
`

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar)

const calcularPorcentajeScroll = (event) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / (scrollHeight - clientHeight))*100;
}

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})