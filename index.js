const ciudad = document.getElementById('inputCiudad');
const buscar = document.getElementById('btnBuscar');
const JSON = './js/city.list.json'

const mostrarBusqueda = (dataJSON, ciudad) =>{
    const resultado = dataJSON.find(el =>
        el.name == ciudad);
    console.log(resultado);
}

const buscarCiudad = async (objJSON) =>{
    try{
        const nombreCiudad = ciudad.value;
        const api = await fetch(objJSON );
        const data = await api.json();
        console.log(nombreCiudad);
        mostrarBusqueda(data, nombreCiudad)
    }
    catch (error){
        console.log(error);
    }
}




buscar.addEventListener('click', ()=>{
    buscarCiudad(JSON);
})
