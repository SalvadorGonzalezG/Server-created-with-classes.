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
        const user = await User.find().limit(Number(limit));
        res.json({
        user
        })
    }catch(error){
        res.status(500).json({
            msg: "Algo ocurrio al leer usuarios",
            error
        })
    }
    
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