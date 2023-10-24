const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        // construcción del servidor
        this.app = express() // asignando la función de arriba al valor llamado app
        this.port = process.env.PORT || 3001; // variable que se la variable de entorno que se llame .port o la 3001
    }
    // DENTRO DE LAS CLASES TENEMOS VARIABLES, VALORES Y METODOS
        // Metodo para que podamos abrir nuestro servidor 
        listen(){
            // metodo propio de express
            this.app.listen(this.port, ()=> {
                console.log(`Esta app corre en el puerto ${this.port}`)
            }) // con los parametros 
        }
}
// module.exports para exportar nuestro server
module.exports = Server
// el server lo ocuparemos en index.js

