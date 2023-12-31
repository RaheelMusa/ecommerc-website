const mongoose = require('mongoose')

exports.connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log(`Database connected successfully ${mongoose.connection.host}`)
    }).catch(err=>{
        console.log(`Database not found ${err}`)
    })
}
