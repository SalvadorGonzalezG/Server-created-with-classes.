const {response, request} = require ("express")

const createUser = (req = request, res = response) => {
    const { body } = req; //desestructurando una función 
    console.log(body)
    res.json({
        msg: "Hola desde el controller file"
    })
}
const readUser = (req, res) => {
    res.json ({
        msg: "Leer usuarios desde el Controller"
    })
}
const updateUser = (req = request, res = response) => {
    const params = req.params;
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