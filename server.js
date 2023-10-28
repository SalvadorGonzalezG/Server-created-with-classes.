// LOGICA DEL SERVIDOR DE EXPRESS.
const express = require('express');
const cors = require('cors');
//que conecte con la base de datos
const Database = require('./db/config');

class Server {
    constructor(){
        // construcción del servidor
        this.app = express(); // asignando la función de arriba al valor llamado app
        this.port = process.env.PORT || 3001; // variable que se la variable de entorno que se llame .port o la 3001
        this.database = new Database();
        this.usersPath = '/api/usuarios';
        this.middlewares();
        // Database connection.
        this.dbConnection();
        // Rutas
        this.router();
    }
    async dbConnection(){
        await this.database.dbConnection();
    }

    // midleweres lo hacemos un metodo
    middlewares(){
        console.log('Bienvenido a mi mundo')
        // cors peticiones controladas.
        this.app.use(cors()); // cors sirve para manejar la seguridad de las peticiones del front end al back end. EXPRESS utiliza CORS
        // middeware sirve para recibir datos.
        this.app.use(express.json()); // INTERPRETAR JSON
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(express.static('public')) // mandaremos nuestra web desde la carpeta public
    }
    router(){
        this.app.use(this.usersPath,require('./routes/users.routes')) // utilizar esta ruta desde el archivo de enrutamientp
    }
    // DENTRO DE LAS CLASES TENEMOS VARIABLES, VALORES Y METODOS
        // Metodo para que podamos abrir nuestro servidor 
        listen(){
            // metodo propio de express
            this.app.listen(this.port, ()=>{
                console.log(`Esta app corre en el puerto ${this.port}`)
            }) // con los parametros 
        }
}
// module.exports para exportar nuestro server
module.exports = Server
// el server lo ocuparemos en index.js