const producto = require("../models/productos")

exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        sucess:true,message: "En esta ruta ud va a poder ver todos los productos"
    })
}

//VER LISTA PRODUCTOS
exports.getProducts=async (req,res,next) =>{
    const productos= await producto.find();
    if (!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
    }

    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}

//VER PRODUCTO POR ID
exports.getProductById= async (req, res, next)=>{
    const product= await producto.findById(req.params.id)
    
    if (!product){
            return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto',
            error:true
        })
    }
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras información sobre tu producto: ",
        product
    })
}

//UPDATE UN PRODUCTO
exports.updateProduct= async (req,res,next) =>{
    let product= await producto.findById(req.params.id) 
    if (!product){
            return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto'
        })
    }
    //SI EJECUTA, SE ACTUALIZA
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    });
    //RESPUESTA SI SE ACTUALIZA OK
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
}

//ELIMINAR PRODUCTO
exports.deleteProduct= async (req,res,next) =>{
    const product= await producto.findById(req.params.id)
    if (!product){
            return res.status(404).json({ 
            success:false,
            message: 'No encontramos ese producto'
        })
    }

    await product.remove();
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
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

