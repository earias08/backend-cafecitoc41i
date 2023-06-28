import { Router } from "express";
import { controladorPrueba, crearProducto } from "../controllers/productos.controllers";

const router = Router();

router.route("/prueba").get(controladorPrueba);
router.route("/productos").post(crearProducto);

export default router;

// app.get('/prueba', (req, res )=>{
//     res.send('Esta es una prueba de mi ruta GET')
// })
