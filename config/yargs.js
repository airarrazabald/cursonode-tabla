const argv = require('yargs')
                .option(
                    'b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'es labase de la tabla de multiplicar'
                        }
                ).option('l', {
                    alias:'listar',
                    type: 'boolean',
                    default:true,
                    describe: 'Muestra la tabla en consola'
                }).option('h',{
                    alias:'hasta',
                    type: 'number',
                    default: 5,
                    describe: 'esto es hasta donde llega latabla de multiplicar'
                }).check( (argv) => {
                    if(isNaN( argv.b)){
                        throw 'la base debe ser un numero';
                    }

                    return true;
                } )
                .argv;


                module.exports = argv; 
