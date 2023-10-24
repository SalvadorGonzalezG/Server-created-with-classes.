require('dotenv').config();
// SINTAXIS PARA INGRESAR A NUESTRAS VARIABLES DE ENTORNO QUE SON LAS QUE SE ENCUENTRAN EN MI DOCUMENTO ENV
/* const PORT = process.env.PORT;
console.log(PORT) */

 const Server = require('./server');
 // inicializar el servidor.
 const server = new Server()
 // empezar a llamar el metodo que vamos a utilizar para levantar el servidor.

server.listen() // con esto tenemos instancia de express creada