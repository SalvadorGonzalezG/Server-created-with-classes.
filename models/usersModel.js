const { string } = require("joi")
const { Schema, model } = require("mongoose") //propiedad de mongoose

const UserSchema = Schema({
    userName: {
        type:String,
        required: [true, "El userName es requerido"],
        unique: true // userName unico y ya no se puede repetir
    },
    email: {
        type:String,
        required: [true, "El email es requerido"],
        unique:true
    },
    phoneNumber: {
        type:Number
    },
    password: {
        type:String,
        required: [true, "El password es requerido"]
    },
    active:{ // Usuario activo por defecto.
        type:Boolean,
        default:true
    },
    /* inicial:{
        type: String,
        default: function(){ // funcion para gregar la primer letra de nuestro userName.
            return this.userName[0]
        }
    }*/
})
//UserSchema.method('getInitial', function() {
    //return this.userName[0] //retorna la primera letra de nuestro user name. //doc mongoose uso de  clases
//})
module.exports = model('User', UserSchema) //recibe el nombre y el schema ya que model es una funcion.