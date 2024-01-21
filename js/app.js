const resultado = document.querySelector('#resultado');
const anio = document.querySelector('#year');
const maxYear = new Date().getFullYear();
const minYear = maxYear-10;



//selector de los combobox 
const marca = document.querySelector('#marca');
const preciomin = document.querySelector('#minimo');
const preciomax = document.querySelector('#maximo');
const color = document.querySelector('#color');
const puertas = document.querySelector('#puertas');


//generar un objeto con los datos de la busqueda 

const busqueda = {
    marca: '',
    precio: '',
    puertas: '',
    color: '',
    minimo: '', 
    maximo: '', 
}
document.addEventListener('DOMContentLoaded', () => {



//llena las opciones de año 
llenarSelec();
eventos();

});

//eventos de la busqueda

function eventos() {


    marca.addEventListener('change', cambio);
}



function cambio(e){
    const busqueda = e.target.value;
    console.log(busqueda); 
    filtrar(busqueda); 
}

function mostrarAutos(xd){
    limpiar();
    xd.forEach( auto => {
        const {marca , precio, puertas, color} = auto;
        const autohtml = document.createElement('p');
        autohtml.textContent = `${marca}  ${precio} ${puertas} ${color}`
        resultado.appendChild(autohtml);
    });
}


function filtrar(selec){
    const nuevo = autos.filter((auto) => auto.marca === selec);
    console.log(nuevo)
    mostrarAutos(nuevo);

}


function llenarSelec(){

    for (let i = maxYear; i > minYear; i--){
     
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i; 

        anio.appendChild(opcion);
    }

}


function limpiar(){
    resultado.innerHTML = '';
}
