const mongoose = require('mongoose');

const saleSchema = mongoose.Schema({
    producto: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'productos',
            autopopulate:true
        }
    ],
    cantidad: {
        type: Number,
        required: [true,"Ingrese la cantidad de productos"],
        default: 0
    },
    valor_total:{
        type:Number,
        default: 0.0
    },
    cliente:{
        type: String
    }
})

saleSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("sales",saleSchema);