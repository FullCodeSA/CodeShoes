const mongoose = require ("mongoose")

const productosSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:[true,"Por favor registra el nombre del producto."],
        trim:true,
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres."]
    },
    precio:{
        type:Number,
        require:[true,"por favor registre el precio del producto."],
        maxLength:[8,"El precio del producto no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    descripcion:{
        type:String,
        require:[true,"por favor registre una descripcion para el producto."]
    },
    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                require:true
            },
            url:{
                type:String,
                require:true
            }
        }
    ],
    categotria:{
        type:String,
        require:[true,"Por favor seleccionar la categoria del producto."],
        enum:{
            values:[
              "Botas Outdoor",
              "Botas y Botines",
              "Guayos",
              "Mocasines y Formales",
              "Tenis",
            ]
        }
    },
    vendedor:{
        type:String,
        require:[true,"Por favor registre el vendedor de producto"],
        maxLength:[5,"Cantidad maxima del producto no puede sobrepasar 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                require:true
            },
            rating:{
                type:Number,
                require:true
            },
            comentario:{
                type:String,
                require:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("productos", productosSchema)