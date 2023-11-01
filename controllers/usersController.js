const {response, request, query} = require ("express")
const User = require('../models/usersModel')

const createUser = async(req = request, res = response) => {
    const { body } = req; //desestructurando una función 
    const user = new User(body)
    await user.save()
    //console.log(body)
    try{
        res.status(201).json({
            msg: "Hola desde el controller file",
            user
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrio al crear un usuario"
        })
    }
}

const readUser = (req, res) => {
    res.json ({
        msg: "Leer usuarios desde el Controller"
    })
}
const updateUser = (req = request, res = response) => {
    const { params, query } = req;
    console.log(query);
    console.log(params)
    res.json ({
        msg:"modificar usuarios desde controller"
    })
}
const deleteUsers = (req, res) => {
    res.json({
        msg:"Borrar usuarios desde el controller"
    })
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUsers
}