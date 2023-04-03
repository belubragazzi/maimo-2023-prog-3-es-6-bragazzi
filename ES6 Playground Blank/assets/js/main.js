/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.
IMPORTAR DESDE CANCIONES EL ARRAY -> EXPORTAR E IMPORTAR

2. Use the map function to create a new array with the title of each song in uppercase letters.
HACER UN MAP DEVOLVER UN ARRAY CON TODAS LAS CANCIONES EN MAYUSCULAS () LUKI

3. Use the filter() function to create a new array with all the songs released before 1975.
CREAR LIBRERIA PARA TENER FUNCIONES AGREGADAS QUE VAMOS A USAR

CREAR  filter() con todas las canciones lanzadas antes de 1975

4. Use destructuring to create a variable that stores the title of the first song in the array.
CREAR UNA VARIABLE Q ALMACENE EL TITULO DE LA PRIMER CANCION DE UN ARRAY 

5. Use the find function to get the object representing the song "Hotel California".
CREAR UNA FUNCION FIND PARA QUE TRAIGA EL HOTEL CALIFORIA me permite buscar con condicion

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)
USAR RES OPERATOR PARA QUEAR UNA FUNCION QUE TOME CUALQUIER CANTIDAD DE NUM USANDO REDUCE

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.
HACER UN MAP Q ME DEVUELVA EN
recorrer el array y por cada uno de los array bohemian rapsody - queen (1975)

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.
con los títulos de todas las canciones de The Beatles

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)
usar funcion flecha y reduce oara crear una funcion en utils.js
que te calcule el año promedio de las canciones sumar las canciones y dividirlo por el total de las canciones, llevar a inter para sacar decimales

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)
11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.
USAR EL REST OPERETOS PARA CREAR UN ARRAY SIN EL PRIMER ELEMENTO (,ELEMENT2,3,4)

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."
CREAR UN STRING Q DIGA LOS BEATLES LANZARON UNA 
FIND Q TRAIGA LA CANCION LET IT BE Y DSP SOBRE ESO ARMAR EL TMPLE LITERAL PARA PONERLO DE LA FORMA QUE YO QUIERO
FIND OBTENGO EL REGISTRO Y TRABAJO CON ESE DATO

18. Use the map() method to create a new array with just the artist names.
 
19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.
QUE RETORNE UNA ALEATORIAMENTE E IMPRIMIRLA 3 VECES DE FORMA ALEATORIA

20. Write your own function using at least 3 concepts.
ESCRIBIR UNA CANCION BASADO EN 3 CONCEPTOS DISTINTOS (TODOS LOS ARTISTAS Q EMPIEZAN CON A POR EJ)


APLICAR LA MAYOR CANTIDAD DE LAS COSAS QUE VIMOS
*/

/* 
1) Import songs array using modules.
IMPORTAR DESDE CANCIONES EL ARRAY -> EXPORTAR E IMPORTAR */

import songs from "./songs.js";
console.log("Ex 1:", songs);

/* 
2. Use the map function to create a new array with the title of each song in uppercase letters.
HACER UN MAP DEVOLVER UN ARRAY CON TODAS LAS CANCIONES EN MAYUSCULAS () LUKI */

const nameUp = songs.map(({ title }) => title.toUpperCase());

console.log("Ex 2:", nameUp);

/* 3. Use the filter() function to create a new array with all the songs released before 1975.
CREAR LIBRERIA PARA TENER FUNCIONES AGREGADAS QUE VAMOS A USAR */

const beforeYear = songs.filter(({ year }) => {
  return year < 1975;
});

console.log("Ex 3:", beforeYear);

/* 4. Use destructuring to create a variable that stores the title of the first song in the array.
CREAR UNA VARIABLE Q ALMACENE EL TITULO DE LA PRIMER CANCION DE UN ARRAY */

const { title: fisrtTitle } = songs[0];

console.log("Ex 4:", fisrtTitle);

/* 5. Use the find function to get the object representing the song "Hotel California".
CREAR UNA FUNCION FIND PARA QUE TRAIGA EL HOTEL CALIFORIA me permite buscar con condicion
 */

const hotCalObjetc = songs.find(({ title }) => title === "Hotel California");

console.log("Ex 5:", hotCalObjetc);

/* 6. Use the rest operator to create a function that takes any number of arguments 
and returns their sum. 
(Tip: Use reduce)
USAR RES OPERATOR PARA CREAR UNA FUNCION QUE TOME CUALQUIER CANTIDAD DE NUM USANDO REDUCE
*/
const numbers = [1, 2, 3, 4, 55, 66, 12, 76, 5, 52];

const sumaNumbers = numbers.reduce(
  (acumulator, actual) => acumulator + actual,
  0
);

console.log(`Ex 6: La suma de ${numbers} es: ${sumaNumbers}`);
//////////////////////////// OPCION LEAN ////////////////////////////////////

const sumaNumbers2 = (...values) => values.reduce(
  (acumulator, actual) => acumulator + actual,
  0
);

