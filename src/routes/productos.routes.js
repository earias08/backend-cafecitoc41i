import { Router } from "express";
import { controladorPrueba, crearProducto, obtenerListaProductos } from "../controllers/productos.controllers";

const router = Router();

router.route("/prueba").get(controladorPrueba);
router.route("/productos").post(crearProducto).get(obtenerListaProductos);

export default router;

// app.get('/prueba', (req, res )=>{
//     res.send('Esta es una prueba de mi ruta GET')
// })
