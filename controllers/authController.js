const { response, request } = require("express");
const User = require('../models/usersModel');
const bcryptjs = require("bcryptjs"); 
const jwt = require("jsonwebtoken");
    //hacer un return del json para saber que esta funcionando
const authPost = async(req = request, res = response ) => { // mandar el email y pasword de body
    const { email, password } = req.body
    try {
        // Verificar si el usuario existe por el correo
        const user = await User.findOne({ email }) // con a informacion del email
        
        if(!user){ // Si este usuario no existe retorna el status y no continues leyendo el codigo para.
            return res.status(400).json({
                msg: "Usuario no encontrados"
            })
        }
        const validPassword = bcryptjs.compareSync(password, user.password) //compara con los usuarios que tengasn hash

        if(!validPassword){
            return res.status(400).json({
                msg: "password no encontrado"
            })
        }

        res.status(200).json({
            message: 'Auth Route desde el controller --POST',
            user, //mostrar
            token:generateToken(user._id)
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error en el servidor desde Auth',
            error
        })
    }
}

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{ expiresIn:'60m'
    })

}

module.exports = { authPost }