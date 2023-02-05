const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productCode:{
        type:String,
        required:true
    },
    image:{
       type:String
    },
    unitPrice:{
        type:String
    },
    totalPrice:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
},{versionKey:false})

const Product = mongoose.model('Product',productsSchema)
module.exports = Product