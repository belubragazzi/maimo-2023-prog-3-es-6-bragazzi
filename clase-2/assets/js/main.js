

/*
1) Const y Let (Block Scope)********
2) Arrow Functions **********
3) Modules (Imports and Exports) *********
4) Template Literals ************ ´´
5) Classes (Constructor, Super, Setters and Getters)
6) Default Parameters******
7) Destructuring ***************
8) The Spread Operator****
9) Rest Operator **************
10) map(), filter(), reduce(se usa para sacar promedios ) 
11) Promesas, Async/Await

SHORTCUTS
****SIEMPRE HACER FORMAT DOCUMENT PARA QUE AGREGUE PUNTO Y COMA****
**** shift + alt + a = comenta****
**** clg --> te escribe console.log() *****

*/

//1) Const y Let (Block Scope)*********************
/* 
Var -> variables son globales, la sube a la parte de arriba del archivo
Let (local al bloque) y const --> variables que estan adentro de un 
bloque de codigo (cuaquier q sea cerrado {}menos un objeto)

///////////// siempre vamos a usar const /////////////
let se utilizara para loops en donde debo agregar info


=== se utiliza para mismo valor y mismo tipo
*/

var miVar= 5;
let miVar2= 5;

if (true) {
  miVar = 10;
  miVar2= 10;
}
//console.log(miVar);
//console.log(miVar2);

const endDate='2023';

//2) Arrow functions --> funcion flecha******************************
/* Si usamos un solo parametro no hace falta los parentesis */

function calcDate(date) {
    return date * 2;
}

const multi = calcDate(123);

//console.log(multi);

const calcSum = (val) => {
    const valTemp = val*3
    return valTemp * 3;
}

const calcSumShort = val => val * 3;

/*Si vamos a usar una funcion de una sola linea no hace falta el return*/


//4)  Template Literals -> `comilla francesa ****************************

const nombreCompleto = (nombre, edad) => {
    // return "Soy " + nombre + " y tengo " + edad; 
    return `Soy ${nombre}, tengo ${edad} años`
}

const nombreCom = nombreCompleto("Belen", 22);
console.log(nombreCom);

const markup = `
<div class="wrapper">
<h2>Subtitulo</h2>
</div>`; //se puede poner un $ al nombre de la const para saber q es html

const parser = new DOMParser();
const htmlObject = parser.parseFromString(markup, "text/html").body.firstChild;
const container = document.querySelector('.container');

//container.append(htmlObject)
container.innerHTML += markup;//opcion2 mejor

// 3) Modules (Imports and Exports) incluir un js en otro js

import actores, { cantidadPeliculas } from './libreriaAmiga.js'; //al ser default no se tiene que poner dentro de los {}
import { peliculasCopadas } from './libreriaAmiga.js';
import colors from './colors.js';

console.log(peliculasCopadas, cantidadPeliculas(peliculasCopadas));
console.log('Actores', actores);
console.log('Colores', colors);

const listado = document.querySelector('.pelis');

peliculasCopadas.forEach((pelicula) => {
  const peli = `<h2>${pelicula.nombre}</h2><p>${pelicula.origen} - <span>${pelicula.anio}</span></p>`;
  const li = `<li>${peli}</li>`;
  listado.innerHTML += li;
});


console.log(peliculasCopadas, cantidadPeliculas(peliculasCopadas), actores);

//6) Default Parameters
/*sirve para tener un valor por default 
medio pete porque si pones el valor del segundo te dalta el ultimo, deberias usar un if es medio un quilombo igual*/
const getAlumno = (nombre ='N/A', edad = 1000)  => {
  return `El nombre del alumno es ${
    nombre !== 'N/A' ? nombre : 'No mencionado'
  } y su edad es ${edad}`;
}
console.log(getAlumno())

//7) Destructuring**************************************
/*
Destructuring arrancar un dato objeto de un array
permite traer el nombre de otra variable
crear const/

extraer posiciones de un array que necesite

sacado del punto 3 los obbjetos

*/
// ANTES
const miAnime = peliculasCopadas[2].nombre;
const miAnimeOri = peliculasCopadas[2].origen;

console.log('mi anime', miAnime, miAnimeOri);


//AHORA CON DESTRUCTURING
const {nombre: altoName, origen, anio} = peliculasCopadas[2];
// nombre: altoName --> alias --> cambia el nombre de un array
console.log ('mi anime', altoName, origen, anio);

