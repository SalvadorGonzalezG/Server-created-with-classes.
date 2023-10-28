const mongoose = require('mongoose');

class Database { //CLASES COMIENZAN CON MAYUSCULA
    constructor(){
        // Una cadena de conexion sea igual a mi variable de entorno
        this.connection = process.env.MONGO_CNN
    }
    // Metodo que nos permite conectarnos con la base de datos.
    async dbConnection(){
        try{
            await mongoose.connect(this.connection, {
             useNewUrlParser: true,
             useUnifiedTopology: true
            }) //
            console.log("conectados a la base de datos")

        } catch (error) {
            console.log(error);
            throw new Error(' Error a la hora de conectarse a la base de datos.')
        }
    }
}
// esportamos como se llama nuestra base de datos
module.exports = Database