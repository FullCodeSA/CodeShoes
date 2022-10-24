const producto = require("../models/productos")

exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        sucess:true,message: "En esta ruta ud va a poder ver todos los productos"
    })
}

//VER LISTA PRODUCTOS
exports.getProducts=async (req,res,next) =>{
        res.status(200).json({
            success:true,
            message:"En esta ruta usted v a ver todos los productos"
        })
}


//CREAR NUEVO PRODUCTO /API/PRODUCTOS
exports.newProduct =async(req,res,next)=>{
    const product = await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}