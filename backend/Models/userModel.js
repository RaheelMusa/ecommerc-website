const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true
    },
    lastName: {
        type: String,
        minLength: 3,
        maxLength: 15,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required: true,
    },
    password: {
        type: String,
        required: true, 
    },
    age: {
        type: Number,
        required: true,

    },
    phone: {
        type:  String,
        required: true
    }
    


})
userSchema.virtual('id').get(function (){
    return this._id.toHexString()
})
userSchema.set('toJSON', {
    virtuals: true,
})

const userModel = new mongoose.model('user', userSchema)
module.exports = userModel

