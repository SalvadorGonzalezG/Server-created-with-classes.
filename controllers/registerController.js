const { response, request } = require('express')
const User = require("../models/usersModel")// importamos User
const bcrypt = require('bcrypt')
const registerUser = async (req = request, res = response) => {
    try {
    const { userName, password, email } = req; //tomamos userName, password, email. 

    if(!userName){
        bcrypt.hash(password, 10, async(err,hashedPassword) => { // ocupamos la contraseña numero de veces que se hace el hash y el call back err y hass pasword
        if (err) { console.log(err.stack)} // if que devuelve el error
         
        const user = new User({ userName, email, password: hashedPassword }) //clase User y body lo que va a leer el constructor.
        await user.save()
        res.status(201).json({ 
            //msg: "Usuario Creado",
            user
        })
        })
    }
    } catch(error){ // error cuando intentas crear un usuario.
        res.status(500).json({ // error en el servidor
            msg:"Algo Ocurrio al crear un usuario",
            error // manda el error de el porque ocurre este error.
        })
    }
}
module.exports = // exportar a la ruta para hacer uso de estos datos
{
    registerUser
}