console.log('Ex 6bis:',sumaNumbers2(1, 2, 3, 4, 55, 66, 12, 76, 5, 52))

/* 7. Use the map function and template literals to create a new array with strings in the format 
"Title - Artist (Year)" for each song.
HACER UN MAP Q ME DEVUELVA EN
recorrer el array y por cada uno de los array bohemian rapsody - queen (1975)
 */

const exSeven = songs.map(({ title, artist, year }) => {
  return `${title} - ${artist} (${year})`;
});
console.log("Ex 7:", exSeven);

/* 8. Use destructuring and the filter function to create a new array with the titles 
of all the songs by The Beatles.
con los títulos de todas las canciones de The Beatles 
*/

const beatlesSongs = songs
  .filter(({ artist }) => {
    return artist === "The Beatles";
  })
  .map(({ title }) => title);

console.log("Ex 8:", beatlesSongs);

/* 9. Use arrow functions and the reduce function to calculate the total 
number of years between all the songs' release dates. (Tip: Use reduce)
usar funcion flecha y reduce para crear una funcion en utils.js
que te calcule el año promedio de las canciones sumar las canciones 
y dividirlo por el total de las canciones, llevar a inter para sacar decimales
 */
const sumaYears = songs.reduce((acumulator, { year }) => acumulator + year, 0);

console.log("Ex 9:", sumaYears);

/* 10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)
 */
import promediateYears from "./utils.js";
console.log("Ex 10:", promediateYears);

/* 11. Use the find function to get the object representing the song with the longest title.
 */
const longer = songs.map(({ title }) => {
  return title.length;
});
const mostLonger = Math.max.apply(null, longer);
const findTitle = songs.find(({ title }) => title.length === mostLonger);
console.log("Ex 11:", findTitle);

///////////////////////////// OPCION LEAN //////////////////////////////////////

const longer2 = songs.find(({ title }) =>  title.length === Math.max(...songs.map(({title}) => title.length)));

console.log("Ex 11bis:", longer2);
/* los 3 puntos son para valores por separado y no que se mande como objeto */

/* 12. Use destructuring and template literals to log the title, 
artist and year of the first element of the array.
 */

const { title: titulo, artist: banda, year: anio } = songs[0];

console.log(
  `Ex 12: El primer elemento tiene como titulo ${titulo}, la banda ${banda} y el año ${anio}`
);
/* 
13. Use the rest operator to create a new array without the first element.
USAR EL REST OPERETOS PARA CREAR UN ARRAY SIN EL PRIMER ELEMENTO (,ELEMENT2,3,4) */

const [, ...firstNone] = songs;
console.log("Ex 13:", firstNone);

/* 14. Import the filter() function from a utils.js 
module and use it to create a new array with all the songs that have "Love" in the title.
 */

import { loveTitle } from "./utils.js";
console.log("Ex 14:", loveTitle);
/* 
15. Use the every() method to check if all the songs have titles that are 5 or more characters long. */

const checkTitles = songs.every(({ title }) => title.length >= 5);
console.log(
  "Ex 15: ¿todas los titulos tienen más de 5 caracteres?",
  checkTitles
);

/* 16. Use the some() method to check if there are any songs from the 80s.
 */

const checkYear = songs.some(({ year }) => year <= 1980);

console.log("Ex 16: ¿Alguna canción es de los 80s?", checkYear);

/* 17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."
CREAR UN STRING Q DIGA LOS BEATLES LANZARON UNA 
FIND Q TRAIGA LA CANCION LET IT BE Y DSP SOBRE ESO ARMAR EL TMPLE LITERAL PARA PONERLO DE LA FORMA QUE YO QUIERO
FIND OBTENGO EL REGISTRO Y TRABAJO CON ESE DATO
 */
const fun = songs.find(({title}) => title === "Let It Be" );

const {title, artist, year} = fun;

console.log(`Ex 17: ${artist} lanzaron ${title} en ${year}`);

/* 18. Use the map() method to create a new array with just the artist names.
 */

const justArtist = songs.map(({artist}) => artist);

console.log(justArtist);
/* 
19. Create a function called randomMovie that returns one movie from the songs array randomly. 
Log the call of this function 3 times.
QUE RETORNE UNA ALEATORIAMENTE E IMPRIMIRLA 3 VECES DE FORMA ALEATORIA */

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min)
}
function randomMovie() {
    const cancion = songs[randomNumber(songs.length,0)];
    return cancion;
}

console.log("Ex 19:", randomMovie(), randomMovie(), randomMovie())


/* 20. Write your own function using at least 3 concepts. 
ESCRIBIR UNA FUNNCION BASADO EN 3 CONCEPTOS DISTINTOS (TODOS LOS ARTISTAS Q EMPIEZAN CON A POR EJ)
titulos de canciones lanzadas antes de los 80s*/

const exTwenty = songs.filter(({year}) => year < 1980 ).map(({title}) => title);

console.log('Ex 20: Titulos de canciones lanzadas antes de los 80s:', exTwenty)