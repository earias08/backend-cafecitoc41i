import { validationResult } from "express-validator";
import Producto from "../models/producto";

export const controladorPrueba = (req, res) => {
    res.send("Esta es una prueba de mi ruta GET");
  }

export const crearProducto = async (req, res) => {
   try {

    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
        mensaje: 'El producto fue creado correctamente' 
    })

   } catch (error) {
    console.log(error);
    res.status(400).json({
        mensaje: 'Error, no se pudo crear el producto'
    })
   }
  }

  export const obtenerListaProductos = async (req, res)=>{
    try{
        //buscar en la BD la collection de productos
        const productos = await Producto.find();
        res.status(200).json(productos);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar obtener los productos' 
        })
    }
  }

  export const obtenerProducto = async (req, res)=>{
    try{
        //buscar en la BD un documento producto mediante el id
        console.log(req.params.id);
        const producto = await Producto.findById(req.params.id);
        res.status(200).json(producto);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar obtener el producto' 
        })
    }
  }
  export const borrarProducto = async (req, res)=>{
    try{
        //buscar en la BD un documento producto mediante el id
      await Producto.findByIdAndDelete(req.params.id);
      res.status(200).json({
        mensaje:"El producto fue eliminado correctamente"
      });
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'Error, no se pudo borrar el producto' 
        })
    }
  }

  export const editarProducto = async (req, res)=>{
    try{
      
        //validamos antes de actualizar
       await Producto.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: 'El producto fue actualizado correctamente'
      })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'Error, no se pudo actualizar el producto' 
        })
    }
  }




