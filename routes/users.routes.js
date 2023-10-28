const { Router } = require ('express') //lo que necesitamos de expres-- router-- para iniciar a generar las rutas.
const { 
    createUser,
    readUser,
    updateUser,
    deleteUsers
 } = require ('../controllers/usersController')
const router = Router(); //funcion que se extrae desde el paquete de express y lo quiero ejecutar

router.post("/", createUser /*,(req, res, next)=>{ // request, response.
    res.json({msg:"Hola desde el router file"})
    //next() // para yo poder ejecutar el siguiente parametro.
}, ()=>{console.log("Hola desde la terminal de vscode")}*/)        // c created

router.get("/",readUser)             // R read
router.put("/:userId",updateUser)      // U update.
router.delete("/:userId",deleteUsers)   // D delete

module.exports = router