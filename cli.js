require('dotenv').config();
const Database = require('./db/config');
const User = require('./models/usersModel')

const repl = require('repl'); //

const saludar = () => {
    console.log("hola! Listo para ser ejecutad!!")
}
const database = new Database();
database.dbConnection();

const replServer = repl.start(); 
replServer.context.saludar = saludar; //context objeto literal asignar lo que sea para hacer uso del mismo
replServer.context.User = User;
replServer.context.db = database