const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base = 5,listar,hasta) => {

    return new Promise((resolve, reject) => {
        try{
            

            let salida = '',consola = '';
            for (let i = 1; i <= hasta; i++) {
                salida += `${base } ${ 'x' } ${i} ${ '=' } ${base * i}\n`;
                consola += `${base } ${ 'x'.green } ${i} ${ '='.green } ${base * i}\n`;
            }
            
        if(listar){
            console.log(colors.green('==========='));
            console.log(`Tabla del ${ colors.blue( base )}`);
            console.log(colors.green('==========='));
            console.log(consola);
        }
           
            fs.writeFileSync(`./salida/tabla-${base}`, salida);
            resolve(`tabla-${base}`);
        }catch(error){
            reject(error);
        }        
    });    
}

module.exports = {
    crearArchivo 
}