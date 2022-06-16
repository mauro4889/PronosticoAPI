const ciudad = document.getElementById('inputCiudad');
const buscar = document.getElementById('btnBuscar');
const templateCard = document.querySelector('#templateCard').content;
const fragment = document.createDocumentFragment();
const containerCard = document.querySelector('.container__card');
const urlIcon = 'http://openweathermap.org/img/wn/'


const buscarCiudad = async () =>{
    try{
        const nombreCiudad = ciudad.value;
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&lang=es&appid=848ba8d0aa279313a89c7fff6b8639d6`);
        const data = await api.json();
        console.log(data);
        mostrarClima(data);
    }
    catch (error){
        console.log(error);
    }
}

const mostrarClima = (datosApi) =>{
    let icono = datosApi.weather[0].icon;
    let descripcion = datosApi.weather[0].description;
    let temperatura = datosApi.main.temp;
    temperatura -= 273.15;
    temperatura = temperatura.toFixed(2);
    templateCard.querySelector('h2').textContent = `${ciudad.value}`;
    templateCard.querySelector('img').setAttribute('src', `${urlIcon}${icono}.png`);
    templateCard.querySelector('h3').textContent = `${temperatura} C°`;
    templateCard.querySelector('p').textContent = `${descripcion}`;
    const clone = document.importNode(templateCard, true);
    fragment.appendChild(clone);
    containerCard.appendChild(fragment);
}

const limpiar = () => {
    while (containerCard.firstChild) {
        containerCard.removeChild(containerCard.firstChild);
    }
}

buscar.addEventListener('click', ()=>{
    limpiar();
    buscarCiudad();
})
