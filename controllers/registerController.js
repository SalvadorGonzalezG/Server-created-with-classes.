const { response, request } = require("express");
const User = require("../models/usersModel"); // importamos User
const bcrypt = require('bcryptjs')

const registerUser = async (req = request, res = response) => {
    try {
    const { userName, password, email } = req.body; //tomamos userName, password, email. 
    
    const user = await User.findOne({ userName }) //verifica si el usuario ya existe

    if (!user){
        const salt = await bcrypt.genSalt(10);
        //console.error("Salt", salt)

        const hashedPassword = await bcrypt.hashSync(password, salt) // guardamos de forma haseada la contraseña
        const user = new User({ userName, email, password: hashedPassword }) //clase User y body lo que va a leer el constructor.
        await user.save() // Guarda en la base de datos
        //console.error("Hashed", hashedPassword)

        res.status(201).json({ 
            message:"El usuario fue creado correctamente"
        })
        } else { 
            res.status(403).json({
                message: "El nombre de usuario ya existe"
            })
        }
    } catch (error) { // error cuando intentas crear un usuario.
        console.error(error)
        res.status(500).json({ // error en el servidor
            msg:"Algo Ocurrio al crear un usuario",
            error // manda el error de el porque ocurre este error.
        })
    }
}
    // metodo log in con los datos de userName y password con jwt para autenticar algunas de las rutas protegidas.
const loginUser = async (req = request, res = response) => {
    const { userName, password } = req.body; //solicitud de userName, password de req.body
    
    const user = await User.findOne({ userName })// obtener el usuario
    if(!user){
        return res.status(403).json({
            msg:"El usuario no fue encontrado"
        })
    }
 //hashedPasword comprueba con el password de req.body
 const correctPassword = bcrypt.compareSync(password, user.password)
    
    if(correctPassword) {
        res.status(200).json({
            msg: "La contraseña es correcta"
        })
    } else {
        res.status(403).json({
            msg:"La contraseña no es correcta"
        })
    }
}

module.exports = // exportar a la ruta para hacer uso de estos datos
{
    registerUser,
    loginUser
}