const {response, request, query} = require ("express")
const User = require('../models/usersModel')

const createUser = async(req = request, res = response) => {    
    //console.log(body)
    try{
        const { body } = req; //desestructurando una función 
        const user = new User(body) //clase User y body lo que va a leer el constructor.
        await user.save()

        res.status(201).json({ //creando un usuario
            msg: "Usuario Creado",
            user
        })
    }catch(error){ // error cuando intentas crear un usuario.
        res.status(500).json({ // error en el servidor
            msg:"Algo Ocurrio al crear un usuario",
            error // manda el error de el porque ocurre este error.
        })
    }
}

const readUser = async(req, res) => {
    try {   //query parameters, mandar llamar en DB el numero de registros con /?limit=numero que queramos.
        const { limit } = req.query 
        const queryParam = {active:true} //parametros de busqueda de forma más especifina.
        const recordLength = await User.countDocuments()
        const user = await User.find(queryParam).limit(Number(limit));
        res.json({
        recordLength, //saber la cantidad de registros que tengo aunque en mi limit parameter mande llamar 1
        user
        })
    }catch(error){
        res.status(500).json({
            msg: "Algo ocurrio al leer usuarios",
            error
        })
    }
    
}
const updateUser = async(req = request, res) => {
    try{
        const { params, body } = req;
        const { userId } = params // propiedad de user.routes.js desestructar 
        console.log(userId)
        await User.findByIdAndUpdate(userId, body) //findby... tiene como primer parametro que ser el usuario a modificar y el segundo parametro el body para regresar el usuario
        const userToShow = await User.findById(userId)
        //console.log(query);
        //console.log(params)
        res.status(202).json ({
            msg:"Los usuarios se modificaron con exito",
            userToShow
        })
    } catch (error) {
        res.status(500).json({
            msg:"Algo Ocurrio al modificar el registro",
            error
        })
    }
    
}
const deleteUsers = async(req = request, res = response) => {
    try{
        const { userId } = req.params;
        const deleteState = { "active": false }
        await User.findByIdAndUpdate( userId, deleteState ) // dos parametros userId parametro tipo json propiedad en false
        const userToShow = await User.findById( userId )   // para mostrar lo que se modifico despues de haber hecho el borrado logico
        res.status(202).json({
            msg:"Se borro el registro",
            userToShow
        })
    } catch (error) {
        res.status(500).json({
            msg:"Borrar usuarios desde el controller"
        })
    }
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUsers
}