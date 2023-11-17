const express = require('express')
const { register, login, changePassword, sendMail, resetPassword } = require('../controllers/userController')
const { checkUserAuth } = require('../middleware/middleware')

const userRouter = express.Router()
userRouter.use("/changePassword/:id", checkUserAuth)
userRouter.patch('/changePassword/:id', changePassword)
userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/resetpassword/:id/:token', resetPassword)
userRouter.post('/resetemailsend', sendMail)
module.exports = userRouter
