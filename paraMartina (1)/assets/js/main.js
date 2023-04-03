/*Javascript ES6, today is the day....*/

// ECMAScript o ES, es un conjunto de especificaciones que salen año tras año.
// ECMAScript6 o ES2015, fue el conjunto de features más grande hasta el momento.

/*
7/4
1) Const y Let (Block Scope)
2) Arrow Functions
3) Modules (Imports and Exports)
4) Template Literals
5) Classes (Constructor, Super, Setters and Getters)
6) Default Parameters

21/4
7) The Spread Operator
8) Destructuring
9) Rest Operator
10) map(), filter(), reduce() 

28/4
11) Promesas, Async/Await
*/

//1) Const y Let (Block Scope) - Declarar variables (el viejo var)

var myVariable = 5;
if (true) {
  var myVariable = 10;
}
console.log('El valor es de myVariable es', myVariable);

let myVariable2 = 5;
if (true) {
  let myVariable2 = 10;
  console.log('El valor es de myVariable 2 es', myVariable2);
  let myVariable10 = 4;
}
console.log('El valor es de myVariable 2 es', myVariable2);

let sumatoria = 0;
for (let index = 0; index < 10; index++) {
  const element = index;
  sumatoria += element;
}
console.log('la sumatoria es', sumatoria);

//2) Arrow Functions
//Old School
function nombreFun(nombre) {
  return nombre;
}
nombreFun('robert');
console.log(nombreFun('robert'));

//New ES6
const nombreFuncArrow = (nombre) => {
  return nombre;
};
console.log(nombreFuncArrow('Mike'));

const nombreFuncArrowMejorada = (nombre) => nombre;
console.log(nombreFuncArrowMejorada('Susan'));

const funcSum = (a, b) => a + b;
console.log('la suma es', funcSum(40, 100));
const funcSumCondicional = (a, b) => {
  if (a > 100) {
    return a + b;
  }
  return a + b + b;
};

// 3) Modules (Imports and Exports) import / export

import actores, {
  peliculasCopadas,
  cantidadPeliculas,
} from './libreriaAmiga.js';
import colors from './colors.js';

console.log(peliculasCopadas, cantidadPeliculas(peliculasCopadas));
console.log('Actores', actores);
console.log('Colores', colors);

// 4) Template Literals

const nombreAnimal = 'Conejo';
const aniosDeVida = 8;
const casaAnimal = 'madriguera';
const clase = 'highligh';

const mensaje = 'El ' + nombreAnimal + ' esta en su ' + casaAnimal + '.';
const mensajeBonito = `El ${nombreAnimal} esta en su ${casaAnimal}. Y le quedan ${
  2022 - aniosDeVida
} años de vida`;

const paragraph = `<p class="${clase}">Hola como estas</p>`;

const content = document.querySelector('#content');
content.innerHTML = paragraph;
console.log(mensajeBonito);
console.log(paragraph);

const listado = document.querySelector('.pelis');

peliculasCopadas.forEach((pelicula) => {
  const peli = `<h2>${pelicula.nombre}</h2><p>${pelicula.origen} - <span>${pelicula.anio}</span></p>`;
  const li = `<li>${peli}</li>`;
  listado.innerHTML += li;
});

// 5) Classes (Constructor, Super, Setters and Getters)

/*
Atributos de una persona:
- altura
- DNI
- Color de pelo
- Nacionalidad
- Nombre
- Apellido

Metodos de una persona
- get Nombre Completo
- getDNI
- set Hablar
- set Saltar
- setDNI
- set irADormir

*/

class Persona {
  constructor(nombre, apellido, altura, nacionalidad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    this.nacionalidad = nacionalidad;
    this.colorPelo = '';
  }

  //getters
  getNombreCompleto() {
    return `${this.nombre || ''} ${this.apellido || ''}`;
  }
  getAltura() {
    return this.altura || '';
  }
  getNacionalidad() {
    return this.nacionalidad || '';
  }
  getColorPelo() {
    return this.colorPelo || '';
  }

  getDatosPersona() {
    return `${this.getAltura()} ${this.getNombreCompleto()} ${this.getNacionalidad()}`;
  }

  //setters
  setColorPelo(color) {
    this.colorPelo = color;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }
}

