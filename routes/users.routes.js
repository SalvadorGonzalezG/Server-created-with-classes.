const { Router } = require ('express') //lo que necesitamos de expres-- router-- para iniciar a generar las rutas.
const router = Router(); //funcion que se extrae desde el paquete de express y lo quiero ejecutar

router.post("/",(req, res, next)=>{
    res.send("Hola")
    next()
}, ()=>{console.log("Hola desde la terminal de vscode")})        // c created
router.get("/")             // R read
router.put("/:userId")      // U update.
router.delete("/:userId")   // D delete

module.exports = router