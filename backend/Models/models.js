const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    rating: String,
    category: String,
    image: String,
}, {timestamp: true})

productSchema.virtual('id').get(function (){
    return this._id.toHexString()
})
productSchema.set('toJSON', {
    virtuals: true,
})
productModel =  mongoose.model('Product', productSchema)
module.exports = productModel