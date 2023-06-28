import { Router } from "express";
import { controladorPrueba } from "../controllers/productos.controllers";

const router = Router();

router.route("/prueba").get(controladorPrueba);

export default router;

// app.get('/prueba', (req, res )=>{
//     res.send('Esta es una prueba de mi ruta GET')
// })
