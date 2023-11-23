const { response, request } = require('express');
const jtw = require("jsonwebtoken");

const User = require("../models/usersModel")

const validarJWT = async( req=request, res = response, next)=>{ //midelwere
    const token = req.header("x-token")
    if(!token){ // si no hay un token que rompa la el codigo y diga que no hay un token en la petición
        return res.status(401).json({
            msg: "No hay token en la petición"
        })
    }
    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET) //si hay un token intenta extraer el id
        const user = await User.findById(id)
        if(!user){ // si el usuario no existe
            return res.status(401).json({
                msg: "Token no valido - Usuario no existe en la base de datos"
            })
        }
        req.usuario = user
        next() // continua leyendo el codigo
    } catch (error){
        return res.status(401).json({
            msg: "Token no valido"
         })
    }
}
module.exports = { validarJWT }