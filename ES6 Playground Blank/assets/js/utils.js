import songs from "./songs.js";
const promediateYears = Math.floor(
  songs.reduce((acumulator, { year }) => acumulator + year, 0) / songs.length
);

const loveTitle = songs.filter(({title}) => title.includes("Let"))
export default promediateYears;
export { loveTitle };
