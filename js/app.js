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
const titulo = document.querySelector('#titulo');
console.log(titulo)

//generar un objeto con los datos de la busqueda 

const busqueda = {
    marca: '',
    precio: '',
    puertas: '',
    color: '',
    minimo: '', 
    maximo: '', 
    year: '', 
}
document.addEventListener('DOMContentLoaded', () => {



//llena las opciones de año 
llenarSelec();
eventos();

});

//eventos de la busqueda

function eventos() {


    marca.addEventListener('change', cambio);
    color.addEventListener('change', cambio);
    anio.addEventListener('change', cambio);
    puertas.addEventListener('change', cambio);
    preciomax.addEventListener('change', cambio);
    preciomin.addEventListener('change', cambio);
    
}



function cambio(e){
    const campo = e.target.id;
    console.log(campo);
    const seleccion = e.target.value;
    console.log(seleccion);
    busqueda[campo] = seleccion;
    console.log(busqueda)  ;
    filtrar(busqueda); 
}

function mostrarAutos(autosAMostrar){
    limpiar();
    autosAMostrar.forEach( auto => {
        const {marca , precio, puertas, color, year} = auto;
        const autohtml = document.createElement('p');
        autohtml.textContent = `${marca}  ${precio} ${puertas} ${color} ${year} ${puertas}`;
        resultado.appendChild(autohtml);
    });
}


function filtrar(busq){
    let resultadoFiltrado = autos;
    if (busq.marca) {
        resultadoFiltrado = resultadoFiltrado.filter(auto => auto.marca === busq.marca)
    }
    if (busq.color) {
        resultadoFiltrado = resultadoFiltrado.filter(auto => auto.color === busq.color)
    }
    if(busq.year){
        console.log("si entra xd ");
        resultadoFiltrado = resultadoFiltrado.filter(auto => auto.year == busq.year)
        console.log(resultadoFiltrado);
    }
    if(busq.puertas){  
        resultadoFiltrado = resultadoFiltrado.filter(auto => auto.puertas == busq.puertas)    
    }
    if (busq.minimo) {
        resultadoFiltrado = resultadoFiltrado.filter(auto => auto.precio >= busq.minimo);
    }
    if (busq.maximo) {
        resultadoFiltrado = resultadoFiltrado.filter(auto => auto.precio <= busq.maximo);
    }
    console.log(resultadoFiltrado);
    if(resultadoFiltrado.length === 0){
        limpiar();
        titulo.textContent = "No hay coincidencias";
        console.log("no hay coincidencias" + titulo)
        return;
    }
    titulo.textContent = "Resultados";
    mostrarAutos(resultadoFiltrado);

    
        // let resultadoFiltrado = autos;
    
        // // Función de filtro genérica para campos de texto
        // const filtrarPorCampo = (campo, valor) => {
        //     if (valor) {
        //         resultadoFiltrado = resultadoFiltrado.filter(auto => auto[campo] === valor);
        //     }
        // };
    
        // // Función de filtro genérica para campos numéricos
        // const filtrarPorCampoNumerico = (campo, valor, condicion) => {
        //     if (valor) {
        //         resultadoFiltrado = resultadoFiltrado.filter(auto => condicion(auto[campo], valor));
        //     }
        // };
    
        // // Aplicar filtros
        // filtrarPorCampo('marca', busq.marca);
        // filtrarPorCampo('color', busq.color);
        // filtrarPorCampo('puertas', busq.puertas);
        // filtrarPorCampo('year', busq.year);
    
        // // Filtrar por precio mínimo y máximo
        // filtrarPorCampoNumerico('precio', busq.minimo, (autoPrecio, minimo) => autoPrecio >= minimo);
        // filtrarPorCampoNumerico('precio', busq.maximo, (autoPrecio, maximo) => autoPrecio <= maximo);
    
        // mostrarAutos(resultadoFiltrado);
    
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
