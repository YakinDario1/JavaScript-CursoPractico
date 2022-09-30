
const h1 = document.querySelector('h1');
const parrafo = document.querySelector('p');
const pid = document.getElementById('pid');
const input = document.querySelector('input');
// input.value = 'Hola mundo';
// Modificacion de Html con InnerHTML
h1.innerHTML = 'Hola mundo';

console.log({
    h1,
    parrafo,
    pid,
    input
});

// Modificacion de Html con InnerText solo texto
h1.innerText = 'Hola mundo <br> <strong> Hola mundo </strong>';

console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'titulo');

    // input.value = "1213"';

const img = document.createElement('img');
img.setAttribute('src', 'https://placeimg.com/200/200/animals');
console.log(img);
pid.append(img);


// Calcular 
const btn = document.querySelector("#btnCalcular");
const n1 = document.querySelector("#calculo1");
const n2 = document.querySelector("#calculo2");

btn.addEventListener('click', btnOnClick);

function btnOnClick(event) {
    console.log(event);
    event.preventDefault();
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value);
}