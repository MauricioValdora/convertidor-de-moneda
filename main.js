const monedaUnoEl = document.getElementById('monedaUno');
const monedaDosEl = document.getElementById('monedaDos');
const cantidadDos = document.getElementById('cantidad-dos');
const cantidadUno = document.getElementById('cantidad-uno');
const boton = document.getElementById('taza');
const cambio = document.getElementById('cambio')

//fetching
function calculate(){

    const monedaUno = monedaUnoEl.value;
    const monedaDos = monedaDosEl.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${monedaUno}`)
    .then(res => res.json())
    .then(data => {
        const taza = data.rates[monedaDos];

        cambio.innerText = `1 ${monedaUno} = ${taza} ${monedaDos}`

        cantidadDos.value = (cantidadUno.value*taza).toFixed(2)
        
        

    });
 
}


monedaDosEl.addEventListener('change',calculate)
monedaUnoEl.addEventListener('change',calculate)
cantidadDos.addEventListener('input',calculate)
cantidadUno.addEventListener('input',calculate)


boton.addEventListener('click',()=>{
    const temp = monedaUnoEl.value;
    monedaUnoEl.value = monedaDosEl.value;
    monedaDosEl.value = temp;
    calculate();
})