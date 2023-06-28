
export const controladorPrueba = (req, res) => {
    res.send("Esta es una prueba de mi ruta GET");
  }

export const crearProducto = (req, res) => {
   try {
    
   } catch (error) {
    console.log(error);
    res.status(404).json({
        mensaje: 'Error al intentar crear un producto' 
    })
   }
  }