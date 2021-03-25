

const { crearArchivo } = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.base,argv.listar,argv.hasta)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch( err => console.log(err));





