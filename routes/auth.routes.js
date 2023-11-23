const { Router } = require ("express") //lo que necesitamos de expres-- router-- para iniciar a generar las rutas.
const { 
   authPost // importamos el auth post
 } = require ('../controllers/authController');
 

const router = Router(); //funcion que se extrae desde el paquete de express y lo quiero ejecutar
/*validatePost(schema)*/
router.post("/login", authPost)        // c created


module.exports = router