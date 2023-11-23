// const userModel = require("../Models/models")

const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../Models/userModel')
const { transporter } = require('../middleware/nodemailer')
const path = require('path')

exports.get = async(req, res) => {
    try {
        const {id, token} = req.params
        // console(req.params)

        const oldUser = await userModel.findOne({_id: id})
        if(!oldUser){
            return res.status(404).json({message: "No User found"})
        }
        const secret = await oldUser.password + process.env.JWT_SECRET
        const verifyToken = await jwt.verify(token, secret)
        if(verifyToken){
            return res.render(path.join(__dirname, '../views/reset-password.ejs'), {
                userId: id,
                token: token
            })
        }
        return res.status(201).json({success: true})
    } catch (error) {
        return res.status(500).json({message: "An error occur while getting users", message: error.message})
    }
}

exports.register = async(req, res) =>{
    const {firstName, lastName, email, password, age, phone}  = req.body
    try {
        if(!firstName || !lastName || !email || !password || !age || !phone ){
            return res.status(402).json({message: "All field required"})
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(500).json({message: "Email already exist"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const registerUser = await  userModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            age: age,
            phone: phone
        })
        const token = jwt.sign({ email: registerUser.email, id: registerUser._id}, process.env.JWT_SECRET)
        
        return res.status(201).json({success: true, message: "User registered successfully",
        user:{
            email: registerUser.email, id: registerUser._id,
        },
        token})
        

    } catch (error) {
        return res.status(500).json({message: "An error occur while registering the user", error: error.message})
    }

}
exports.login = async(req, res) =>{
    const {email, password} = req.body
    try {
        const existingUser = await userModel.findOne({email})
        if(!existingUser){
            return res.status(404).json({message: "User not found."})
        }
        const matchedPassword = await bcrypt.compare(password, existingUser.password)
        if(!matchedPassword){
            return res.status(500).json({message: "Invalid Credentials"})
        }
        const token =  jwt.sign({email:existingUser.email, id: existingUser._id},process.env.JWT_SECRET, {expiresIn: '3d'})

        return res.status(201).json({success: true, message: "User logged in successfully", user:{ id:existingUser._id, email: existingUser.email} , token})

        
    } catch (error) {
        return res.status(500).json({message: "An error eccur while user login", error: error.message})
    }
}
exports.changePassword = async(req, res) =>{
    const {oldPassword, newPassword, confirmPassword} = req.body
    try {
        if( !oldPassword || !newPassword || !confirmPassword){
            return res.status(500).json({message: "All fields are required"})
        }
        
        const user = req.user
        const verifyPassword = await bcrypt.compare(oldPassword, user.password)
        if(!verifyPassword){
            return res.status(500).json({message: "password didn't matched"})
        }
        const newHashedPassword = await bcrypt.hash(newPassword, 10)
        await userModel.findByIdAndUpdate(user._id, {$set: {password: newHashedPassword}})
        return res.status(201).json({message: "Our password has been change successfully"})


    } catch (error) {
        return res.status(500).json({message: "An error occur while changing your password", error: error.message})
    }
}
exports.sendMail = async(req, res) =>{
    try {
        const {email}= req.body
        if(!email){
            return res.status(404).json({message: "Email not found"})
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).json({message: "User not found", error: error.message})
        }
        const secret = user._id + process.env.JWT_SECRET
        const token = jwt.sign({USERID: user._id}, secret,{expiresIn: '30min'})

        const link = `http://127.0.0.1:7000/api/v1/resetemailsend/${user._id}/${token}`
     const message = `We have received reset password request. Link the link below to reset your password. \n\n ${link}.\n\n Link will be expired in 30 minutes`
        let mailOption = {
            from: process.env.EMAIL_FROM,
            to: user.email,
            subject: '<beeta> ..Reset password link',
            // text:  `http://127.0.0.1:7000/api/v1/emailResetPassword/${user._id}/${token}`
            text: message 
        }
       await transporter.sendMail(mailOption)
        console.log(link)
        return res.status(201).json({
            success: true,
            message: "Reset password email sent... please check your email"
        })
        
    } catch (error) {
        return res.status(401).json({message: "An error occur while reseting your password", error: error.message})
    }
}
exports.resetPassword = async(req, res ) =>{
    const { password, confirmPassword } = req.body
    const {id, token} = req.params;
    const user = await userModel.findById(id)
    if(!user){
        return res.status(400).json({message: "User is not available"})
    }
    const new_secret = user._id + process.env.JWT_SECRET
    try {
        if(!password || !confirmPassword){
            return res.status(400).json({message: "All field required"})
        }
        if(password !== confirmPassword){
            return res.status(400).json({message: "Password didn't matched.."})
        }
        jwt.verify(token, new_secret)
        const newHashedPassword = await bcrypt.hash(password, 10)
        await userModel.findByIdAndUpdate(user._id, {$set: {password: newHashedPassword}})
        return res.status(201).json({message: "Your password has been reset successfully"})
    } catch (error) {
        return res.status(500).json({message: "An error occur while resetting your password"})
    }
}