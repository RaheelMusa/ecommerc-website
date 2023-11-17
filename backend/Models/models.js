const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    rating: String,
    category: String,
    image: String,
}, {timestamp: true})
productModel =  mongoose.model('Product', productSchema)
module.exports = productModel