const alumnoEjemplar = new Persona('German', 'Figueroa', 1.7, 'Argentino');
const viejoAmigo = new Persona('Facu', 'Colantonio', 1.75, 'Argentino');

console.log(
  alumnoEjemplar.getNombreCompleto(),
  alumnoEjemplar.getAltura(),
  alumnoEjemplar.getColorPelo()
);
// console.log(viejoAmigo.getNombreCompleto(), viejoAmigo.getAltura())

alumnoEjemplar.setColorPelo('Oscuro');

console.log(
  alumnoEjemplar.getNombreCompleto(),
  alumnoEjemplar.getAltura(),
  alumnoEjemplar.getColorPelo()
);

console.log(alumnoEjemplar.getDatosPersona());

class Ciudadano extends Persona {
  constructor(dni) {
    super();
    this.DNI = dni;
  }
}

const ciudadanoEjemplar = new Ciudadano('314443343');
ciudadanoEjemplar.setColorPelo('Rojo');
ciudadanoEjemplar.setNombre('Mike');
ciudadanoEjemplar.getDatosPersona();
console.log(ciudadanoEjemplar.getDatosPersona());

//6) Default Parameters

const getAlumno = (nombre = 'N/A', apellido = 'Sin mencionar', edad = 15) => {
  return `El nombre del alumno es ${
    nombre !== 'N/A' ? nombre : 'No mencionado'
  } su apellido es ${apellido} y su edad es ${edad}`;
};

getAlumno('Nombre');
console.log(getAlumno());

//7) The Spread Operator

const numerosPositivos = [100, 200, 300, 400];
const numeroNegativos = [-100, -150, -600];

const numerosReales = [...numeroNegativos, ...numerosPositivos, 800];

console.log('numeros Reales', numerosReales);

const paisEmpresa = {
  nombrePais: 'Argentina',
  monedaPais: 'Peso Argentino',
  fundacionPais: 1816,
};

const empresa = {
  nombreEmpresa: 'MaimoCorp',
  logoEmpresa: 'logo.svg',
};

const empresaTotal = {
  ...empresa,
  ...paisEmpresa,
  nombrePais: 'Brasil',
  monedaPais: 'Real',
};

const todoHollywood = [...peliculasCopadas, ...actores];

console.log('Todo holly', todoHollywood);

//8) Destructuring

const { monedaPais, nombrePais } = paisEmpresa;

console.log('moneda pais', monedaPais, nombrePais);

const [, , tercerNumero] = numerosPositivos;

console.log(tercerNumero);

// 9) Rest Operator
const universidad = {
  name: 'Umai',
  website: 'https://multimedia.maimonides.edu',
  sedes: ['Caballito', 'Centro', 'Palermo'],
};

const { name, ...infoMaimo } = universidad;

console.log('nombre uni', name);
console.log('resto de uni', infoMaimo);

//10) map(), filter(), find()
const arrNumeros = [6, 7, 2, 3, 4, 5];

//Map. Nos va a hacer una modificación en cada uno de los elementos de un array
//Nos va a devolver otro array

const arrNumerosX2 = arrNumeros.map((numero) => {
  return numero * 2;
});
const arrNumerosX2Sugar = arrNumeros.map((numero) => numero * 2);

console.log('numeros x 2', arrNumerosX2);

const nombres = [
  { nombre: 'Cami', genero: 'F' },
  { nombre: 'Maxi', genero: 'M' },
  { nombre: 'Ger', genero: 'M' },
  { nombre: 'Alexia', genero: 'F' },
  { nombre: 'Facu', genero: 'M' },
  { nombre: 'Ger', genero: 'F' },
];

const mejoresAlumnos = nombres.map(({ nombre, genero }) => {
    return `${genero === 'F' ? 'La mejor alumna es ' : 'El mejor alumno es'} ${nombre}`
});

console.log(mejoresAlumnos);

//Filter
//Filter nos permite buscar dentro de un array y filtrar si la condicion es verdadera
//Nos devuelve un array

const femeninas = nombres.filter(({ genero }) => genero === 'M')
console.log(femeninas)

//Find
//El find me permite buscar por una condicion
//El find me devuelve un objeto!

const ger = nombres.find(({nombre})=> nombre === 'Ger')

console.log('ger', ger)