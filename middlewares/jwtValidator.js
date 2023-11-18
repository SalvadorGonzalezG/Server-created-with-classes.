const jwt = require("jsonwebtoken")

const validateToken = (secret) => { 
    return(req, res, next) => {
        const { authorization } = req.headers // desestructuramos auth
        token = authorization.split(" ")[1]

        const payload = jwt.verify(token, secret) // regresa el payload del usuario
        const isAdmin = payload.userName === "Aministrador"

        if (isAdmin) {
            next()
        } else {
            return res.status(403).json({
                msg:"El usuario no es un Administrador"
            })
        }
    }
}
module.exports = {
    validateToken
}