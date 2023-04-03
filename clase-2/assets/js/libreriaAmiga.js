const peliculasCopadas = [
  {
    nombre: "Batman", anio: "1985", origen: "USA",
    cast: [
      { name: "Michael Keaton", age: 60 },
      { name: "Michael Fifer", age: 50 },
    ],
    data: { format: "vhs" },
  },
  { nombre: "Batman II", anio: "1989", origen: "USA" },
  { nombre: "Evangelion", anio: "1980", origen: "Japón" },
  { nombre: "Exterminator II", anio: "1988", origen: "Argentina" },
  { nombre: "Kill Bill", anio: "2003", origen: "USA" },
  { nombre: "La Jetté", anio: "1990", origen: "Francia" },
];

const actores = [
  { nombre: "Guillermo Franchela", edad: "67", origen: "Argentina" },
  { nombre: "Ricardo Darín", edad: "65", origen: "Argentina" },
];

const cantidadPeliculas = (arrayPelis) => arrayPelis.length;

export { peliculasCopadas, cantidadPeliculas };
export default actores; 

//menos llavecitas {} en el import no tiene mucho mas
//perdon lea estaba en narnia

/* JSON
<----clave
nombre: 
<----valor
"La Jetté", 


rever la 1:10 para all data
*/