//ejemplo nro dos, sirve para arrays no solo objetos

const numbers = [-100, -50, 4, 5, 6, 7]
const [pos1, pos2, pos3] = numbers;
console.log(pos1, pos2, pos3)


const numberes = [-100, -50, 4, 5, 6, 7]
const [, , po3] = numberes; //poniendo comas saltea la posicion hasta la q queres
console.log( po3)


//8) The Spread Operator*************************************
/* unifica arrays u objetos */
const numNegativos = [-500, -300, -100];
const numPositivos = [100, 300, 500];

const todosLosNumeros = [...numNegativos,...numPositivos, 800];
//juntalos dos arrays solo poniendo ... -> tres puntos (reemplaza al push)
console.log('todos', todosLosNumeros);


const paisEmpresa = {
  nombrePais: 'Argentina',
  monedaPais: 'Peso Argentino',
  fundacionPais: 1816,
};

const empresa = {
  nombreEmpresa: 'MaimoCorp',
  logoEmpresa: 'logo.svg',
};

const datosEmpresa = {...paisEmpresa,...empresa, direccion: 'hidalgo bla'}; 
/*array con array y objeto con objeto sino salta error(no hace error pero salta algo raro)
se puede agregar mas datis

*/console.log('Empresa', datosEmpresa)



//9) Rest Operator 
/* me  permite, teniendo un objeto, 
separar en una constante o variable alguno de los elementos
de ese objeto y todo lo demas en otra constante por eso rest*/

const {nombrePais, ...institucional} = paisEmpresa;
console.log('Paises', nombrePais, institucional);

//ejemplo 2
const universidad = {
  name: 'Umai',
  website: 'https://multimedia.maimonides.edu',
  sedes: ['Caballito', 'Centro', 'Palermo'],
};
const { namer, website, ...locacion } = universidad;

console.log('la uni', namer, website, locacion)

//10) map(), filter(), find(), reduce() --> SOLO FUNCIONA PARA ARRAYS

/*son metodos que reccorren el array de manera automatica sin 
hacer un loop
produce una transformacion en cada eleento del array
devuelven otro array transformado en lo que necesites
map produce una transformacion de manera automática */
console.log(numPositivos)

const numPositivosDobles = numPositivos.map(numer =>{numer*2})
//callback cuando es un solo parametro es sin parentesis 
console.log(numPositivosDobles)

const numPositivosDoble = numPositivos.map(numer =>{
 return numer > 100 ? numer : numer*2;
}) //si o si return si es mas largo


//map() SIEMPRE PONER RETURN
const pelititle1 = peliculasCopadas.map(
  (pelicula) => {
    return`<h2>${pelicula.nombre}</h2>`} 
);


//filter() filtra por la condicion que vos quieras devuelve un nnuevo array con los resultados
/* */
const pelisUsa = peliculasCopadas.filter(({origen, anio})=>{
  return !origen ==='USA' || parseInt(anio) >= 1990
});

console.log(pelisUsa)

//reduce() tiene dos parametros el acumulador y valor actual
/*para hacer totalizaciones, para poder totalizar
current value es la posicion del array
nos devuelve un numero entero o decimal pero siempre numero
*/

//si quiere ser en negativo se puede poner !origen ===USA
// 3 ejemplos de como se pueden aplicar las cosas

//Destructuring y import/export

import actualizados from './lenguajes.js'
const [, , cod3] = actualizados; 

console.log('El lenguaje nro 3 es:', cod3);

//SEGUNDO EJEMPLO MARTU .map()

const photoProducts = [
  { name: "DSLR Camera", price: 1200, type: "camera" },
  { name: "Prime Lens", price: 400, type: "lens" },
  { name: "Tripod", price: 150, type: "accessory" }
];

/* const newPhotoProducts = photoProducts.map(product => {
  let newProduct = { ...product }; // make a copy of the original object
  newProduct.priceWithTax = newProduct.price * 1.1; // add a new price with tax property
  if (newProduct.type === "camera") {
    newProduct.brand = "Nikon"; // add a brand property for cameras
  }
  return newProduct; // return the new object with additional properties
});

console.log(newPhotoProducts);

const taxedProducts = photoProducts.map(({name, type, price})=> { 
  return {name, type, price: price * 1.1}
 }) */

 const taxedProducts = photoProducts.map(({name, price, type})=>{
  return {name, price: price*1.1, type}
 })
 console.log(taxedProducts);