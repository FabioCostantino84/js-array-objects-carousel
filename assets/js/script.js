/* 
Consegna:
Riprendiamo il live coding visto in classe un pó di tempo fá sul carosello di immagini e rifacciamolo 
Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.

Bonus 0:
Non eramamo ancora a conoscenda di molti strumenti utili, come ad esempio le funzioni. É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito?

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?
 */

const slides = [
    {
        Image: './assets/img/01.webp'
    },
    {
        Image: './assets/img/02.webp'
    },
    {
        Image: './assets/img/03.webp'
    },
    {
        Image: './assets/img/04.webp'
    },
    {
        Image: './assets/img/05.webp'
    },
]
console.log(slides);

let activeSlide = 0;

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')


//console.log(sliderImagesEl);

/* Print all images into the dom */
// loop over the slides 
for (let i = 0; i < slides.length; i++) {
    const slidePath = slides[i];
    console.log(slidePath);

    // for each slide we create the markup
    const slideMarkup = `<img class="${activeSlide === i ? 'active' : ''}" src="${slidePath}" alt="">`
    //console.log(slideMarkup);

    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)

}


