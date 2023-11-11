// funcion que valida
function validatePost (schema) {
   return (req, res, next) => {// para que una funcion fuera un middleware tiene que tener 4 valores
    const { error } = schema.validate(req.body)
    if(error) {// si encuentras un error retorna lo siguinte
    return res.status(403).json({
        msg: error.detail[0].message
    })
    }
    next()
 }
}
module.exports = { validatePost }